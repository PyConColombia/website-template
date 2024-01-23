'use client';

import React from 'react';
import props from 'prop-types';
import NavbarCustom from '@/app/[lang]/components/NavbarCustom';
import { I18nContext } from '@/contexts/I18nContext';

import '@/styles/App.sass';
import { getI18nDictionary } from './dictionaries';

const Root = async ({ children, params }) => {
  const i18nDictionary = await getI18nDictionary(params.lang);

  return (
    <I18nContext.Provider value={i18nDictionary}>
      <html lang={params.lang}>
        <body>
          <NavbarCustom lang={params.lang} />
          {children}
        </body>
      </html>
    </I18nContext.Provider>
  );
};

Root.propTypes = {
  children: props.node.isRequired,
  params: props.shape({
    lang: props.string.isRequired
  }).isRequired
};

export default Root;
