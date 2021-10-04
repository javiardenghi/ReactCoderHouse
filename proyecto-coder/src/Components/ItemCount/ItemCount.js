import React from 'react'
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import {useState} from "react"
import"../../Estilos/it.css"

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
        onAdd(count)
        setCount(initial)
        
    }

    return (
        <div className="conext">
            <Card style={{ width: '18rem' }} >
                <Card.Body className="contador">
                    <Card.Title className="titprod" style={{color:"black"}}>Producto</Card.Title>
                    <Button variant="primary" className="btncon" onClick={suma}>+</Button>
                    <span style={{color:"black"}}>{count}</span>
                    <Button variant="primary" className="btncon2" onClick={resta} >-</Button>

                </Card.Body>
                <Button onClick={setOnAdd} >Agregar</Button>
                
            </Card>
        </div>
    )
}

export default ItemCount

