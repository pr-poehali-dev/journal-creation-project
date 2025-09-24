import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { SubscriptionPlan } from '@/types';

interface PremiumSubscriptionProps {
  subscriptionPlans: SubscriptionPlan[];
}

export default function PremiumSubscription({ subscriptionPlans }: PremiumSubscriptionProps) {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-white mb-6 tracking-wide">ПРЕМИАЛЬНАЯ ПОДПИСКА</h3>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Получайте эксклюзивный контент, художественные фотогалереи и премиум-аксессуары. 
            Окунитесь в мир изысканного искусства и стиля.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {subscriptionPlans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative bg-gray-900 border-2 transition-all duration-300 hover:scale-105 ${
                plan.popular ? 'border-white shadow-2xl' : 'border-gray-800'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-white text-black px-4 py-1 rounded-full text-sm font-bold tracking-wide">
                    ПОПУЛЯРНЫЙ
                  </span>
                </div>
              )}
              <CardContent className="p-8 text-center">
                <h4 className="text-2xl font-bold text-white mb-2 tracking-wide">{plan.name}</h4>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400 text-lg ml-2">₽ {plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8 text-gray-300">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <Icon name="Check" size={16} className="text-white mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full py-3 font-medium ${
                    plan.popular 
                      ? 'bg-white text-black hover:bg-gray-100' 
                      : 'bg-gray-800 text-white hover:bg-gray-700 border border-gray-700'
                  }`}
                >
                  Оформить подписку
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-gray-400 text-sm">
            Отмена в любое время • Без обязательств • Пробный период 14 дней
          </p>
        </div>
      </div>
    </section>
  );
}