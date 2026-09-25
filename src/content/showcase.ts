export interface ShowcaseItem {
  /** Имя файла в src/assets/images/ без расширения. */
  image: string;
  title: string;
  /** Цена в виде готовой строки. Позже заменим на число и формат. */
  price: string;
  /** Необязательный бейдж, например «Новое» или «Хит». */
  badge?: string;
}

export const showcase: ShowcaseItem[] = [
  {
    image: 'cat-clothes',
    title: 'Вязаный свитер',
    price: '1 200 ₽',
    badge: 'Новое',
  },
  {
    image: 'cat-toys',
    title: 'Деревянный конструктор',
    price: '650 ₽',
  },
  {
    image: 'cat-dishes',
    title: 'Чайный сервиз, 6 предметов',
    price: '900 ₽',
  },
  {
    image: 'cat-electronics',
    title: 'Плёночный фотоаппарат',
    price: '2 400 ₽',
    badge: 'Хит',
  },
];