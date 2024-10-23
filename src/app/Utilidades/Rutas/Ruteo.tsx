import { Route, Routes } from "react-router-dom";
import { Inicio } from "../../Componentes/Contenedor/Inicio.tsx";
import { CrearRevista } from "../../Componentes/Revistas/RevistaCrear.tsx";
import { ListarRevistas } from "../../Componentes/Revistas/RevistasListar.tsx";
import { AdministrarRevistas } from "../../Componentes/Revistas/RevistasAdministrar.tsx";
import { ActualizarRevista } from "../../Componentes/Revistas/RevistasActualizar.tsx";
import { Quienesomos } from "../../Componentes/Otros/Quienessomos.tsx";
import { Noencontrado } from "../../Componentes/Contenedor/Noencontrado.tsx";

export const Ruteo = () => {
    return (
        <Routes>
            <Route path="/" element= {<Inicio/>}/>

            <Route path="/revcre" element= {<CrearRevista/>}/>
            <Route path="/revlis" element= {<ListarRevistas/>}/>
            <Route path="/revadm" element= {<AdministrarRevistas/>}/>

            <Route path="/revact/:codigo" element= {<ActualizarRevista/>}/>

            <Route path="/quisomos" element= {<Quienesomos/>}/>
            <Route path="*" element={<Noencontrado/>}/>
        </Routes>


    );
};