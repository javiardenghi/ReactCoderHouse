import { useCartContext } from '../../context/cartContext';
import  ListGroup  from 'react-bootstrap/ListGroup';
import  Card  from 'react-bootstrap/Card';
import  Button  from 'react-bootstrap/Button';
import{useState,useEffect} from "react"
import {Link} from "react-router-dom"
import { getFirestore } from '../../service/getFirebase';
import "firebase/firestore" 

function Cart() {
    const [total, setTotal] = useState(0)
    //estado para formar el array que le paso a"item" en la orden de compra
    const [producto ,setProducto]= useState([])
    //product es el array que viene del cartContext
    const {product,clear,removeItem} = useCartContext()
    let[info, setInfo]=useState({
        nombre:"",
        numero:"",
        email:""
    })
    function clearArr() {
        clear()
    }
    function borrar(id) {
        removeItem(id)   
    }

    function datosChange(e) {
        setInfo({
            ...info,
            [e.target.name]:e.target.value
        })
        console.log(info)
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


    }

    useEffect(() => {
        
       setTotal(product.reduce((acc,e)=> acc+e.e.data().precio*e.quantity,0))
       product.map(e=> setProducto([...producto, e.e.data()]))
          
    }, [product])


    return (
      
        <div>
        <h1>Productos agregados</h1>
        <ListGroup variant="flush">
            {product.length===0 ?
             <Link to="/">
                <button>volver a comprar</button>
             </Link> :
              product.map(item=>
                
             <>

            <ListGroup.Item>
            <Card style={{ width: '18rem' }}>
                
                <Card.Body>
                <Card.Img variant="top" src={item.e.data().image} />
                    <Card.Title>{item.e.data().nombre}</Card.Title>
                    <Card.Text>
                    {item.e.data().precio} Cantidad: {item.quantity}
                    </Card.Text>
                    <Button variant="primary" onClick={()=>borrar(item.e.id)}>borrar</Button>
                </Card.Body>
            </Card>
   
            </ListGroup.Item>
            </>
            ) }
        </ListGroup>

        <h1>Total: ${total}</h1>
        <button onClick={clearArr}>Clear</button>

        <form onChange={datosChange} onSubmit={datosSubmit}>

            <input type="text" placeholder="Nombre Completo" name="nombre" value = {info.nombre} />
            <input type="text" placeholder="Telefono" name="numero" value = {info.numero} />
            <input type="text" placeholder="Email" name="email" value = {info.email} />
            <button>Terminar compra</button>

        </form>

    </div>
    )
}

export default Cart
