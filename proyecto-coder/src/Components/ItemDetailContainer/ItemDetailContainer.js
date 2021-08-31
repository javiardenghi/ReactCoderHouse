import React from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import {useEffect, useState} from "react"

function ItemDetailContainer() {
    const [product,setProduct]= useState({})

    useEffect(() => {
        const detalle = { titulo: "Detalle Producto" ,descripcion:"Mesa de madera de pino",precio:"200$" ,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdbncYn-0aL3s88H921oSbCQ5oUOTORyvVlQ0E-cjQ_5CiE38pAqCfXvDXJ1M&usqp=CAc", boton:"comprar"}
        const objeto = new Promise ((resolve, reject)=>{ 
            
            setTimeout(() => {
                resolve(detalle)
            }, 2000);  
            
            })

        objeto.then((i)=>{setProduct(i)})
    }, [])

    return (
        <div>
            <ItemDetail producto={product}/>
        </div>
    )
}

export default ItemDetailContainer
