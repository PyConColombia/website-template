'use client';

import React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import propTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { useI18n } from '@/contexts/I18nContext';
import { locales } from '@/utils/locale';

const NavbarCustom = ({ lang }) => {
  const i18nDictionary = useI18n();
  const router = useRouter();
  const pathname = usePathname();

  const onChangeLocale = (locale) => {
    router.replace(pathname, { locale });
  };

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} href={`/${lang}`}>
          PyCon Colombia
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} href={`/${lang}/resources`}>
              {i18nDictionary?.navbar?.resources}
            </Nav.Link>
            <NavDropdown title={i18nDictionary?.navbar?.schedule} id="collapsible-nav-dropdown">
              <NavDropdown.Item as={Link} href={`/${lang}/schedule`}>
                {i18nDictionary?.navbar?.schedule}
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} href={`/${lang}/speakers`}>
                {i18nDictionary?.navbar?.speakers}
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href={`/${lang}/keynotes`}>
                {i18nDictionary?.navbar?.keynotes}
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} href={`/${lang}/talks`}>
                {i18nDictionary?.navbar?.talks}
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} href={`/${lang}/team`}>
              {i18nDictionary?.navbar?.team}
            </Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown
              title={lang}
              id="collapsible-nav-dropdown"
              onChange={(e) => onChangeLocale(e.target.value)}>
              {locales.map(
                (locale) =>
                  locale !== lang && (
                    <Nav.Link as={Link} key={locale} href={`/${locale}`}>
                      {locale}
                    </Nav.Link>
                  )
              )}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

NavbarCustom.propTypes = {
  lang: propTypes.string
};

export default NavbarCustom;
