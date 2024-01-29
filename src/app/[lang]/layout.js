'use client';

import React, { useState, useEffect } from 'react';
import props from 'prop-types';
import NavbarCustom from '@/app/[lang]/components/NavbarCustom';
import { I18nContext } from '@/contexts/I18nContext';

import '@/styles/App.sass';
import { getI18nDictionary } from '@/data/dictionaries';

const Root = ({ children, params: { lang } }) => {
  const [i18nDictionary, setI18n] = useState({});

  useEffect(() => {
    const getI18n = async () => {
      setI18n(await getI18nDictionary(lang));
    };

    getI18n();
  }, [lang]);

  return (
    <I18nContext.Provider value={i18nDictionary}>
      <html lang={lang}>
        <body>
          <NavbarCustom lang={lang} />
          {children}
        </body>
      </html>
    </I18nContext.Provider>
  );
};

Root.propTypes = {
  params: props.shape({
    lang: props.string.isRequired
  }).isRequired,
  children: props.node.isRequired
};

export default Root;
