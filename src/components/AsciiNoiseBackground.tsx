import { useEffect, useRef } from 'react';

const AsciiNoiseBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationFrameRef = useRef<number>(0);
  const timeRef = useRef<number>(4);

  // --- Config ---
  const gradient =
    '$@B%8&WM#*oakbdqwmZOQLJYzvnrf/\\|()1{}[]?+~<>i!lI;:,"^`.\' ';
  const fontSize = 12;
  const fontFamily = 'monospace';
  const charWidth = fontSize * 0.6;
  const charHeight = fontSize;

  const noiseScale = 0.05;
  const timeSpeed = 0.001;

  // --- Perlin Noise Implementation ---
  function fade(t: number): number {
    return t * t * t * (t * (t * 6 - 15) + 10);
  }

  function lerp(t: number, a: number, b: number): number {
    return a + t * (b - a);
  }

  function grad(hash: number, x: number, y: number, z: number): number {
    const h = hash & 15;
    const u = h < 8 ? x : y;
    const v = h < 4 ? y : h === 12 || h === 14 ? x : z;
    return ((h & 1) === 0 ? u : -u) + ((h & 2) === 0 ? v : -v);
  }

  const permutation: number[] = [
    151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140,
    36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148, 247, 120, 234,
    75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33, 88, 237,
    149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71, 134, 139, 48,
    27, 166, 77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133, 230, 220, 105,
    92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25, 63, 161, 1, 216, 80, 73,
    209, 76, 132, 187, 208, 89, 18, 169, 200, 196, 135, 130, 116, 188, 159, 86,
    164, 100, 109, 198, 173, 186, 3, 64, 52, 217, 226, 250, 124, 123, 5, 202,
    38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227, 47, 16, 58, 17, 182,
    189, 28, 42, 223, 183, 170, 213, 119, 248, 152, 2, 44, 154, 163, 70, 221,
    153, 101, 155, 167, 43, 172, 9, 129, 22, 39, 253, 19, 98, 108, 110, 79, 113,
    224, 232, 178, 185, 112, 104, 218, 246, 97, 228, 251, 34, 242, 193, 238,
    210, 144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249, 14, 239, 107, 49,
    192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115, 121, 50, 45, 127,
    4, 150, 254, 138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128,
    195, 78, 66, 215, 61, 156, 180
  ];

  const p = new Array<number>(512);
  for (let i = 0; i < 256; i++) {
    p[i] = p[256 + i] = permutation[i];
  }

  function perlinNoise(x: number, y: number, z: number): number {
    const X = Math.floor(x) & 255;
    const Y = Math.floor(y) & 255;
    const Z = Math.floor(z) & 255;

    x -= Math.floor(x);
    y -= Math.floor(y);
    z -= Math.floor(z);

    const u = fade(x);
    const v = fade(y);
    const w = fade(z);

    const A = p[X] + Y;
    const AA = p[A] + Z;
    const AB = p[A + 1] + Z;
    const B = p[X + 1] + Y;
    const BA = p[B] + Z;
    const BB = p[B + 1] + Z;

    return lerp(
      w,
      lerp(
        v,
        lerp(u, grad(p[AA], x, y, z), grad(p[BA], x - 1, y, z)),
        lerp(u, grad(p[AB], x, y - 1, z), grad(p[BB], x - 1, y - 1, z))
      ),
      lerp(
        v,
        lerp(u, grad(p[AA + 1], x, y, z - 1), grad(p[BA + 1], x - 1, y, z - 1)),
        lerp(
          u,
          grad(p[AB + 1], x, y - 1, z - 1),
          grad(p[BB + 1], x - 1, y - 1, z - 1)
        )
      )
    );
  }
  // --- End Perlin Noise ---

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    function resize() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function draw() {
      if (!canvas || !ctx) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${fontSize}px ${fontFamily}`;
      ctx.textBaseline = 'top';

      const cols = Math.ceil(canvas.width / charWidth);
      const rows = Math.ceil(canvas.height / charHeight);

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const noiseVal = perlinNoise(
            col * noiseScale,
            row * noiseScale,
            timeRef.current
          );

          const normalized = (noiseVal + 1) / 2;
          const index = Math.floor(normalized * (gradient.length - 1));
          const char = gradient[index];
          
          // Fade characters out instead of darkening
          const alpha = Math.pow(normalized, 3) / 2;
          if (alpha < 0.015) continue;
          ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
          ctx.fillText(char, col * charWidth, row * charHeight);
        }
      }

      timeRef.current += timeSpeed;
      animationFrameRef.current = requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener('resize', resize);
    draw();

    return () => {
      cancelAnimationFrame(animationFrameRef.current);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{
        zIndex: 1,
        pointerEvents: 'none',
        display: 'block'
      }}
    />
  );
};

export default AsciiNoiseBackground;