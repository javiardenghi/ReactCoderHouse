import 'bootstrap/dist/css/bootstrap.min.css'
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
    <NavBar />
    <ItemListContainer greeting="Bienvenido" />
    <ItemDetailContainer/>
    <ItemCount initial={1} stock= {10} onAdd={onAdd} />
    </>
  );
}

export default App;
