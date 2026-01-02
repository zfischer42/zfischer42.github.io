import { ImageWithFallback } from './figma/ImageWithFallback';

interface GraphicDesignCardProps {
  title: string;
  description: string;
  images: string[];
}

export function GraphicDesignCard({ title, description, images }: GraphicDesignCardProps) {
  return (
    <div className="group">
      <div className="mb-4">
        <h3 className="text-white mb-2">{title}</h3>
        <p className="text-zinc-400 text-sm">{description}</p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {images.map((image, index) => (
          <div 
            key={index}
            className="relative aspect-square bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-all duration-300 hover:scale-105 hover:z-10"
          >
            <ImageWithFallback
              src={image}
              alt={`${title} image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
