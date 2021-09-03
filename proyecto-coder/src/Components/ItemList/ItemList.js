import React from 'react'
import Item from '../Item/Item'
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"



function ItemList({lista}) {
    return (
        <>
            <Row>
            {
            lista.map((elemento, index)=><Col key={index}>
            <Item elemento={elemento}/></Col>)
            }
           
            </Row>

            
       </>
    )
}

export default ItemList