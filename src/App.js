import Navbar from "./components/NavBar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import itemCount from "./components/ItemCount/ItemCount";
function App() {
  return (
  < div className="app">
  <Navbar/>
  <ItemListContainer greeting = "Encontrá todo lo que tu mascota necesita."/>;
  <itemCount initial={1} stock={10} onAdd={(quantity) => console.log('cantidad agregada',quantity)}/>
  </div>
  );
}

export default App;
