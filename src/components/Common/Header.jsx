import React, { useContext } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import './Header.scss';

const Header = () => {
  const { about } = useContext(PortfolioContext);
  const { blog, github } = about;
  return (
    <Container>
      <Navbar bg="light" expand="lg" className="text-center">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href={blog}>BLOG</Nav.Link>
            <Nav.Link href={github}>GITHUB</Nav.Link>
            <Link id="project" to="projects">
              PROJECTS
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};
export default Header;
