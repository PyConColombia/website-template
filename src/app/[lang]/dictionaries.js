import 'server-only';

const dictionaries = {
  en: () => import('@/app/[lang]/dictionaries/en.json').then((module) => module.default),
  es: () => import('@/app/[lang]/dictionaries/es.json').then((module) => module.default)
};

export const getDictionary = async (locale) => {
  return dictionaries[locale]();
};
