import React from 'react'
import ItemList from '../ItemList/ItemList'
import {useEffect, useState} from "react"
import {useParams} from "react-router-dom"
import  Spinner  from 'react-bootstrap/Spinner'
import {getFirestore} from '../../service/getFirebase'


function ItemListContainer({greeting}) {
    

    const [estado, setEstado] = useState([])
    const [loading, setLoading] = useState(false)

    const {category} = useParams()
                                                                                                                                                                                                                                                                                                                 
    useEffect(() => {
            const db= getFirestore()
            const query = db.collection("items").get()

            if (category===undefined){
                query.then(data => setEstado(data.docs))
            }
            else{
                query.then(data=>setEstado(data.docs.filter(r=>r.data().categoryId===category)))
      
            }

        
    },[category])
    

    return (
       
        <div> 
            <h1>{greeting}</h1>
            {loading ? <Spinner animation="border" role="status"><span className="visually-hidden">Loading...</span></Spinner> : <ItemList lista={estado}/>}    

                 
        </div>
    )
}

export default ItemListContainer








