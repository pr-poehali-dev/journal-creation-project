import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Article } from '@/types';

interface ArticleModalProps {
  article: Article | null;
  onClose: () => void;
}

export default function ArticleModal({ article, onClose }: ArticleModalProps) {
  if (!article) return null;

  return (
    <div className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="max-w-4xl w-full bg-gray-900 rounded-lg overflow-hidden" onClick={(e) => e.stopPropagation()}>
        <div className="relative h-64">
          <img 
            src={article.image} 
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
          <Button 
            variant="ghost" 
            size="sm"
            className="absolute top-4 right-4 text-white hover:bg-white/20"
            onClick={onClose}
          >
            <Icon name="X" size={24} />
          </Button>
          <div className="absolute bottom-4 left-4">
            <span className="inline-block px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-bold tracking-wider uppercase mb-2">
              {article.category}
            </span>
          </div>
        </div>
        <div className="p-8">
          <h4 className="text-3xl font-bold text-white mb-4">{article.title}</h4>
          <p className="text-xl text-gray-300 mb-6">{article.subtitle}</p>
          <div className="flex justify-between items-center text-sm text-gray-500 mb-6">
            <span>{article.readTime} чтения</span>
            <div className="flex items-center space-x-4">
              <Icon name="Eye" size={16} />
              <span>2.4k просмотров</span>
            </div>
          </div>
          <Button className="bg-white text-black hover:bg-gray-100 w-full py-3">
            Читать полную статью
            <Icon name="ArrowRight" size={16} className="ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}