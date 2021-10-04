import { createContext, useContext, useState} from 'react';

const CartContext = createContext()
export const useCartContext = () => useContext(CartContext)

    
function CartContextProvider({children}) {
        const [product, setProducto] = useState([])
        
        function addToCart(item,quantity) {
        item.map(i=>{
            if(isInCart(i.id)){
                const update =[...product]
                update.forEach(element=>{
                    if(element.e.id===i.id){
                        element.quantity +=quantity
                    }
                })
                setProducto(update)
            }else{
               item.map(e=>setProducto([...product,{e,quantity}]))
            }
        })
        }

        function isInCart(id) {  
          return product.find(element =>element.e.id===id)    
        }

       function clear() {
           setProducto([])
       }
        
        function removeItem(itemId) {
            const filtrado =  product.filter(element=>element.e.id!==itemId)
            setProducto(filtrado)
        }

        return (
            <CartContext.Provider value={{product,addToCart,isInCart,clear,removeItem}}>
                {children}
            </CartContext.Provider >
        )
}
    
    export default CartContextProvider
    