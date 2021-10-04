import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Carrusel from './Components/Carrusel/Carrusel.js';
import Cart from './Components/Cart/Cart.js';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer.js';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer.js';
import NavBar from './Components/NavBar/NavBar.js';
import CartContextProvider from './context/cartContext.js';


function App() {

  return (
    <>
    <CartContextProvider>
      <BrowserRouter>
            <NavBar />
            <Switch>
                <Route exact path="/">
                  <Carrusel/> 
                  <ItemListContainer  greeting="Listado de Productos" />
                </Route>  

                <Route exact path="/categoria/:category">
                  <ItemListContainer />
                </Route>

                <Route exact path="/item/:articulo">
                  <ItemDetailContainer />
                </Route>

                <Route exact path="/cart">
                  <Cart />
                </Route>
  
            </Switch>    
      </BrowserRouter>  
    </CartContextProvider>
    </>
  );
}

export default App;
