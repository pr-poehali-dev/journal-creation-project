import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h4 className="text-2xl font-bold text-white tracking-wider">MR.ALEKS</h4>
            <p className="text-gray-400">
              Премиальный мужской журнал о стиле, роскоши и художественной фотографии
            </p>
            <div className="flex space-x-4">
              <Icon name="Instagram" size={24} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Icon name="Facebook" size={24} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Icon name="Twitter" size={24} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Icon name="Youtube" size={24} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>
          <div className="space-y-4">
            <h5 className="text-white font-bold tracking-wide uppercase">Рубрики</h5>
            <div className="space-y-2 text-gray-400">
              <a href="#" className="block hover:text-white transition-colors">Стиль</a>
              <a href="#" className="block hover:text-white transition-colors">Арт-галерея</a>
              <a href="#" className="block hover:text-white transition-colors">Интервью</a>
              <a href="#" className="block hover:text-white transition-colors">Luxury</a>
            </div>
          </div>
          <div className="space-y-4">
            <h5 className="text-white font-bold tracking-wide uppercase">О журнале</h5>
            <div className="space-y-2 text-gray-400">
              <a href="#" className="block hover:text-white transition-colors">Редакция</a>
              <a href="#" className="block hover:text-white transition-colors">Фотографы</a>
              <a href="#" className="block hover:text-white transition-colors">Контакты</a>
              <a href="#" className="block hover:text-white transition-colors">Подписка</a>
            </div>
          </div>
          <div className="space-y-4">
            <h5 className="text-white font-bold tracking-wide uppercase">Подписка</h5>
            <p className="text-gray-400 text-sm">
              Получайте эксклюзивный контент и арт-фотографии
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Email" 
                className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l text-white placeholder-gray-500"
              />
              <Button className="bg-white text-black hover:bg-gray-100 rounded-l-none">
                <Icon name="Send" size={16} />
              </Button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2024 Mr.Aleks Magazine. Все права защищены. 18+</p>
        </div>
      </div>
    </footer>
  );
}