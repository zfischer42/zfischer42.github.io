import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectCard } from './components/ProjectCard';
import { GraphicDesignCard } from './components/GraphicDesignCard';
import { 
  // Code2, 
  Database, 
  Layout, 
  Smartphone, 
  ShieldCheck,
  Server, 
  Cloud,
  // ShoppingCart,
  BarChart3,
  Layers,
  FlaskConical,
  Flame,
  Rocket,
  Play,
  Hexagon,
  Zap
} from 'lucide-react';

import thruline_1 from '@/static/images/fullstack/thruline/thruline_1.png';
import thruline_2 from '@/static/images/fullstack/thruline/thruline_2.png';
import neuron_1 from '@/static/images/fullstack/neuron/neuron_1.png';
import neuron_2 from '@/static/images/fullstack/neuron/neuron_2.png';
import crux_1 from '@/static/images/fullstack/crux/CruX Home Page.png';
import crux_2 from '@/static/images/fullstack/crux/CruX Home Page 2.png';
import crux_3 from '@/static/images/fullstack/crux/CruX Generator.png';
import crux_4 from '@/static/images/fullstack/crux/CruX Article.png';
import ideahacks_1 from '@/static/images/fullstack/ideahacks/Idea Hacks 26 Home.png';



export default function App() {
  const developmentProjects = [
    {
      title: "Thruline • ERP System",
      description: "Integrated third-party AI APIs like Photon and Bem. Create end-to-end tests with Cypress. Fix all kinds of bugs. ",
      images: [
        thruline_1,
        thruline_2
      ],
      techStack: [
        { name: "Angular", icon: <Layout className="w-4 h-4"/> },
        { name: "Node.js", icon: <Server className="w-4 h-4" /> },
        { name: "Mongo Atlas", icon: <Database className="w-4 h-4" /> },
      ]
    },
    {
      title: "Neuron • Brainwave Analysis Platform",
      description: "Built complete website and authenticated web app to generate reports using company algorithm and user data.\nMentored new interns to implement features like report management.",
      images: [
        neuron_1,
        neuron_2      
      ],
      techStack: [
        { name: "Angular", icon: <Layout className="w-4 h-4" /> },
        { name: "Node.js", icon: <Server className="w-4 h-4" /> },
        { name: "Firebase", icon: <Database className="w-4 h-4" /> },
        { name: "Flask", icon: <Zap className="w-4 h-4" /> },
        { name: "Vercel", icon: <Cloud className="w-4 h-4" /> },
        { name: "Google Cloud Run", icon: <Play className="w-4 h-4" /> },
      ]
    },
    {
      title: "ideahacks.la",
      description: "Led team of 4 to develop website for largest hardware hackathon on the west coast.",
      images: [
        ideahacks_1
      ],
      techStack: [
        { name: "SvelteKit", icon: <Layers className="w-4 h-4" /> },
        { name: "Supabase", icon: <Database className="w-4 h-4" /> },
        { name: "Firebase", icon: <ShieldCheck className="w-4 h-4" /> },
        { name: "Vercel", icon: <Cloud className="w-4 h-4" /> },
      ]
    },
    {
      title: "CruX Publication",
      description: "Developed and managed full publication website for campus neurotech organization with 20+ people.",
      // 2024-2025
      // cruxpublication.com
      images: [
        crux_1,
        crux_2,
        crux_3,
        crux_4,
      ],
      techStack: [
        { name: "SvelteKit", icon: <Layers className="w-4 h-4" /> },
        { name: "Firebase", icon: <Database className="w-4 h-4" /> },
        { name: "Vercel", icon: <Cloud className="w-4 h-4" /> },
      ]
    },
  ];

  const designProjects = [
    {
      title: "Brand Identity & Logo Design",
      description: "Complete brand identity system with modern logo variations",
      images: [
        "https://images.unsplash.com/photo-1713616147761-c126f8009c6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2dvJTIwZGVzaWdufGVufDF8fHx8MTc2MTY0MjQxOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1614036634955-ae5e90f9b9eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGlkZW50aXR5fGVufDF8fHx8MTc2MTY1ODkxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1744819181935-edb1c6924d0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZGVzaWdufGVufDF8fHx8MTc2MTY4OTU4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1738003667850-a2fb736e31b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0eXBvZ3JhcGh5JTIwZGVzaWdufGVufDF8fHx8MTc2MTY1ODQ5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1621974714993-465ae51a4483?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwcG9zdGVyfGVufDF8fHx8MTc2MTY0OTkwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1629927464439-6ba2167656fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGFydHdvcmt8ZW58MXx8fHwxNzYxNjQwNTc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      ]
    },
    {
      title: "Marketing Campaign Posters",
      description: "Series of promotional posters for digital marketing campaigns",
      images: [
        "https://images.unsplash.com/photo-1621974714993-465ae51a4483?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwcG9zdGVyfGVufDF8fHx8MTc2MTY0OTkwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1681836096486-6da65687f03b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBpbGx1c3RyYXRpb258ZW58MXx8fHwxNzYxNjc3OTY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1629927464439-6ba2167656fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGFydHdvcmt8ZW58MXx8fHwxNzYxNjQwNTc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1738003667850-a2fb736e31b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0eXBvZ3JhcGh5JTIwZGVzaWdufGVufDF8fHx8MTc2MTY1ODQ5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1744819181935-edb1c6924d0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZGVzaWdufGVufDF8fHx8MTc2MTY4OTU4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1614036634955-ae5e90f9b9eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGlkZW50aXR5fGVufDF8fHx8MTc2MTY1ODkxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      ]
    },
    {
      title: "UI/UX Design Mockups",
      description: "High-fidelity mockups and prototypes for web applications",
      images: [
        "https://images.unsplash.com/photo-1730794545099-14902983739d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBtb2NrdXB8ZW58MXx8fHwxNzYxNjk3NzU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1681836096486-6da65687f03b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBpbGx1c3RyYXRpb258ZW58MXx8fHwxNzYxNjc3OTY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1744819181935-edb1c6924d0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZGVzaWdufGVufDF8fHx8MTc2MTY4OTU4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1713616147761-c126f8009c6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2dvJTIwZGVzaWdufGVufDF8fHx8MTc2MTY0MjQxOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1738003667850-a2fb736e31b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0eXBvZ3JhcGh5JTIwZGVzaWdufGVufDF8fHx8MTc2MTY1ODQ5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1629927464439-6ba2167656fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGFydHdvcmt8ZW58MXx8fHwxNzYxNjQwNTc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      ]
    },
  ];




  // Actual Website
  return (
    <div className="min-h-screen bg-zinc-950">
      {/*  background color: rgb(9 9 11); */}
      <Navbar />
      <Hero />
      
      {/* Development Projects Section */}
      <section id="development" className="py-24 px-6 bg-zinc-950">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-white mb-4">Development Projects</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Full stack applications showcasing my skills in modern web development, 
              scalable architecture, and problem-solving.
            </p>
          </div>
          
          <div className="space-y-8">
            {developmentProjects.map((project) => (
              <ProjectCard

                title={project.title}
                description={project.description}
                images={project.images}
                techStack={project.techStack}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Graphic Design Section */}
      <section id="design" className="py-24 px-6 bg-zinc-900 border-t border-zinc-800">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-white mb-4">Graphic Design</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Visual design work including brand identities, marketing materials, 
              and creative illustrations.
            </p>
          </div>
          
          <div className="space-y-16">
            {designProjects.map((project) => (
              <GraphicDesignCard
                title={project.title}
                description={project.description}
                images={project.images}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-zinc-950 border-t border-zinc-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-white mb-4">Let's Work Together</h2>
          <p className="text-zinc-400 mb-8">
            I'm always interested in hearing about new projects and opportunities.
          </p>
          <a 
            href="mailto:contact@example.com"
            className="inline-block px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 px-6 bg-zinc-950 border-t border-zinc-800">
        <div className="max-w-5xl mx-auto text-center text-zinc-500 text-sm">
          <p>© 2025 Full Stack Developer & Graphic Designer. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
