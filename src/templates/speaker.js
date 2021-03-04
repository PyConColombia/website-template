import React from 'react';
import Proptypes from 'prop-types';
import { graphql } from 'gatsby';

export const query = graphql`
  query($speakerID: String!) {
    speakersJson(id: { eq: $speakerID }) {
      description
      id
      image
      name
      price
    }
  }
`;

const Speaker = ({ data }) => {
  const { speakersJson } = data;

  return (
    <div>
      {console.log(data)} <pre>{JSON.stringify(speakersJson, null, 2)}</pre>
    </div>
  );
};

Speaker.propTypes = {
  data: Proptypes.object,
};

export default Speaker;
