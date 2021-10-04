import ItemList from '../ItemList/ItemList'
import {useEffect, useState} from "react"
import {useParams} from "react-router-dom"
import {getFirestore} from '../../service/getFirebase'
import"../../Estilos/it.css"

function ItemListContainer({greeting}) {
    const [estado, setEstado] = useState([])
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
       
        <div className="fondo"> 
            <h1 className ="greeting">{greeting}</h1>
            
            {<ItemList lista={estado}/>}   
        </div>
    )
}

export default ItemListContainer








