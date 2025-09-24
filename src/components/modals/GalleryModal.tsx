import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { GalleryItem } from '@/types';

interface GalleryModalProps {
  galleryItem: GalleryItem | null;
  onClose: () => void;
}

export default function GalleryModal({ galleryItem, onClose }: GalleryModalProps) {
  if (!galleryItem) return null;

  return (
    <div className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="max-w-5xl w-full bg-gray-900 rounded-lg overflow-hidden" onClick={(e) => e.stopPropagation()}>
        <div className="relative h-[70vh]">
          <img 
            src={galleryItem.image} 
            alt={galleryItem.title}
            className="w-full h-full object-contain bg-black"
          />
          <Button 
            variant="ghost" 
            size="sm"
            className="absolute top-4 right-4 text-white hover:bg-white/20"
            onClick={onClose}
          >
            <Icon name="X" size={24} />
          </Button>
          <div className="absolute top-4 left-4">
            <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm font-bold tracking-wider">
              {galleryItem.category}
            </span>
          </div>
        </div>
        <div className="p-8">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h4 className="text-2xl font-bold text-white mb-2">{galleryItem.title}</h4>
              <p className="text-gray-400">Автор: {galleryItem.photographer}</p>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-white hover:text-black">
                <Icon name="Heart" size={16} />
              </Button>
              <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-white hover:text-black">
                <Icon name="Share2" size={16} />
              </Button>
            </div>
          </div>
          <p className="text-gray-300 leading-relaxed mb-6">{galleryItem.description}</p>
          <div className="flex justify-between items-center">
            <div className="flex space-x-4 text-sm text-gray-500">
              <div className="flex items-center space-x-1">
                <Icon name="Eye" size={16} />
                <span>3.2k</span>
              </div>
              <div className="flex items-center space-x-1">
                <Icon name="Heart" size={16} />
                <span>247</span>
              </div>
            </div>
            <Button className="bg-white text-black hover:bg-gray-100">
              Смотреть серию
              <Icon name="ArrowRight" size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}