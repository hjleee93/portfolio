import React, { useContext } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import './Header.scss';

const Header = () => {
  const { about } = useContext(PortfolioContext);
  const { blog, github } = about;
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">HJ</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href={blog}>Blog</Nav.Link>
          <Nav.Link href={github}>Github</Nav.Link>
          <Nav.Link href="#link">Project</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Header;
