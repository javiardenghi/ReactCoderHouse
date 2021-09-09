import React from 'react'
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import {useState} from "react"
import { Link } from 'react-router-dom'
 
function ItemCount({initial, stock, onAdd}) {
    const  [count, setCount] = useState(initial)
    const [buttonText, setButtonText] = useState(true)
 function suma() {
     if (stock > count) {
        setCount(count + 1)
    }}

 function resta() {
     if (count > initial){
         
        setCount(count - 1)
    }}

function setOnAdd() {
    onAdd(count)
    setCount(initial)
    setButtonText(false)
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

                   {
                       buttonText ? <Button variant="primary" onClick={setOnAdd} >Agregar</Button>
                       :<Link to="/carrito"> 
                            <Button variant="primary" >Terminar compra</Button>
                        </Link>
                   }
                    

                </Card.Body>
                
            </Card>
        </div>
    )
}

export default ItemCount

