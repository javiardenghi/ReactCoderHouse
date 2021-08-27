import React from 'react'
import Card from "react-bootstrap/Card"
import Button  from 'react-bootstrap/Button'
import ItemCount from '../ItemCount/ItemCount'

function Item({id, nombre,precio, picturUrl}) {
    function onAdd() {
        alert("agregado!")
        
    }

    return (


    <Card style={{ width: '18rem' }}>
        <div className="align-baseline">
            <Card.Img variant="top" src={picturUrl}  />
        </div>
        <Card.Body>
            <Card.Title>{nombre}</Card.Title>
            <Card.Text >
                {precio}
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
            </Card.Text>
            <Button variant="primary">comprar</Button>
        </Card.Body>
        
    </Card>
    )
}

export default Item
