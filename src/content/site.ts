export interface SocialLinks {
  telegram?: string;
  whatsapp?: string;
  vk?: string;
}

export interface Coordinates {
  lat: number;
  lon: number;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  url: string;
  phone: string;
  email: string;
  address: string;
  /** Координаты магазина для карты */
  coords: Coordinates;
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
  address: 'Новосибирск, улица Мичурина, 12а',
  coords: {
    lat: 55.041483,
    lon: 82.921959,
  },
  hours: 'Пн–Вс, 10:00–20:00',
  social: {
    telegram: '',
    whatsapp: '',
    vk: '',
  },
  year: new Date().getFullYear(),
};

// =========================================================
// API-ключ Яндекс.Карт.
// Берётся из .env (локально) или из GitHub Secrets (на проде).
// Переменная должна быть с префиксом PUBLIC_, чтобы Astro
// вшил её в клиентский бандл.
// =========================================================
export const YANDEX_MAPS_API_KEY =
  import.meta.env.PUBLIC_YANDEX_MAPS_API_KEY ?? '';