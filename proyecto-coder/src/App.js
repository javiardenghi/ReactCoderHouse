import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CartWidget from './Components/CartWidget/CartWidget.js';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer.js';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer.js';
import NavBar from './Components/NavBar/NavBar.js';

function App() {

  

  return (
    <>
    
    <BrowserRouter>
          <NavBar />
          <Switch>
              <Route exact path="/">
                <ItemListContainer greeting="Bienvenido" />
              </Route>  

              <Route exact path="/categoria/:category">
                <ItemListContainer />
              </Route>

              <Route exact path="/item/:articulo">
                <ItemDetailContainer />
              </Route>

              <Route exact path="/carrito">
                <CartWidget />
              </Route>
              
          </Switch>    
    </BrowserRouter>      
    </>
  );
}

export default App;
