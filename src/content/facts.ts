export interface Fact {
  /** Имя иконки в Icon.astro */
  icon: string;
  text: string;
}

export const facts: Fact[] = [
  {
    icon: 'shield',
    text: 'Честная оценка и прозрачные условия',
  },
  {
    icon: 'coin',
    text: 'Быстрые выплаты после продажи',
  },
  {
    icon: 'smile',
    text: 'Магазин рядом с вами',
  },
  {
    icon: 'leaf',
    text: 'Вещи получают вторую жизнь',
  },
];