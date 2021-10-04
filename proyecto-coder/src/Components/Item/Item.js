import React from 'react'
import Card from "react-bootstrap/Card"
import Button  from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import"../../Estilos/it.css"
function Item({elemento}) {
    return (

    <div >   
    <Card style={{ width: '18rem'}}  className="item mt-4 ">
        <div className="row align-items-center"  >
            <Card.Img variant="top" src={elemento.image} style={{ height: '18rem' } } className="item" />
        </div>
        <Card.Body className="cuerpo">
            <Card.Title className="medio rounded ">{elemento.nombre}</Card.Title>
            <Card.Text >
                ${elemento.precio}<br/>
                {elemento.descripcion}
            </Card.Text>
            <Link to={`/item/${elemento.id}`}>
               <Button className="btndet">Detalle</Button>
            </Link>
        </Card.Body>
        
    </Card>
    </div> 
    )
}

export default Item
