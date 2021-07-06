import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className=" p-3 bg-dark text-white">
      <div className="container">
        <div className="py-3 mb-4 border-bottom">
          <header className="nav col-12 col-md-auto mb-2 justify-content-around mb-md-0">
            <Link to="/" className="nav-link px-2 text-secondary">
              Home
            </Link>
            <Link to="/FormUsuario" className="nav-link px-2 text-secondary">
              FormUsuario
            </Link>
            <Link
              to="/FormUsuarioObservaciones"
              className="nav-link  px-2 text-secondary"
            >
              FormUsuarioObservaciones
            </Link>
            <Link to="/EstadoUsuario" className="nav-link px-2 text-secondary">
              EstadoUsuario
            </Link>
            <Link to="/Nacionalidades" className="nav-link px-2 text-secondary">
              Nacionalidades
            </Link>
          </header>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
