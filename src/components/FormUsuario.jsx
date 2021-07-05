import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
// import Select from "react-select";
import { DataTablePropio } from "./DataTablePropio";
import "./loader.css";

const FormUsuario = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState([]);
  const [nacionalidad, setNacionalidad] = useState([]);
  // const [selectedValue, setSelectedValue] = useState(null);
  const formulario = "Usuarios";

  //Datatable columns
  const columns = [
    {
      name: "Nombre",
      selector: "nombre",
      sortable: true,
    },
    {
      name: "Apellido Paterno",
      selector: "apellidoPaterno",
      sortable: true,
    },
    {
      name: "Apellido Materno",
      selector: "apellidoManterno",
      sortable: true,
    },
    {
      name: "Correo",
      selector: "correo",
      sortable: true,
    },
  ];

  //GetUsuarios
  useEffect(() => {
    setLoading(true);
    fetch("https://localhost:44325/api/Usuarios")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setLoading(false);
        setData(data);
      });
  }, []);

  //GetNacionalidades
  useEffect(() => {
    setLoading(true);
    fetch("https://localhost:44325/api/Nacionalidads")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setNacionalidad(data);
        // setLoading(false);
      });
  }, []);

  //Select país
  // const handleChange = (e) => {
  //   setSelectedValue(e.value);
  // };

  //React-hook-form

  const { register, errors, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const dataPost = {
      id: 0,
      ...data,
      idEstado: 1,
      fechaCreacion: "2021-06-24T22:45:14.148Z",
      fechaModificacion: "2021-06-24T22:45:14.148Z",
      estadoUsuario: {
        id: 0,
        descripcion: "string",
      },
      nacionalidad: {
        id: 0,
        descripcion: "string",
        gentilicio: "string",
        isonac: "string",
      },
    };

    // console.log(JSON.stringify(dataPost));

    fetch("https://localhost:44325/api/Usuarios", {
      method: "POST",
      body: JSON.stringify(dataPost),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
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
              <div className="row g-3">
                {/* Form-Controls */}
                <div className="col-sm-4">
                  <label htmlFor="nombre" className="form-label">
                    Nombre
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="nombre"
                    placeholder=""
                    required=""
                    {...register("nombre", {
                      required: "Este campo es requerido",
                      minLength: {
                        value: 2,
                        message: "Mínimo 2 carácteres",
                      },
                      maxLength: {
                        value: 10,
                        message: "Máximo 10 carácteres",
                      },
                    })}
                  ></input>
                  {/* Validación */}
                  <div className="invalid-feedback">
                    {errors?.nombre?.message}
                  </div>
                  {/* Validación */}
                </div>

                <div className="col-sm-4">
                  <label htmlFor="apellidoPaterno" className="form-label">
                    Apellido Paterno
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="apellidoPaterno"
                    placeholder=""
                    required=""
                    {...register("apellidoPaterno", {
                      required: "Este campo es requerido",
                      minLength: {
                        value: 2,
                        message: "Mínimo 2 carácteres",
                      },
                      maxLength: {
                        value: 10,
                        message: "Máximo 10 carácteres",
                      },
                    })}
                  />
                  {/* Validación */}
                  <div className="invalid-feedback">
                    {errors?.apellidoPaterno?.message}
                  </div>
                  {/* Validación */}
                </div>
                <div className="col-sm-4">
                  <label htmlFor="apellidoManterno" className="form-label">
                    Apellido Materno
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="apellidoManterno"
                    placeholder=""
                    required=""
                    {...register("apellidoManterno", {
                      required: "Este campo es requerido",
                      minLength: {
                        value: 2,
                        message: "Mínimo 2 carácteres",
                      },
                      maxLength: {
                        value: 10,
                        message: "Máximo 10 carácteres",
                      },
                    })}
                  />
                  {/* Validación */}
                  <div className="invalid-feedback">
                    {errors?.apellidoMaterno?.message}
                  </div>
                  {/* Validación */}
                </div>

                <div className="col-12">
                  <label htmlFor="correo" className="form-label">
                    Correo
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="correo"
                    placeholder="correo@ejemplo.com"
                    {...register("correo", {
                      required: "Este campo es requerido",
                      minLength: {
                        value: 2,
                        message: "Mínimo 2 carácteres",
                      },
                      maxLength: {
                        value: 10,
                        message: "Máximo 10 carácteres",
                      },
                    })}
                  />
                  {/* Validación */}
                  <div className="invalid-feedback">
                    {errors?.correo?.message}
                  </div>
                  {/* Validación */}
                </div>
                <div className="col-sm-12">
                  <label htmlFor="password" className="form-label">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="**********"
                    {...register("password", {
                      required: "Este campo es requerido",
                      minLength: {
                        value: 2,
                        message: "Mínimo 2 carácteres",
                      },
                      maxLength: {
                        value: 10,
                        message: "Máximo 10 carácteres",
                      },
                    })}
                  ></input>
                  {/* Validación */}
                  <div className="invalid-feedback">
                    {errors?.password?.message}
                  </div>
                  {/* Validación */}
                </div>
                <div className="col-md-12">
                  <label htmlFor="nacionalidad" className="form-label">
                    País
                  </label>

                  {/* <Select
                    options={nacionalidad}
                    placeholder="Selecciona un país"
                    value={data.find((obj) => obj.value === selectedValue)}
                    onChange={handleChange}
                  /> */}
                  <select
                    className="form-select"
                    id="nacionalidad"
                    disabled={!!!nacionalidad}
                    {...register("idNacionalidad", {
                      required: { message: "Debe seleccionar un país" },
                    })}
                  >
                    {!!!nacionalidad ? (
                      <>
                        {" "}
                        <option hidden={true}>Cargando... </option>
                      </>
                    ) : (
                      <>
                        <option hidden={true}>Seleccione un país</option>
                        {nacionalidad.map((x) => (
                          <option key={x.id} value={x.id}>
                            {x.descripcion}
                          </option>
                        ))}
                      </>
                    )}
                  </select>

                  {/* <div><b>Selected Value: </b> {selectedValue}</div> */}

                  {/* Validación */}
                  <div className="invalid-feedback">
                    {errors?.idNacionalidad?.message}
                  </div>
                  {/* Validación */}
                </div>
                {/* Form-Controls */}
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

export default FormUsuario;
