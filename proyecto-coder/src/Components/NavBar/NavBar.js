import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import CartWidget from '../CartWidget/CartWidget';
import {Link} from "react-router-dom"
import  DropdownButton  from 'react-bootstrap/DropdownButton';
import  Dropdown  from 'react-bootstrap/Dropdown';
import  Card  from 'react-bootstrap/Card';






function NavBar() {
   
   


   

    return (
        <Navbar bg="dark" variant="dark">
        <Container>
            <Nav>  
                <Link to="/">
                    <Navbar.Brand style={{marginRight:5}}>Mi E-Commerce </Navbar.Brand> 
                    <Card.Img style={{ height:40, width:45, marginRight:17}}variant="top" src="https://img.icons8.com/pastel-glyph/64/000000/fast-shopping--v2.png"/>
                </Link>
            </Nav>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav >
                <DropdownButton id="dropdown-basic-button" title="Categorias" style={{marginLeft:25}}>
                <Dropdown.Item href="#/action-1">
                    <Link to="/categoria/mesas">
                        <Dropdown.Item href="#/action-1">Mesas</Dropdown.Item>
                    </Link>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">
                    <Link to="/categoria/sillas">
                    <Dropdown.Item href="#/action-2">Sillas</Dropdown.Item>
                    </Link>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                    <Link to="/categoria/escritorios">
                    <Dropdown.Item href="#/action-3">Escritorios</Dropdown.Item>
                    </Link>
                </Dropdown.Item>
                </DropdownButton>
                
            </Nav>
            
                <Link to="/cart">
                    
                    <CartWidget/>
                </Link>   
            </Navbar.Collapse>
        </Container>
        </Navbar>
           
    )
}

export default NavBar
