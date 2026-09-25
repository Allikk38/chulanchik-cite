export interface SocialLinks {
  telegram?: string;
  whatsapp?: string;
  vk?: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  url: string;
  phone: string;
  email: string;
  address: string;
  hours: string;
  social: SocialLinks;
  year: number;
}

export const site: SiteConfig = {
  name: 'Чуланчик',
  tagline: 'комиссионный магазин',
  description: 'Хорошие вещи — по честным ценам',
  url: 'https://allikk38.github.io/chulanchik-cite',
  phone: '+7 (___) ___-__-__',
  email: 'hello@example.com',
  address: 'г. ___, ул. ___',
  hours: 'Пн–Вс, 10:00–20:00',
  social: {
    telegram: '',
    whatsapp: '',
    vk: '',
  },
  year: new Date().getFullYear(),
};