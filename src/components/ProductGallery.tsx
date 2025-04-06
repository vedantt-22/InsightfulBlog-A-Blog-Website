
import React, { useState } from 'react';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const productImages = [
  {
    id: 1,
    src: "https://source.unsplash.com/photo-1488590528505-98d2b5aba04b",
    alt: "Gray laptop computer on white background",
  },
  {
    id: 2,
    src: "https://source.unsplash.com/photo-1581091226825-a6a2a5aee158",
    alt: "Person using laptop on desk",
  },
  {
    id: 3,
    src: "https://source.unsplash.com/photo-1531297484001-80022131f5a1",
    alt: "Laptop keyboard close-up",
  },
  {
    id: 4,
    src: "https://source.unsplash.com/photo-1460925895917-afdab827c52f",
    alt: "Laptop on glass table",
  },
  {
    id: 5,
    src: "https://source.unsplash.com/photo-1721322800607-8c38375eef04",
    alt: "Laptop in living room setting",
  }
];

const ProductGallery = () => {
  const [selectedImage, setSelectedImage] = useState(productImages[0]);

  return (
    <div className="space-y-4">
      {/* Main image */}
      <div className="aspect-square bg-muted rounded-lg overflow-hidden relative">
        <img 
          src={selectedImage.src} 
          alt={selectedImage.alt}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Thumbnail gallery */}
      <div className="flex space-x-2 overflow-x-auto pb-2">
        {productImages.map((image) => (
          <button
            key={image.id}
            onClick={() => setSelectedImage(image)}
            className={cn(
              "relative flex-shrink-0 h-16 w-16 md:h-20 md:w-20 rounded-md overflow-hidden border-2 transition-all",
              selectedImage.id === image.id 
                ? "border-secondary ring-2 ring-secondary ring-offset-2" 
                : "border-border hover:border-secondary"
            )}
          >
            <img 
              src={image.src} 
              alt={image.alt} 
              className="object-cover w-full h-full"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
