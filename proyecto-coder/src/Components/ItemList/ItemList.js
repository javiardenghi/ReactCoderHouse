import React from 'react'
import Item from '../Item/Item'


function ItemList({lista}) {
    console.log(lista)
    return (
        <div className="d-flex justify-content-around  row">
            {
            lista.map((elemento)=>
            <Item id= {elemento.id} nombre={elemento.nombre} precio={elemento.precio} picturUrl={elemento.picturUrl}/>)
            }
                
           
        </div>
    )
}

export default ItemList
