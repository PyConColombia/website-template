import React from "react";
import { Link } from 'gatsby';
import { useIntl } from 'gatsby-plugin-intl';

const IndexPage = () => {
  const intl = useIntl();

  return (
    <>
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
    </>
  );
};

export default IndexPage;
