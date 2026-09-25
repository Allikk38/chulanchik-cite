export interface Category {
  /** Slug — используется в будущем каталоге. */
  slug: string;
  /** Отображаемое название. */
  title: string;
  /** Имя иконки в Icon.astro (на будущее, для Facts/каталога). */
  icon: string;
  /** Имя файла в src/assets/images/ (без пути, без расширения). */
  image: string;
  /** Короткое пояснение, что попадает в категорию. */
  note: string;
}

export const categories: Category[] = [
  {
    slug: 'clothes',
    title: 'Одежда',
    icon: 'shirt',
    image: 'cat-clothes',
    note: 'Верхняя одежда, платья, брюки, обувь',
  },
  {
    slug: 'toys',
    title: 'Игрушки',
    icon: 'toy',
    image: 'cat-toys',
    note: 'Куклы, конструкторы, настольные игры',
  },
  {
    slug: 'dishes',
    title: 'Посуда',
    icon: 'cup',
    image: 'cat-dishes',
    note: 'Тарелки, чашки, кастрюли, приборы',
  },
  {
    slug: 'electronics',
    title: 'Электроника',
    icon: 'device',
    image: 'cat-electronics',
    note: 'Техника, гаджеты, аксессуары',
  },
  {
    slug: 'furniture',
    title: 'Мебель',
    icon: 'chair',
    image: 'cat-furniture',
    note: 'Столы, стулья, полки, декор',
  },
  {
    slug: 'other',
    title: 'Другое',
    icon: 'box',
    image: 'cat-other',
    note: 'Всё, что не попало в другие разделы',
  },
];