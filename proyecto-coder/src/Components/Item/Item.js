import React from 'react'
import Card from "react-bootstrap/Card"
import Button  from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'



function Item({elemento}) {

  
    
    return (


    <Card style={{ width: '18rem'}}  className=" mt-4 ">
        <div className="row align-items-center " style={{ height: '18rem' } } >
            <Card.Img variant="top" src={elemento.image}  />
        </div>
        <Card.Body>
            <Card.Title >{elemento.nombre}</Card.Title>
            <Card.Text >
                ${elemento.precio}<br/>
                {elemento.descripciones}
            </Card.Text>
            <Link to={`/item/${elemento.id}`}>
               <Button variant="primary">Detalle</Button>
            </Link>
        </Card.Body>
        
    </Card>
    )
}

export default Item
