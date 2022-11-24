import ItemListContainer from "./Componentes/ItemListContainer";
import Navbar from "./Componentes/Navbar";
import {Context} from "./context/CartContext"
function App() {
  return(
    <>
      <Context.Provider value={context}>
        <Navbar/>
        <ItemListContainer/>
      </Context.Provider>  
    </>
  );
}

export default App;
