import { useCartContext } from '../../context/cartContext';
import { useState,useEffect } from 'react';

import Button from "react-bootstrap/Button"


function CartWidget() {

    const {product} = useCartContext()

    const [total, setTotal] = useState(0)

    useEffect(() => {
        setTotal(product.reduce((acc,e)=>acc+e.quantity,0))
    }, [product])



    return(
        <div style={{ paddingLeft: 15}} >
            {product.length===0? <></>:<Button variant="light" className="categoria">
                 {total}

                <img src="https://img.icons8.com/material-rounded/24/000000/shopping-cart.png" alt=""/>
            </Button>}
        </div>
    )
}

export default CartWidget
