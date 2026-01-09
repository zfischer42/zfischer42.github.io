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

import enabler_tote from '@/static/images/graphics/enabler/New Yorker Tote.jpg'
import enabler_monkey_typewriter from '@/static/images/graphics/enabler/Monkey Typewriter.png'
import enabler_monkey_newspaper from '@/static/images/graphics/enabler/Monkey Newspaper.png'
import enabler_merch_ad from '@/static/images/graphics/enabler/Merch Ad 2.png'
import enabler_article_hippopotamus from '@/static/images/graphics/enabler/Article Hippopotamus.jpg'
import enabler_article_mcdonalds from '@/static/images/graphics/enabler/Article McDonalds.jpg'
import enabler_article_sphere from '@/static/images/graphics/enabler/Article Las Vegas Sphere.png'
import enabler_article_sofi from '@/static/images/graphics/enabler/Article Sofi Stadium.png'
import enabler_article_elon_cuck from '@/static/images/graphics/enabler/Article Elon Musk Cuck Chair.png'

import carrot_ambassador from '@/static/images/graphics/carrot/Ambassador Flier.jpg'
import carrot_app_promo from '@/static/images/graphics/carrot/Promo Flier v5.0.jpg'
import carrot_times_article from '@/static/images/graphics/carrot/News Article - Image.jpg'

import big_money from '@/static/images/graphics/fun/Big Money.png'
import could_be_worse_back from '@/static/images/graphics/fun/Could-Be-Worse back.png'
import could_be_worse from '@/static/images/graphics/fun/Could-Be-Worse.png'
import invisible_party from '@/static/images/graphics/fun/Invisible Party.png'
import milf_mixer from '@/static/images/graphics/fun/Milf Mixer.png'
import communist_party from '@/static/images/graphics/fun/Communist Party.png'
import spirit_week_2022 from '@/static/images/graphics/fun/Spirit Week 2022.jpg'
import spirit_week_2023 from '@/static/images/graphics/fun/Spirit Week 2023.jpg'
import thinker from '@/static/images/graphics/fun/Thinker.png'
import succession from '@/static/images/graphics/fun/Succession Arrested Development.jpg'
import transcend from '@/static/images/graphics/fun/Transcend.png'


export default function App() {
  const developmentProjects = [
    {
      title: "Thruline • ERP System",
      description: "Integrated third-party AI APIs like Photon and Bem. Created end-to-end tests with Cypress. Fixed all kinds of bugs. ",
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
    // {
    //   title: "Print",
    //   description: "Newspapers and magazines, complete with custom graphics",
    //   images: [
        
    //   ]
    // },
    {
      title: "The Westwood Enabler",
      description: "Merch and article graphics for the best satire magazine on campus.",
      images: [
        enabler_monkey_newspaper,
        enabler_monkey_typewriter,
        enabler_merch_ad,
        enabler_tote,
        enabler_article_hippopotamus,
        enabler_article_elon_cuck,
        enabler_article_mcdonalds,
        enabler_article_sphere,
        enabler_article_sofi
      ]
    },
    {
      title: "Carrot",
      description: "Series of promotional posters for digital and on campus marketing campaigns",
      images: [
        carrot_ambassador,
        carrot_app_promo,
        carrot_times_article,
      ]
    },
    {
      title: "Just For Fun",
      description: "Future merch ideas, random bits, and satirical/real posters (up for you to decide)",
      images: [
        communist_party,
        invisible_party,
        milf_mixer,
        spirit_week_2022,
        spirit_week_2023,
        succession,
        thinker,
        big_money,
        transcend,
        could_be_worse,
        could_be_worse_back,
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
      <section id="development" className="mx-auto py-24 px-6 bg-zinc-950">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-white mb-4">WebDev and SWE Projects</h2>
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
        <div className="max-w-3xl mx-auto">
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
