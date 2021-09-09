import React from 'react'
import Card from "react-bootstrap/Card"
import ItemCount from '../ItemCount/ItemCount';
import {useState,useEffect} from "react"
import { Link } from 'react-router-dom'
import Button from "react-bootstrap/Button"


function ItemDetail({producto}) {


        const [cantidad, setCantidad] = useState(0)
        const [condicion, setCondicion] = useState(false)

        function onAdd(count) {
            alert (`Agregado correctamente ${count} item al Carrito`)
            setCantidad(count) 
            setCondicion(true)
        }

        useEffect(() => {
           console.log(cantidad)
        }, [cantidad])
    
    

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
                {
                    condicion ?
                    <Link to="/carrito"> 
                    <Button variant="success" >Terminar compra</Button>
                    </Link>
                    :<ItemCount initial={1} stock= {10} onAdd={onAdd} />
                }
                
            </Card.Body>
        </Card>)}

       </> 
    )
}

export default ItemDetail
