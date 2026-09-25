export interface NavItem {
  label: string;
  href: string;
  /** Необязательная пометка справа от ссылки, напр. «скоро». */
  note?: string;
}

export const navigation: NavItem[] = [
  { label: 'О нас',            href: '/about' },
  { label: 'Как это работает', href: '/how-it-works' },
  { label: 'Сдать товар',      href: '/sell' },
  { label: 'Каталог',          href: '/catalog', note: 'скоро' },
  { label: 'Контакты',         href: '/contacts' },
];