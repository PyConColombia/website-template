import React, { useState, useEffect } from 'react';
import Proptypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import { useIntl } from 'gatsby-plugin-intl';
import { Container } from 'react-bootstrap';
import Layout from '../components/layout';

export const query = graphql`
  query {
    allSpeakersJson {
      nodes {
        id
        name
        node_locale
      }
    }
  }
`;
const SpeakersPage = ({ data }) => {
  const intl = useIntl();
  const [speakers, setSpeakers] = useState([]);
  useEffect(() => {
    if (data.allSpeakersJson.nodes) {
      let items = data.allSpeakersJson.nodes.filter(
        ({ node_locale }) => node_locale === intl.locale
      );
      data.allSpeakersJson.nodes.map((speaker) => {
        let index = items.findIndex(({ name }) => name === speaker.name);
        if (index < 0) {
          items.push(speaker);
        }
      });
      setSpeakers(items);
    }
  }, [data]);
  //   const speakers = data.allSpeakersJson.nodes;
  return (
    <Layout>
      <Container fluid className="m-5 p-2">
        <h1>Speakers</h1>
        <ul>
          {speakers.map(({ id, name, node_locale }) => (
            <li key={id}>
              <Link
                to={`/speakers/${id}`}
              >{`${name}/ ${node_locale.toUpperCase()}`}</Link>
            </li>
          ))}
        </ul>
      </Container>
    </Layout>
  );
};

SpeakersPage.propTypes = {
  data: Proptypes.object,
};

export default SpeakersPage;
