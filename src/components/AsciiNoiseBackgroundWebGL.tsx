'use client';

import { useEffect, useRef } from 'react';

const CHARSET =
  '$@B%8&WM#*oakbdqwmZOQLJYzvnrf/\\|()1{}[]?+~<>i!lI;:,"^`.\' ';

const FONT_SIZE = 32;
const COLS = 16; // glyph atlas grid
const ROWS = 6;

const vertexShader = `
attribute vec2 a_position;
varying vec2 v_uv;

void main() {
  v_uv = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`;

const fragmentShader = `
precision highp float;

uniform sampler2D u_atlas;
uniform float u_time;
uniform vec2 u_resolution;

varying vec2 v_uv;

// ---------- Noise ----------
float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);

  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));

  vec2 u = f * f * (3.0 - 2.0 * f);

  return mix(a, b, u.x) +
         (c - a) * u.y * (1.0 - u.x) +
         (d - b) * u.x * u.y;
}
// ---------------------------

void main() {
  float cellSize = float(${FONT_SIZE});
  vec2 pixel = gl_FragCoord.xy;
  vec2 cell = floor(pixel / cellSize);

  float n = noise(cell * 0.15 + u_time * 0.3);
  float alpha = pow(n, 1.8);

  if (alpha < 0.05) discard;

  float charIndex = floor(n * float(${CHARSET.length}));
  float col = mod(charIndex, float(${COLS}));
  float row = floor(charIndex / float(${COLS}));

  vec2 glyphUV = fract(pixel / cellSize);
  vec2 atlasUV = (vec2(col, row) + glyphUV) / vec2(${COLS}.0, ${ROWS}.0);

  float glyph = texture2D(u_atlas, atlasUV).r;

  gl_FragColor = vec4(vec3(1.0), glyph * alpha);
}
`;

function createGlyphAtlas(): HTMLCanvasElement {
  const canvas = document.createElement('canvas');
  canvas.width = COLS * FONT_SIZE;
  canvas.height = ROWS * FONT_SIZE;

  const ctx = canvas.getContext('2d')!;
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = 'white';
  ctx.font = `${FONT_SIZE}px monospace`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  CHARSET.split('').forEach((char, i) => {
    const x = (i % COLS) * FONT_SIZE + FONT_SIZE / 2;
    const y = Math.floor(i / COLS) * FONT_SIZE + FONT_SIZE / 2;
    ctx.fillText(char, x, y);
  });

  return canvas;
}

function compile(gl: WebGLRenderingContext, type: number, src: string) {
  const s = gl.createShader(type)!;
  gl.shaderSource(s, src);
  gl.compileShader(s);
  if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
    throw new Error(gl.getShaderInfoLog(s) || 'shader error');
  }
  return s;
}

export default function AsciiNoiseBackgroundWebGL() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current!;
    const gl = canvas.getContext('webgl', { alpha: true })!;
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    const vs = compile(gl, gl.VERTEX_SHADER, vertexShader);
    const fs = compile(gl, gl.FRAGMENT_SHADER, fragmentShader);

    const program = gl.createProgram()!;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    gl.useProgram(program);

    const quad = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, quad);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW
    );

    const pos = gl.getAttribLocation(program, 'a_position');
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

    // Upload glyph atlas
    const atlasCanvas = createGlyphAtlas();
    const tex = gl.createTexture()!;
    gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.texImage2D(
      gl.TEXTURE_2D,
      0,
      gl.LUMINANCE,
      gl.LUMINANCE,
      gl.UNSIGNED_BYTE,
      atlasCanvas
    );
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

    const timeLoc = gl.getUniformLocation(program, 'u_time');
    const resLoc = gl.getUniformLocation(program, 'u_resolution');

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = innerWidth * dpr;
      canvas.height = innerHeight * dpr;
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(resLoc, canvas.width, canvas.height);
    }

    resize();
    window.addEventListener('resize', resize);

    const start = performance.now();

    function frame(t: number) {
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.uniform1f(timeLoc, (t - start) * 0.001);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      requestAnimationFrame(frame);
    }

    requestAnimationFrame(frame);
    return () => window.removeEventListener('resize', resize);
  }, []);

  return (
    <canvas
      ref={ref}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 4,
        pointerEvents: 'none',
      }}
    />
  );
}
