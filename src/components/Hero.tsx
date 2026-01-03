import { ArrowDown } from 'lucide-react';
import { AnimatedGradient } from './AnimatedGradient';
import { AsciiWall } from './AsciiWall';
import AsciiNoiseBackground from './AsciiNoiseBackground';
// import AsciiNoiseBackgroundWebGL from './AsciiNoiseBackgroundWebGL';

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-zinc-950 overflow-hidden">
      <AnimatedGradient />
      <AsciiNoiseBackground />
      {/* <AsciiNoiseBackgroundWebGL /> */}
      <AsciiWall />
      <a 
        href="#development" 
        className="absolute left-1/2 z-20 inline-flex items-center gap-2 text-zinc-300 hover:text-zinc-300 transition-colors animate-bounce"
        style={{ 
          top: 'calc(60% + 12vh)', // 50% (center) + 1/6 of viewport height = ~2/3 down
          transform: 'translateX(-50%)',
          zIndex: 4,
        }}
      >
        <ArrowDown className="w-5 h-5" />
      </a>
    </section>
  );
}