import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { GalleryItem } from '@/types';

interface ArtGalleryProps {
  galleryItems: GalleryItem[];
  onGalleryClick: (item: GalleryItem) => void;
}

export default function ArtGallery({ galleryItems, onGalleryClick }: ArtGalleryProps) {
  return (
    <section id="gallery" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold mb-6 tracking-wide">ХУДОЖЕСТВЕННАЯ ГАЛЕРЕЯ</h3>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Коллекция изысканной ню-арт фотографии от ведущих мастеров жанра. 
            Искусство красоты в каждом кадре.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <Card 
              key={item.id}
              className="bg-gray-900 border-gray-800 overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer group"
              onClick={() => onGalleryClick(item)}
            >
              <div className="relative h-96">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-bold tracking-wider">
                    {item.category}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
                  <p className="text-gray-400 text-sm">{item.photographer}</p>
                </div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                    <Icon name="Eye" size={16} className="mr-2" />
                    ПРОСМОТР
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}