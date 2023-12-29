'use client';

import React from 'react';
import propTypes from 'prop-types';
import Link from 'next/link';
import speakerslist from '@/data/speakers.json';

const Speakers = ({ params: { lang } }) => {
  return (
    <main>
      {speakerslist.map((speaker) => (
        <div key={speaker.id}>
          <Link href={`./speakers/${speaker.id}`} locale={lang}>
            <h1>
              {speaker.first_name} {speaker.last_name}
            </h1>
            <h2>{speaker.affiliation}</h2>
          </Link>
          <Link href={`https://twitter.com/${speaker.twitter}`} target="_blank">
            <span>{speaker.twitter}</span>
          </Link>
        </div>
      ))}
    </main>
  );
};

Speakers.propTypes = {
  params: propTypes.shape({
    lang: propTypes.string.isRequired
  }).isRequired
};

export default Speakers;
