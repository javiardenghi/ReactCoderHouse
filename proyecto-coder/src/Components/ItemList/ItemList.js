import React from 'react'
import Item from '../Item/Item'
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Container from 'react-bootstrap/Container'


function ItemList({lista}) {
    return (
        
            <Row>
            {
            lista.map((elemento)=><Col>
            <Item id= {elemento.id} nombre={elemento.nombre} precio={elemento.precio} picturUrl={elemento.picturUrl}/></Col>)
            }
            </Row>
           
       
    )
}

export default ItemList
