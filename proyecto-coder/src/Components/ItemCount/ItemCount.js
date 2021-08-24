import React from 'react'
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import {useState} from "react"
 
function ItemCount({initial, stock, onAdd}) {
 const  [count, setCount] = useState(initial)

 function suma() {
     if (stock > count) {
         
        setCount(count + 1)

    }}

 function resta() {
     if (count > initial){
         
        setCount(count - 1)
    }}

function setOnAdd() {
    onAdd()
    setCount(initial)
}

    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Producto</Card.Title>
                    <Button variant="primary" onClick={suma}>+</Button>
                    <span>{count}</span>
                    <Button variant="primary" onClick={resta}>-</Button>
                    <br></br>
                    <Button variant="primary" onClick={setOnAdd}>Agregar</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ItemCount
