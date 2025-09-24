import { Card } from '@/components/ui/card';
import { Article } from '@/types';

interface FeaturedArticlesProps {
  articles: Article[];
  onArticleClick: (article: Article) => void;
}

export default function FeaturedArticles({ articles, onArticleClick }: FeaturedArticlesProps) {
  return (
    <section className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold mb-6 tracking-wide">ИЗБРАННЫЕ МАТЕРИАЛЫ</h3>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Эксклюзивные статьи о стиле, успехе и философии современного джентльмена
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {articles.map((article) => (
            <Card 
              key={article.id} 
              className="bg-black border-gray-800 overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer"
              onClick={() => onArticleClick(article)}
            >
              <div className="relative h-80">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-bold tracking-wider">
                    {article.category}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="text-xl font-bold text-white mb-2 leading-tight">{article.title}</h4>
                  <p className="text-gray-300 text-sm">{article.readTime} чтения</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}