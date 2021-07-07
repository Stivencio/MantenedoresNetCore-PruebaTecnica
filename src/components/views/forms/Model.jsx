import React from "react";
import FormBody from "./FormUsuarioAdd";

const Model = (
  id,
  nombre,
  aPaterno,
  aMaterno,
  correo,
  password,
  idNacionalidad,
  idEstado
) => {
  let modelStyle = {
    display: "block",
    backgroundColor: "rgba(0,0,0,0.8)",
  };

  return (
    <div className="modal show fade" style={modelStyle}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">title</h5>
            <button type="button" className="btn-close"></button>
          </div>
          <div className="modal-body">
            <FormBody
              id={id}
              nombre={nombre}
              aPaterno={aPaterno}
              aMaterno={aMaterno}
              correo={correo}
              password={password}
              idNacionalidad={idNacionalidad}
              idEstado={idEstado}
            />
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary">
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Model;
