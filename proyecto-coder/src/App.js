import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ItemCount from './Components/ItemCount/ItemCount.js';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer.js';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer.js';
import NavBar from './Components/NavBar/NavBar.js';

function App() {

  function onAdd() {

    alert ("agregado!")
    
 }

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

              <ItemCount initial={1} stock= {10} onAdd={onAdd} />
          </Switch>    
    </BrowserRouter>      
    </>
  );
}

export default App;
