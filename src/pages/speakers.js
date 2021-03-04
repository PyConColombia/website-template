import React from 'react';
import { graphql, Link } from 'gatsby';

export const query = graphql`
  query {
    allSpeakersJson {
      nodes {
        id
        name
      }
    }
  }
`;
const SpeakersPage = ({ data }) => {
  const speakers = data.allSpeakersJson.nodes;
  return (
    <div>
      <h1>Speakers</h1>
      <ul>
        {speakers.map(({ id, name }) => (
          <li key={id}>
            <Link to={`/speakers/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SpeakersPage;
