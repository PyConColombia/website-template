import React from 'react';
import { getI18nDictionary } from '@/app/[lang]/dictionaries';

export default async function Page({ params: { lang } }) {
  const dict = await getI18nDictionary(lang);

  return (
    <>
      <button>{dict.products.cart}</button>
    </>
  );
}
