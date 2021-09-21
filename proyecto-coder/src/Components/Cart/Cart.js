import { useCartContext } from '../../context/cartContext';
import  ListGroup  from 'react-bootstrap/ListGroup';
import  Card  from 'react-bootstrap/Card';
import  Button  from 'react-bootstrap/Button';
import{useState,useEffect} from "react"
import {Link} from "react-router-dom"


function Cart() {
    const [total, setTotal] = useState(0)
    const {product,clear,removeItem} = useCartContext()
    function clearArr() {
        clear()
    }
    function borrar(id) {
        removeItem(id)
        
    }

    useEffect(() => {
        
       setTotal(product.reduce((acc,e)=> acc+e.e.data().precio*e.quantity,0))
    
          
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
            )
            }
        </ListGroup>
        <h1>Total: ${total}</h1>
        <button onClick={clearArr}>Clear</button>

    </div>
    )
}

export default Cart
