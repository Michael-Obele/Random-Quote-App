import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { ReactComponent as Logo } from './Logo/Logo.svg';
import './Logo/Logo.css';
import './NavBar.css';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import Container from 'react-bootstrap/Container';

export default function NavBar({ Darkmode, SwitchMode }) {
  const [isDarkMode, setDarkMode] = React.useState(Darkmode);

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
    SwitchMode();
  };
  return (
    <Navbar
      collapseOnSelect
      expand='lg'
      bg={Darkmode ? 'dark' : 'light'}
      variant={Darkmode ? 'dark' : 'light'}
      fixed='top'
    >
      <Container>
        <Navbar.Brand>
          <Logo className='logo' />
          <span className='logo-text'>Random Quotes</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'></Nav>
          <Nav>
            <Nav.Link eventKey={1} href='#quote-h1' aria-label='quotes'>
              Quotes
            </Nav.Link>
            <Nav.Link eventKey={2} href='#searchQuotes'>
              Search Quotes
            </Nav.Link>
          </Nav>
          <DarkModeSwitch
            style={{ marginLeft: '1rem' }}
            checked={isDarkMode}
            onChange={toggleDarkMode}
            size={30}
          />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
