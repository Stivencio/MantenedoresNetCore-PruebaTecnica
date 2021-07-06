import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { DataTablePropio } from "./DataTablePropio";

const FormUsuarioObservaciones = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState([]);
  const [usuario, setUsuario] = useState([]);
  const formulario = "Observaciones";
  const columns = [
    {
      name: "IdUsuario",
      selector: "idUsuario",
      sortable: true,
    },
    {
      name: "Observación",
      selector: "observacion",
      sortable: true,
    },
    {
      name: "Fecha de creación",
      selector: "fechaCreacion",
      sortable: true,
    },
  ];

  //GetObservaciones
  useEffect(() => {
    setLoading(true);
    fetch(
      "https://localhost:44325/api/UsuarioObservacions/GetUsuarioObservacionsByUser/24"
    )
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setData(data);
      });
  }, []);
  //GetUsuarios
  useEffect(() => {
    setLoading(true);
    fetch("https://localhost:44325/api/Usuarios")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUsuario(data);
      });
  }, []);

  const { register, errors, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log({
      id: 0,
      ...data,
      estado: true,
      fechaCreacion: "2021-07-05T23:35:16.069Z",
      fechaModificacion: "2021-07-05T23:35:16.069Z",
    });
  };

  return (
    <div className="container">
      <main className="mt-5">
        <h1 className="text-center">Formulario</h1>
        <div className="row g-5 align center-form">
          {/* Formulario */}
          <div className="col-md-6 col-lg-6">
            <h4 className="mb-3 text-center">{formulario}</h4>
            <br />
            <form
              className="needs-validation"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="col-md-12">
                <select
                  className="form-select"
                  id="idUsuario"
                  disabled={!!!usuario}
                  {...register("idUsuario", {
                    required: { message: "Debe seleccionar un usuario" },
                  })}
                >
                  {" "}
                  {!!!usuario ? (
                    <>
                      {" "}
                      <option hidden={true}>Cargando... </option>
                    </>
                  ) : (
                    <>
                      <option hidden={true}>Seleccione un usuario</option>
                      {usuario.map((x) => (
                        <option key={x.id} value={x.id}>
                          {`${x.nombre} ${x.apellidoPaterno} ${x.apellidoManterno}`}
                        </option>
                      ))}
                    </>
                  )}
                </select>
              </div>
              <div className="col-md-12 mt-3">
                <div className="row g-3">
                  {/* Form-Controls */}
                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      placeholder="Escribre tus observaciones aquí"
                      id="observacion"
                      required=""
                      {...register("observacion", {
                        required: "Este campo es requerido",
                        minLength: {
                          value: 2,
                          message: "Mínimo 2 carácteres",
                        },
                        maxLength: {
                          value: 15,
                          message: "Máximo 15 carácteres",
                        },
                      })}
                    ></textarea>
                    <label htmlFor="observacion">Observaciones</label>

                    {/* Validación */}
                    <label className="invalid-feedback">
                      {errors?.observacion?.message}
                    </label>
                    {/* Validación */}
                  </div>
                  {/* Form-Controls */}
                </div>
              </div>
              <hr className="my-4"></hr>
              <button className="w-100 btn btn-primary btn-lg" type="submit">
                Ingresar
              </button>
            </form>
          </div>
          {/* Formulario */}

          {/* DataTable */}
          <div className="col-md-12 col-lg-12">
            <DataTablePropio
              columns={columns}
              data={data}
              loading={loading}
              pagination={true}
              title={formulario}
            />
          </div>
          {/* DataTable */}
        </div>
      </main>
    </div>
  );
};

export default FormUsuarioObservaciones;
