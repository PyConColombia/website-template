import React from 'react';
import { Link, graphql } from 'gatsby';
import { useIntl } from 'gatsby-plugin-intl';
import Proptypes from 'prop-types';

import Layout from '../components/layout';
const IndexPage = ({ data }) => {
    const intl = useIntl();
    const speakers = data.allSpeakersJson.nodes;
    // console.log(speakers);
    return (
        <Layout>
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
        </Layout>
    );
};

IndexPage.propTypes = {
    data: Proptypes.object,
};

export const query = graphql`
    query SpeakersPosts($locale: String, $defaultLocale: String) {
        allSpeakersJson(
            filter: {
                node_locale: { eq: $locale }
                or: { node_locale: { eq: $defaultLocale } }
            }
        ) {
            nodes {
                id
                name
                node_locale
            }
        }
    }
`;
export default IndexPage;
