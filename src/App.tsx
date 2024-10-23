import './App.css'
import { BrowserRouter } from "react-router-dom";
import { Ruteo } from "./app/Utilidades/Rutas/Ruteo";
import { Cabecera } from "./app/Componentes/Contenedor/Cabecera";

function App() {
  return (
    <>
      <div className="container-fluid">
        <BrowserRouter>
            <Cabecera />
            <Ruteo />
        </BrowserRouter> 
      </div>
        
    </>
  )
}

export default App



