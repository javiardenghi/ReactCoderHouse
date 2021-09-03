import React from 'react'
import ItemList from '../ItemList/ItemList'
import {useEffect, useState} from "react"
import {useParams} from "react-router-dom"

const descripcion = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus praesentium qui saepe eius quisquam facilis maiores, quidem"


function ItemListContainer({greeting}) {
    
    const lista =[
            {id: "elemento1", nombre: "Mesa 1", precio: "$200",descripciones:descripcion, categoria:"mesas",picturUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe_ubUeL6WUu33pNFkMUaZNA5VGbTOG-TKJWvbX69GB0zCafdXW1sJaWUNUgs&usqp=CAc"},
            {id: "elemento2", nombre: "Mesa 2", precio: "$200",descripciones:descripcion, categoria:"mesas",picturUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFQDxxxAPgAbljV5n5T5bhBlAJYMjiUHvyqNbQtROq4sJd3XXwkd8uC6JByw&usqp=CAc"},
            {id: "elemento3", nombre: "Mesa 3", precio: "$200",descripciones:descripcion, categoria:"mesas",picturUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsNXQzijJSS36iE26g4N_M32yno4bKrRYdVPDIvx5w-qI8b3zZW3OymB8P-6qN7lADrFwYRjri6w&usqp=CAc"},
            {id: "elemento4", nombre: "Mesa 4", precio: "$200",descripciones:descripcion, categoria:"mesas",picturUrl:"data:image/jpeg;base64,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"},
            {id: "elemento5", nombre: "Mesa 5", precio: "$200",descripciones:descripcion, categoria:"mesas",picturUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-oVa1DkqJ0TUFP7C0YTinPjNut5YdHPrR2w&usqp=CAU"},
            {id: "elemento6", nombre: "Silla 1", precio: "$200",descripciones:descripcion, categoria:"sillas",picturUrl:"data:image/jpeg;base64,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"},
            {id: "elemento7", nombre: "Silla 2", precio: "$200",descripciones:descripcion, categoria:"sillas",picturUrl:"https://www.hosteljiel.com/images/stories/virtuemart/product/SILLA-MADERA-ESTILO-N%C3%93RDICO0.jpg"},
            {id: "elemento8", nombre: "Silla 3", precio: "$200",descripciones:descripcion, categoria:"sillas",picturUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcDrzxeziyvI1WSYpmtjqkAa9xyu3_deVlFg&usqp=CAU"},
            {id: "elemento9", nombre: "Silla 4", precio: "$200",descripciones:descripcion, categoria:"sillas",picturUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRagAlGOeGRa2ymDliv_Q5nCAcZvTjIoZq6Hg&usqp=CAU"},
            {id: "elemento10", nombre: "Silla 5", precio: "$200",descripciones:descripcion, categoria:"sillas",picturUrl:"https://m.media-amazon.com/images/I/51dEZJnMwYL._AC_UL400_.jpg"},
            {id: "elemento11", nombre: "Escritorio 1", precio: "$200",descripciones:descripcion, categoria:"escritorios",picturUrl:"https://http2.mlstatic.com/D_NQ_NP_691878-MLA44719316185_012021-O.jpg"},
            {id: "elemento12", nombre: "Escritorio 2", precio: "$200",descripciones:descripcion, categoria:"escritorios",picturUrl:"https://http2.mlstatic.com/D_NQ_NP_632216-MLA32016103958_082019-O.jpg"},
            {id: "elemento13", nombre: "Escritorio 3", precio: "$200",descripciones:descripcion, categoria:"escritorios",picturUrl:"http://d2r9epyceweg5n.cloudfront.net/stores/860/918/products/968099-mla41164306281_032020-o-0c7c22f50f6337b44015863870165639-640-0.jpg"},
            {id: "elemento15", nombre: "Escritorio 5", precio: "$200",descripciones:descripcion, categoria:"escritorios",picturUrl:"https://images.ssstatic.com/escritorio-estilo-industrial-andrea-acero-negro-roble-canadian-40928970z0-20511567.jpg"},
            {id: "elemento14", nombre: "Escritorio 4", precio: "$200",descripciones:descripcion, categoria:"escritorios",picturUrl:"https://http2.mlstatic.com/D_NQ_NP_865428-MLA29577825467_032019-O.jpg"},
        ]

    const [estado, setEstado] = useState([])
    const {category} = useParams()
 

    let promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(lista)
            reject()
        }, 2000)
        
    })                                                                                                                                                                                                                                                                                                                  
    useEffect(() => {
        if(category===undefined){
            promesa
            .then((x)=>setEstado(x) )
            .catch(console.log("error"))
        }else{
            promesa
            .then((x)=>setEstado(x.filter(el=>category===el.categoria)) )
            .catch(console.log("error2"))
        }
        
    },[category])
    

    return (
       
        <div> 
            <h1>{greeting}</h1>
            <ItemList lista={estado}/>     
        </div>
    )
}

export default ItemListContainer








