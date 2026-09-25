export interface ShowcaseItem {
  title: string;
  /** Цена в виде готовой строки. Позже заменим на число и формат. */
  price: string;
  /** Необязательный бейдж, например «Новое» или «Хит». */
  badge?: string;
}

export const showcase: ShowcaseItem[] = [
  {
    title: 'Вязаный свитер',
    price: '1 200 ₽',
    badge: 'Новое',
  },
  {
    title: 'Деревянный конструктор',
    price: '650 ₽',
  },
  {
    title: 'Чайный сервиз, 6 предметов',
    price: '900 ₽',
  },
  {
    title: 'Плёночный фотоаппарат',
    price: '2 400 ₽',
    badge: 'Хит',
  },
];