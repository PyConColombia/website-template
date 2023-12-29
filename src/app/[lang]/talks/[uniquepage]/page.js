import React from 'react';
import propTypes from 'prop-types';
import talksList from '@/data/talks.json';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return talksList.map((p) => ({
    uniquepage: p.id.toString()
  }));
}

const UniquePage = ({ params: { uniquepage } }) => {
  const talk = talksList.find((p) => p.id.toString() === uniquepage);

  if (!talk) {
    console.log('talk not found');
    notFound();
  }

  return (
    <>
      <h1>{talk.title}</h1>

      <iframe
        src="https://www.youtube.com/embed/3YxneS1eyfM"
        frameBorder="0"
        allowfullScreen=""
        className="video"></iframe>
      <hr />

      {talk.speakers.map((speaker) => (
        <p key={speaker}>{speaker}</p>
      ))}
      <h2>Authors</h2>
      <ul>
        {talk.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>

      <p>{talk.description}</p>

      <h2>Summary</h2>
      <p>{talk.summary}</p>
    </>
  );
};

UniquePage.propTypes = {
  params: propTypes.shape({
    uniquepage: propTypes.string.isRequired
  }).isRequired
};

export default UniquePage;
