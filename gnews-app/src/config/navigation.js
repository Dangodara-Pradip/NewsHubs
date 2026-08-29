export const CATEGORIES = [
  { slug: 'general', label: 'General', icon: '📋' },
  { slug: 'world', label: 'World', icon: '🌍' },
  { slug: 'nation', label: 'Nation', icon: '🏛️' },
  { slug: 'business', label: 'Business', icon: '💼' },
  { slug: 'technology', label: 'Technology', icon: '💻' },
  { slug: 'entertainment', label: 'Entertainment', icon: '🎬' },
  { slug: 'sports', label: 'Sports', icon: '⚽' },
  { slug: 'science', label: 'Science', icon: '🔬' },
  { slug: 'health', label: 'Health', icon: '🏥' },
];

export const LANGUAGES = [
  { prefix: 'english', label: 'English', code: 'en' },
  { prefix: 'hindi', label: 'Hindi', code: 'hi' },
  { prefix: 'gujarati', label: 'Gujarati', code: 'gu' },
];

export function getCategoryIcon(slug) {
  return CATEGORIES.find((c) => c.slug === slug)?.icon ?? '📰';
}

export function getCategoryLabel(slug) {
  return CATEGORIES.find((c) => c.slug === slug)?.label ?? slug;
}
