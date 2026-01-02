import { Github, Linkedin, Mail } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-sm border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="#hero" className="text-white hover:text-zinc-300 transition-colors">
            Portfolio
          </a>
          
          <div className="flex items-center gap-8">
            <a href="#development" className="text-zinc-400 hover:text-white transition-colors">
              Development
            </a>
            <a href="#design" className="text-zinc-400 hover:text-white transition-colors">
              Design
            </a>
            <a href="#contact" className="text-zinc-400 hover:text-white transition-colors">
              Contact
            </a>
            
            <div className="flex items-center gap-4 ml-4 pl-4 border-l border-zinc-700">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:contact@example.com"
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
