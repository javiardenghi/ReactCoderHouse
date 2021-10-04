import React from 'react'
import Card from "react-bootstrap/Card"
import ItemCount from '../ItemCount/ItemCount';
import {useState} from "react"
import { Link } from 'react-router-dom'
import Button from "react-bootstrap/Button"
import { useCartContext } from '../../context/cartContext';


function ItemDetail({producto}) {
        const {addToCart, isInCart}= useCartContext()

        const [condicion, setCondicion] = useState(false)

        function onAdd(count) {
            alert (`Agregado correctamente ${count} item al Carrito`)
            setCondicion(true)
            addToCart(producto, count)
            isInCart(producto.map(e=>e.id))
        }

    return (
        <>
        {producto.map((articulos,index)=>
        <Card style={{ width: '400px'}} key={index} className="itemdet" >
            <Card.Body >
                <Card.Title className="conext">{articulos.data().nombre}</Card.Title>
                <Card.Img variant="top" src={articulos.data().image}  />
                <Card.Text>
                    ${articulos.data().precio} stock: {articulos.data().precio}<br/>
                    {articulos.data().descripcion} 
                </Card.Text>
                {
                    condicion ?
                    <Link to="/cart"> 
                    <Button variant="success" >Terminar compra</Button>
                    </Link>
                    :<ItemCount initial={1} stock= {articulos.data().precio} onAdd={onAdd} />
                }
                
            </Card.Body>
        </Card>)}

       </> 
    )
}

export default ItemDetail
