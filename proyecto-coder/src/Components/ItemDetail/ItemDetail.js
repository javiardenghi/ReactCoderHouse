import React from 'react'
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

function ItemDetail({producto}) {

    return (
        <>
        {producto.map((articulos,index)=>
        <Card style={{ width: '400px'}} key={index}>
            <Card.Body>
                <Card.Title>{articulos.nombre}</Card.Title>
                <Card.Img variant="top" src={articulos.picturUrl}  />
                <Card.Text>
                    {articulos.precio}<br/>
                    {articulos.descripciones} 
                </Card.Text>
                <Button variant="success">Comprar</Button>
            </Card.Body>
        </Card>)}

       </> 
    )
}

export default ItemDetail
