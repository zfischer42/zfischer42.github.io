import { Github, Linkedin, Mail } from 'lucide-react';
import '../styles/globals.css'

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-sm border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="#hero" className="effect-underline text-white hover:text-zinc-300 transition-colors">
            Z.F
          </a>
          
          <div className="flex items-center gap-8">
            <a href="#development" className="effect-underline text-zinc-400 hover:text-white transition-colors">
              Software
            </a>
            <a href="#design" className="effect-underline text-zinc-400 hover:text-white transition-colors">
              Design
            </a>
            <a href="#contact" className="effect-underline text-zinc-400 hover:text-white transition-colors">
              Contact
            </a>
            
            <div className="flex items-center gap-4 ml-4 pl-4 border-l border-zinc-700">
              <a 
                href="https://github.com/zfischer42" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/zfischer42/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:zfischer42@gmail.com"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}