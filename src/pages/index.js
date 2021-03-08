import React from 'react';
import { Link } from 'gatsby';
import { useIntl } from 'gatsby-plugin-intl';
import Proptypes from 'prop-types';

import Layout from '../components/layout';
import { Container } from 'react-bootstrap';
const IndexPage = () => {
  const intl = useIntl();
  //   const speakers = data.allSpeakersJson.nodes;
  // console.log(speakers);
  return (
    <Layout>
      <Container fluid className="m-5 p-2">
        <ul>
          <ul>
            <li>
              <Link to="/en">En</Link>
            </li>
            <li>
              <Link to="/">Es</Link>
            </li>
            <li>
              <Link to="/speakers">Speakers</Link>
            </li>
          </ul>
        </ul>
        <h1>{intl.formatMessage({ id: 'index.title' })}</h1>
      </Container>
    </Layout>
  );
};

IndexPage.propTypes = {
  data: Proptypes.object,
};

// export const query = graphql`
//   query SpeakersPosts {
//     allSpeakersJson {
//       nodes {
//         id
//         name
//         node_locale
//       }
//     }
//   }
// `;
export default IndexPage;
