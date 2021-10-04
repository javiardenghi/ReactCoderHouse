import { useCartContext } from '../../context/cartContext';
import  ListGroup  from 'react-bootstrap/ListGroup';
import  Card  from 'react-bootstrap/Card';
import  Button  from 'react-bootstrap/Button';
import{useState,useEffect} from "react"
import {Link} from "react-router-dom"
import Formulario from '../Formulario/Formulario';

function Cart() {
    const [total, setTotal] = useState(0)
    const [product_ ,setProducto]= useState([])
    const {product,clear,removeItem} = useCartContext()
   
    function clearArr() {
        clear()
    }
    function borrar(id) {
        removeItem(id)   
    }

    useEffect(() => {
        
       setTotal(product.reduce((acum,ele)=> acum+ele.e.data().precio*ele.quantity,0))
       product.map(el=> setProducto([...product_, el.e.data()]))
    }, [product])
    


    return (
      
        <div className="fondo">
        <h1 className="agregados">Productos agregados</h1>
        <ListGroup variant="flush">
            {product.length===0 ?
             <Link to="/">
                 <Button variant="dark" style={{margin:"20px 0 20px 20px"}} >Volver a comprar</Button><br/>
             </Link> :
              product.map(item=>
                
             <>

            <ListGroup.Item className="fondo">
            <Card style={{ width: '18rem' }} >
                
                <Card.Body className="cuerpo">
                <Card.Img variant="top" src={item.e.data().image} />
                    <Card.Title>{item.e.data().nombre}</Card.Title>
                    <Card.Text>
                   $ {item.e.data().precio} Cantidad: {item.quantity}
                    </Card.Text>
                    <Button className="btndet" onClick={()=>borrar(item.e.id)}>borrar</Button>
                </Card.Body>
            </Card>
   
            </ListGroup.Item>
            </>
            ) }
        </ListGroup>
        <div className="fondo">
        <h1 className="agregados">Total: ${total}</h1><br/>
        <Button variant="danger" onClick={clearArr} style={{margin :"20px 0 20px 20px"}} >Eliminar Todo</Button>
    
        <Formulario producto={product_} total={total}/>
        </div>
    </div >
    )
}

export default Cart
