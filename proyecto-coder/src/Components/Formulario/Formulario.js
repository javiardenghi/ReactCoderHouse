import  {useState}  from "react"
import { useCartContext } from '../../context/cartContext';
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

import { getFirestore } from '../../service/getFirebase';
import "firebase/firestore" 

function Formulario({producto, total}) {
    const [info, setInfo]=useState({
        nombre:"",
        numero:"",
        email:""
    })
    const {clear} = useCartContext()
    
    function datosChange(e) {
        
        setInfo({
            ...info,
            [e.target.name]:e.target.value
        })
        
    }

    function datosSubmit(e) {
        e.preventDefault()

        const order ={
            buyer: info,
            items: producto,
            total: total
        }
        const db = getFirestore()
        const orders = db.collection("ordenes")

        orders.add(order).then(res => alert(`id orden de compra ${res.id}`))
        .catch(console.log("error en orden"))
        .finally(()=>setInfo({
            nombre:"",
            numero:"",
            email:""
        }))
        clear(  )
    }
    return (
       
        <div style={{width: "500px", marginLeft:"20px"}}>
            <Form onChange={datosChange} onSubmit={datosSubmit}>
                <Form.Group className="mb-3" >
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Nombre Completo" name="nombre" value = {info.nombre} />
                    <Form.Text className="text-muted">
                    Nombre y Apellido
                    </Form.Text>
                </Form.Group>
                
                <Form.Group className="mb-3" >
                    <Form.Label>Telefono</Form.Label>
                    <Form.Control type="text" placeholder="Telefono de contacto" name="numero" value = {info.numero}/>
                    <Form.Text className="text-muted">
                    Confirme el Telefono
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" value = {info.email} />
                    <Form.Text className="text-muted">
                    Email del usuario para confirmar compra
                    </Form.Text>
                </Form.Group>
                <Button variant="success" type="submit">
                    Terminar Compra
                </Button>
            </Form>

        </div>  
    )
}

export default Formulario
