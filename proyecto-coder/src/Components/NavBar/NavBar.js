import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import CartWidget from '../CartWidget/CartWidget';
import {Link} from "react-router-dom"
import  DropdownButton  from 'react-bootstrap/DropdownButton';
import  Dropdown  from 'react-bootstrap/Dropdown';
import  Card  from 'react-bootstrap/Card';
import  Button  from 'react-bootstrap/Button';
import"../../Estilos/it.css"
import { useEffect, useState } from 'react';
import  Collapse  from 'react-bootstrap/Collapse';

function NavBar() {
    const [open, setOpen] = useState(false);
    function cambiar(e) {
        e.target.style.borderBottomColor="black"
    }
    function volver(e) {
        e.target.style.borderBottomColor="transparent"
        
    }
    return (
        <Navbar className="barra">
        <Container>
            <Nav >  
                <Link to="/">
                    <Navbar.Brand className="logo">Mi E-Commerce </Navbar.Brand> 
                    <Card.Img style={{ height:40, width:45, marginRight:17}}variant="top" src="https://img.icons8.com/pastel-glyph/64/000000/fast-shopping--v2.png"/>
                </Link>
            </Nav>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav onMouseLeave={() => setOpen(false)} >
            <Button
                variant="dark" 
                className="cate"
                onMouseOver={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
            >
                Categorias
            </Button>

            <Collapse in={open}  >
                <div id="example-collapse-text" >
                    <Link to="/categoria/roperos">
                        <button className="btnnav" onMouseEnter={cambiar} onMouseLeave={volver} style={{borderBottomColor:"transparent"}} >Roperos</button>
                    </Link>

                    <Link to="/categoria/mesas">
                        <button className="btnnav" onMouseEnter={cambiar} onMouseLeave={volver} style={{borderBottomColor:"transparent"}} >Mesas</button>
                    </Link>

                    <Link to="/categoria/sillas">
                        <button className="btnnav" onMouseEnter={cambiar} onMouseLeave={volver} style={{borderBottomColor:"transparent"}} >Sillas</button>
                    </Link>

                    <Link to="/categoria/escritorios">
                        <button className="btnnav" onMouseEnter={cambiar} onMouseLeave={volver} style={{borderBottomColor:"transparent"}} >Escritorios</button>
                    </Link>
                </div>
            </Collapse>
                
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














