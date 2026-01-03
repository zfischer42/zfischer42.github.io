import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface TechIcon {
  name: string;
  icon: React.ReactNode;
}

interface ProjectCardProps {
  title: string;
  description: string;
  images: string[];
  techStack: TechIcon[];
}

export function ProjectCard({ title, description, images, techStack }: ProjectCardProps) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-700 transition-colors">
      <div className="p-6">
        <h3 className="text-white mb-4">{title}</h3>
        
        {/* Carousel */}
        <div className="mb-6">
          <Carousel className="w-full">
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative aspect-video bg-zinc-800 rounded-lg overflow-hidden">
                    <ImageWithFallback
                      src={image}
                      alt={`${title} screenshot ${index + 1}`}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>
        
        {/* Tech Stack */}
        <div className="mb-6">
          <div className="flex flex-wrap items-center gap-3">
            {techStack.map((tech, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 px-3 py-2 bg-zinc-800/50 border border-zinc-700 rounded-lg text-zinc-300 text-sm"
                title={tech.name}
              >
                {tech.icon}
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Description */}
        <p className="text-zinc-400">{description}</p>
      </div>
    </div>
  );
}
