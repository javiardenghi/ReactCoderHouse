import { useCartContext } from "../../context/cartContext"
import  ListGroup  from "react-bootstrap/ListGroup"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"



function CartWidget() {
    const {product,clear,removeItem} = useCartContext()
    function clearArr() {
        clear()
    }
    function borrar(id) {
        removeItem(id)
        
    }
    return (
        <div>
            <h1>Productos agregados</h1>
            <ListGroup variant="flush">
                {
                  product.map(item=>
                 <>
                    
                      
                <ListGroup.Item>
                <Card style={{ width: '18rem' }}>
                    
                    <Card.Body>
                    <Card.Img variant="top" src={item.e.picturUrl} />
                        <Card.Title>{item.e.nombre}</Card.Title>
                        <Card.Text>
                        {item.e.precio} Cantidad: {item.quantity}
                        </Card.Text>
                        <Button variant="primary" onClick={()=>borrar(item.e.id)}>borrar</Button>
                    </Card.Body>
                </Card>
                    
                    
                    
                    
                    
                    
                    
                    
                    
                </ListGroup.Item>
                      
                        
                    



                </>
                )
                }
            </ListGroup>
            <button onClick={clearArr}>Clear</button>

        </div>
    )
}

export default CartWidget
