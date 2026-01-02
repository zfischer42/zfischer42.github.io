import { ArrowDown } from 'lucide-react';
import { AnimatedGradient } from './AnimatedGradient';
import { AsciiWall } from './AsciiWall';

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-zinc-950 overflow-hidden">
      <AnimatedGradient />
      <AsciiWall />
      {/* <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="space-y-6">          
          <h1 className="text-white">
            <span className="text-emerald-400 text-2xl font-bold">Zach Fischer</span>
          </h1>
          
          <p className="text-zinc-400 max-w-xl mx-auto text-lg">
            Hacking away at every layer of the stack, from backend solutions to frontend designs.
          </p>

          <div className="inline-block px-4 py-1.5 bg-zinc-800/50 border border-zinc-700 rounded-full text-zinc-300 text-sm mb-4">
            Full Stack Dev & Graphic Design
          </div>
          
          <div className="flex items-center justify-center gap-4 pt-8">
            <a 
              href="#development" 
              className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg transition-colors"
            >
              View Work
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg border border-zinc-700 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
        
        <a 
          href="#development" 
          className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-300 transition-colors mt-24 animate-bounce"
        >
          <ArrowDown className="w-5 h-5" />
        </a>
      </div> */}
    </section>
  );
}