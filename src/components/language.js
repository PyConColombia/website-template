import React from 'react';
import PropTypes from 'prop-types';
import {
  IntlContextConsumer,
  changeLocale,
  injectIntl,
} from 'gatsby-plugin-intl';
import { NavDropdown } from 'react-bootstrap';

const languageName = {
  es: 'Español',
  en: 'English',
};

const Language = ({ intl }) => {
  const languageClick = (e, language) => {
    e.preventDefault();
    changeLocale(language);
  };
  return (
    <NavDropdown
      title={intl.locale.toUpperCase()}
      id="collasible-nav-dropdown"
      style={{ margin: '0 2.5em' }}
    >
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) =>
          languages.map((language) => (
            <NavDropdown.Item
              key={language}
              onClick={(e) => languageClick(e, language)}
              //   style={{
              //     color: currentLocale === language ? `yellow` : `white`,
              //     margin: 10,
              //     textDecoration: `underline`,
              //     cursor: `pointer`,
              //   }}
              href="/"
            >
              {languageName[language]}
            </NavDropdown.Item>
          ))
        }
      </IntlContextConsumer>
    </NavDropdown>
  );
};
Language.propTypes = {
  intl: PropTypes.object,
};
export default injectIntl(Language);
