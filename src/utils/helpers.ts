export function readingTime(content: string): string {
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / 200);
  return `${minutes} menit baca`;
}

export function formatDate(date: Date, locale = 'id-ID'): string {
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function excerpt(content: string, length = 160): string {
  const stripped = content.replace(/<[^>]*>/g, '').replace(/[#*`]/g, '');
  return stripped.length > length
    ? stripped.substring(0, length).trim() + '…'
    : stripped;
}

export function categoryColor(category: string): string {
  const map: Record<string, string> = {
    aqidah:  'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    ibadah:  'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    akhlak:  'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
    fiqih:   'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
    sejarah: 'bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-200',
    quran:   'bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200',
    hadits:  'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200',
    doa:     'bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-200',
  };
  return map[category.toLowerCase()] ?? 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
}
