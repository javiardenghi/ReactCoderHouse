
import Button from "react-bootstrap/Button"


function CartWidget() {
    return(
        <div style={{ paddingLeft: 15}}>
            <Button variant="light" >
                <img src="https://img.icons8.com/material-rounded/24/000000/shopping-cart.png" alt=""/>
            </Button>
        </div>
    )
}

export default CartWidget
