import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {

    return (
        <Navbar bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="#home">E-comerce </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home">Contacto</Nav.Link>
                <Nav.Link href="#link">Productos</Nav.Link>
                <Nav.Link href="#link" >Ayuda</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
           
    )
}

export default NavBar
