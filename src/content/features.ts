export interface Feature {
  /** Имя иконки в компоненте Icon.astro */
  icon: string;
  title: string;
  text: string;
}

export const features: Feature[] = [
  {
    icon: 'coin',
    title: 'Выгодно',
    text: 'Цены ниже рыночных',
  },
  {
    icon: 'shield',
    title: 'Надёжно',
    text: 'Проверяем каждую вещь',
  },
  {
    icon: 'smile',
    title: 'Удобно',
    text: 'Магазин рядом с вами',
  },
  {
    icon: 'leaf',
    title: 'Экологично',
    text: 'Вторая жизнь вещей',
  },
];