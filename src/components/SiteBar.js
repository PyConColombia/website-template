import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { injectIntl, Link } from 'gatsby-plugin-intl';
import Language from './language';
import Logo from '../../assets/icon.svg';

const YEARS = ['2020', '2019', '2018', '2017'];
const SiteBar = ({ intl }) => {
  return (
    <Navbar
      collapseOnSelect
      className="navbar"
      expand="lg"
      // bg="light"
      variant="light"
      fixed="top"
    >
      <Navbar.Brand>
        <Logo style={{ width: '50px' }} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as="h6">
            <Link to="/resources" className="navbar_a">
              {intl.formatMessage({ id: 'navbar.resources' })}
            </Link>
          </Nav.Link>
          <NavDropdown
            title={intl.formatMessage({ id: 'navbar.schedule.main' })}
            id="collasible-nav-dropdown"
            className="navbar_a"
          >
            <NavDropdown.Item as="h6">
              <Link to="/schedule">
                {intl.formatMessage({ id: 'navbar.schedule.op1' })}
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item as="h6">
              <Link to="/keynotes">
                {intl.formatMessage({ id: 'navbar.schedule.op2' })}
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item as="h6">
              <Link to="/speakers">
                {intl.formatMessage({ id: 'navbar.schedule.op3' })}
              </Link>
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as="h6" className="cfp">
            <Link to="/cfp">
              {intl.formatMessage({ id: 'navbar.proposals' })}
            </Link>
          </Nav.Link>
        </Nav>
        <Nav>
          <NavDropdown title="v.2021" id="collasible-nav-dropdown">
            {YEARS.map((year) => (
              <NavDropdown.Item
                key={year}
                href={`http://${year}.pycon.co`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {`v.${year}`}
              </NavDropdown.Item>
            ))}
          </NavDropdown>
          <Language />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

SiteBar.propTypes = {
  intl: PropTypes.object,
};
export default injectIntl(SiteBar);
