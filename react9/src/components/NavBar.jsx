import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar expand="lg" className="d-flex justify-content-between">
      <Container>
       
        <Navbar.Brand as={Link} to="/">
          Company Name
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />

       
        <Navbar.Collapse id="navbar-nav">
          
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/features">Features</Nav.Link>
            <Nav.Link as={Link} to="/enterprise">Enterprise</Nav.Link>
            <Nav.Link as={Link} to="/support">Support</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
