import React from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import {useEffect, useState} from "react"
import { useParams } from 'react-router-dom'
import { getFirestore } from '../../service/getFirebase'
import"../../Estilos/it.css"

function ItemDetailContainer() {

    const [product,setProduct]= useState([])
    const {articulo} = useParams()

    useEffect(() => {
        const db= getFirestore()
        const query = db.collection("items").get()

        query.then(data=>setProduct(data.docs.filter(r=>r.id===articulo)))
    },[])
    
    return (
        <div className="fondo">
            {<ItemDetail producto={product} />}    
        </div>
    )
}

export default ItemDetailContainer
