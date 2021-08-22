import 'bootstrap/dist/css/bootstrap.min.css'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer.js';
import NavBar from './Components/NavBar/NavBar.js';


function App() {
  return (
    <>
    <NavBar />
    <ItemListContainer greeting="Bienvenido" />
    </>
  );
}

export default App;
