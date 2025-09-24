import { Article, Interview, GalleryItem, SubscriptionPlan } from '@/types';

export const featuredArticles: Article[] = [
  {
    id: 1,
    title: "Искусство соблазнения в бизнесе",
    subtitle: "Как харизма и элегантность помогают достигать вершин корпоративного мира",
    category: "БИЗНЕС",
    image: "/img/f780a50c-db34-4ffc-80b2-8c6b20cf0593.jpg",
    readTime: "12 мин"
  },
  {
    id: 2,
    title: "Роскошь частного пространства",
    subtitle: "Дизайн интерьеров для успешного мужчины: от минимализма к декадансу",
    category: "СТИЛЬ ЖИЗНИ",
    image: "/img/b74b3fab-2d31-475c-82b2-bfddc14d29f9.jpg",
    readTime: "8 мин"
  },
  {
    id: 3,
    title: "Философия мужской элегантности",
    subtitle: "Вечные принципы стиля, которые не подвластны времени и моде",
    category: "МОДА",
    image: "/img/fe04a14e-bf3a-4a99-bfc1-b16dabf0a219.jpg",
    readTime: "15 мин"
  },
  {
    id: 4,
    title: "Коллекционирование как искусство",
    subtitle: "От винтажных часов до современного арта: что собирают джентльмены",
    category: "КОЛЛЕКЦИИ",
    image: "/img/c647e1e6-872e-46e5-9bb6-f2026fa94c71.jpg",
    readTime: "10 мин"
  }
];

export const interviews: Interview[] = [
  {
    id: 1,
    name: "Александра Михайлова",
    title: "Фотограф, арт-директор",
    quote: "Красота — это форма гениальности, которая не требует объяснений",
    image: "/img/c1aa4ae5-85da-42aa-b049-6bc61ce13915.jpg",
    readTime: "20 мин"
  },
  {
    id: 2,
    name: "Виктория Соколова", 
    title: "Модель, актриса",
    quote: "Настоящая элегантность — это умение быть собой в любой ситуации",
    image: "/img/cc1e0f0a-b078-4202-8e9f-9f29b8468e2b.jpg",
    readTime: "16 мин"
  }
];

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Свет и тень",
    category: "НЮ-АРТ",
    image: "/img/f780a50c-db34-4ffc-80b2-8c6b20cf0593.jpg",
    photographer: "Андрей Волков",
    description: "Исследование света и формы в классическом ню-арт стиле"
  },
  {
    id: 2,
    title: "Элегантность линий",
    category: "ПОРТРЕТ",
    image: "/img/b74b3fab-2d31-475c-82b2-bfddc14d29f9.jpg",
    photographer: "Марина Петрова",
    description: "Художественная фотография, раскрывающая красоту женственности"
  },
  {
    id: 3,
    title: "Минимализм форм",
    category: "АРТ-НЮ",
    image: "/img/fe04a14e-bf3a-4a99-bfc1-b16dabf0a219.jpg",
    photographer: "Дмитрий Кузнецов",
    description: "Современный взгляд на классическую художественную фотографию"
  },
  {
    id: 4,
    title: "Игра контрастов",
    category: "СТУДИЯ",
    image: "/img/c647e1e6-872e-46e5-9bb6-f2026fa94c71.jpg",
    photographer: "Елена Смирнова",
    description: "Драматическое освещение в стиле fashion-арт"
  },
  {
    id: 5,
    title: "Естественная красота",
    category: "NATURAL",
    image: "/img/c1aa4ae5-85da-42aa-b049-6bc61ce13915.jpg",
    photographer: "Алексей Морозов",
    description: "Природная грация в интерьерной съемке"
  },
  {
    id: 6,
    title: "Роскошь интимности",
    category: "BOUDOIR",
    image: "/img/cc1e0f0a-b078-4202-8e9f-9f29b8468e2b.jpg",
    photographer: "Ольга Белова",
    description: "Изысканная будуарная фотография в премиальном стиле"
  }
];

export const subscriptionPlans: SubscriptionPlan[] = [
  {
    name: "DIGITAL",
    price: "1 490",
    period: "в месяц",
    features: [
      "Цифровой доступ ко всем материалам",
      "Архив за 3 года",
      "Эксклюзивные фотогалереи",
      "Мобильное приложение"
    ]
  },
  {
    name: "PREMIUM",
    price: "3 990",
    period: "в месяц",
    popular: true,
    features: [
      "Все возможности Digital",
      "Печатная версия журнала",
      "Приглашения на закрытые мероприятия",
      "Персональные рекомендации",
      "Приоритетная поддержка"
    ]
  },
  {
    name: "ELITE",
    price: "12 990",
    period: "в месяц",
    features: [
      "Все возможности Premium", 
      "Личная встреча с редакцией",
      "Эксклюзивные интервью",
      "Доступ к частным мероприятиям",
      "Персональный консультант по стилю",
      "Лимитированные коллекционные издания"
    ]
  }
];