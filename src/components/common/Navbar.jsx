import React from "react";

export const Navbar = () => {
  return (
    // <div className="py-5 text-center">
    //   <img
    //     className="d-block mx-auto mb-4"
    //     src="https://c.tenor.com/YCI_QleVgSUAAAAj/kobe-and.gif"
    //     alt=""
    //     width="72"
    //     height="57"
    //   />
    //   <h2>Formulario de Usuarios</h2>
    //   <p className="lead">
    //     Below is an example form built entirely with Bootstrap’s form controls.
    //     Each required form group has a validation state that can be triggered by
    //     attempting to submit the form without completing it.
    //   </p>
    // </div>
    <header className=" p-3 bg-dark text-white">
      <div className="container">
        <div className="py-3 mb-4 border-bottom">
          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a
                href="http://localhost:3000"
                className="nav-link px-2 text-white"
              >
                Usuario
              </a>
            </li>
            <li>
              <a
                href="http://localhost:3000"
                className="nav-link px-2 text-white"
              >
                Nacionalidades
              </a>
            </li>
            <li>
              <a
                href="http://localhost:3000"
                className="nav-link px-2 text-secondary"
              >
                EstadoUsuario
              </a>
            </li>
            <li>
              <a
                href="http://localhost:3000"
                className="nav-link px-2 text-secondary"
              >
                UsuarioObservaciones
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
