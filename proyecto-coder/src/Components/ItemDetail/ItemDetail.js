import React from 'react'
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

function ItemDetail({producto}) {
    
    return (
        <Card style={{ width: '400px'}}>
        
        <Card.Body>
            <Card.Title>{producto.titulo}</Card.Title>
            <Card.Img variant="top" src={producto.img}  />
            <Card.Text>
            {producto.descripcion} {producto.precio}
            </Card.Text>
            <Button variant="success">{producto.boton}</Button>
        </Card.Body>
        </Card>
    )
}

export default ItemDetail
