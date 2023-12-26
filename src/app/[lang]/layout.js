import React from 'react';
import props from 'prop-types';

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'es' }];
}

export default function Root({ children, params }) {
  return (
    <html lang={params.lang}>
      <body>{children}</body>
    </html>
  );
}

Root.propTypes = {
  children: props.node.isRequired,
  params: props.shape({
    lang: props.string.isRequired
  }).isRequired
};
