import { NavLink } from "react-router-dom";
import milogo from "../../../assets/img/Icono cereza.jpeg"

export const Cabecera = () => {
    return (
      <>
        <nav
          className="navbar navbar-expand-lg bg-dark border-bottom border-body"
          data-bs-theme="dark"
        >
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">
              <img src= {milogo} width="50" />
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarColor01"
              aria-controls="navbarColor01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarColor01">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link active" aria-current="page" to="/">
                    Inicio
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="*">
                    Editoriales
                  </NavLink>
                </li>
              
  
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Revistas
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <NavLink className="dropdown-item" to="/revcre">
                        Crear Revistas
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to="/revlis">
                        Listar Revistas
                      </NavLink>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to="/revadm">
                        Administrar Revistas
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/quisomos">
                    Quienes somos
                  </NavLink>
                </li>
              </ul>
              
            </div>
          </div>
        </nav>
      </>
    );
  };