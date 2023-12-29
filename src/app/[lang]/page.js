import React from 'react';
import { getDictionary } from '@/app/[lang]/dictionaries';

export default async function Page({ params: { lang } }) {
  const dict = await getDictionary(lang);

  return <button>{dict.products.cart}</button>;
}
