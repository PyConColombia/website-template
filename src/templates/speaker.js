import React from 'react';
import { graphql } from 'gatsby';

export const query = graphql`
  query($speakerID: String!) {
    speakersJson(id: {eq : $speakerID } ) {
      description
      id
      image
      name
      price
    }
  }
`;

const Speaker = ({ data }) => {
  return (
    <div>
      {' '}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};
export default Speaker;
