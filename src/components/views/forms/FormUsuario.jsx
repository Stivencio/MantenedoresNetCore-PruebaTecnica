import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { DataTablePropio } from "../../layout/DataTablePropio";

const FormUsuario = () => {
  const formulario = "Usuarios";
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState([]);
  const [nacionalidad, setNacionalidad] = useState([]);
  const [tempdata, setTempdata] = useState({
    // nombre: "asdasdas",
    // apellidoPaterno: "asdasd",
    // apellidoManterno: "asdasd",
    // correo: "asdasd@asda.com",
    // idNacionalidad: 2,
  });
  const [editing, setEditing] = useState(false);

  //Datatable columns
  const columns = [
    {
      name: "id",
      selector: "id",
      grow: 0,
      omit: true,
    },
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

    {
      name: "idNacionalidad",
      selector: "idNacionalidad",
      sortable: true,
      omit: true,
    },
    {
      name: "Nacionalidad",
      selector: "nacionalidad.gentilicio",
      sortable: true,
      omit: false,
    },
    {
      name: "idEstado",
      selector: "idEstado",
      sortable: true,
      omit: true,
    },
    {
      name: "Estado",
      selector: "estadoUsuario.descripcion",
      sortable: true,
      omit: false,
    },
    {
      cell: (row) => (
        <button
          type="button"
          className="btn btn-success"
          id={row.id}
          onClick={() => getData(row)}
        >
          <i className="bi bi-pen"></i>
        </button>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
    {
      cell: (row) => (
        <button
          type="button"
          className="btn btn-danger"
          id={row.id}
          onClick={() => handleDelete(row.id)}
        >
          <i className="bi bi-trash">{row.id}</i>
        </button>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];

  //GetUsuarios
  useEffect(() => {
    setLoading(true);
    fetch("https://localhost:44325/api/Usuarios")
      .then((response) => response.json())
      .then((data) => {
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
        setNacionalidad(data);
        // setLoading(false);
      });
  }, []);

  //React-hook-form

  const { register, handleSubmit, formState } = useForm({
    defaultValues: tempdata,
  });
  const { errors } = formState;

  //Vaciar formulario
  const resetForm = () => {
    document.getElementById("form-usuario").reset();
  };

  //Post submit
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
      .then((data) => {
        console.warn(data);
        if (!data.status) {
          resetForm();
          alert(
            `Usuario ${editing ? "actualizado" : "ingresado"} correctamente`
          );
        } else {
          alert("No se pudo ingresar el usuario");
        }
      });
  };

  //handleDelete
  const handleDelete = (idUser) => {
    let r = window.confirm("¿Deseas eliminar este usuario?");
    r ? alert(`Aceptaste eliminar al usuario ${idUser}`) : alert("Cancelaste");
  };

  //handleUpdate
  const handleUpdate = (idUser) => {
    console.log("idUser");
  };

  //cancelUpdate
  const cancelUpdate = () => {
    setEditing(false);
  };

  //getData
  const getData = (row) => {
    setTempdata({
      nombre: row.nombre,
      apellidoPaterno: row.apellidoPaterno,
      apellidoManterno: row.apellidoManterno,
      correo: row.correo,
      idNacionalidad: row.idNacionalidad,
    });
    setEditing(true);
  };

  useEffect(() => {
    console.log(tempdata);
  });

  return (
    <>
      <div className="container">
        <main className="mt-5">
          <h1 className="text-center">Formulario</h1>
          <div className="row g-5 align center-form">
            {/* Formulario */}
            <div className="col-md-6 col-lg-6">
              <h4 className="mb-3 text-center">{formulario}</h4>
              <br />
              <form id="form-usuario" className="needs-validation" noValidate>
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
                      name="nombre"
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
                        pattern: {
                          value: /^[A-Za-z]+$/i,
                          message: "Ingresa un nombre válido",
                        },
                      })}
                    />
                    {/* Validación */}
                    {errors.nombre?.message && (
                      <span className="text-danger d-block mb-2">
                        {errors.nombre?.message}
                      </span>
                    )}

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
                      name="apellidoPaterno"
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
                        pattern: {
                          value: /^[A-Za-z]+$/i,
                          message: "Ingresa un apellido válido",
                        },
                      })}
                    />
                    {/* Validación */}
                    {errors.apellidoPaterno?.message && (
                      <span className="text-danger d-block mb-2">
                        {errors.apellidoPaterno?.message}
                      </span>
                    )}
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
                      name="apellidoManterno"
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
                        pattern: {
                          value: /^[A-Za-z]+$/i,
                          message: "Ingresa un apellido válido",
                        },
                      })}
                    />
                    {/* Validación */}
                    {errors.apellidoManterno?.message && (
                      <span className="text-danger d-block mb-2">
                        {errors.apellidoManterno?.message}
                      </span>
                    )}
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
                      name="correo"
                      {...register("correo", {
                        required: "Este campo es requerido",
                        minLength: {
                          value: 3,
                          message: "Mínimo 3 carácteres",
                        },
                        maxLength: {
                          value: 30,
                          message: "Máximo 30 carácteres",
                        },
                        pattern: {
                          value: /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/gim,
                          message: "Ingresa un correo válido",
                        },
                      })}
                    />
                    {/* Validación */}
                    {errors.correo?.message && (
                      <span className="text-danger d-block mb-2">
                        {errors.correo?.message}
                      </span>
                    )}
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
                      name="password"
                      {...register("password", {
                        required: "Este campo es requerido",
                        minLength: {
                          value: 2,
                          message: "Mínimo 2 carácteres",
                        },
                        maxLength: {
                          value: 30,
                          message: "Máximo 30 carácteres",
                        },
                        pattern: {
                          value:
                            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@[-`{-~]).{6,64}$/,
                          message: "Ingresa una contraseña válida",
                        },
                      })}
                    ></input>
                    {/* Validación */}
                    {errors.password?.message && (
                      <span className="text-danger d-block mb-2">
                        {errors.password?.message}
                      </span>
                    )}
                    {/* Validación */}
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="nacionalidad" className="form-label">
                      País
                    </label>

                    <select
                      className="form-select"
                      id="idNacionalidad"
                      name="idNacionalidad"
                      disabled={!!!nacionalidad}
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
                    {errors.idNacionalidad?.message && (
                      <span className="text-danger d-block mb-2">
                        {errors.idNacionalidad?.message}
                      </span>
                    )}
                    {/* Validación */}
                  </div>
                  {/* Form-Controls */}
                </div>
                <hr className="my-4"></hr>

                {!!!editing ? (
                  <button
                    className="w-100 btn btn-primary btn-lg"
                    type="submit"
                    onClick={handleSubmit(onSubmit)}
                  >
                    Ingresar
                  </button>
                ) : (
                  <>
                    <button
                      className="w-100 btn btn-warning btn-lg"
                      onClick={() => handleUpdate()}
                    >
                      Actualizar
                    </button>
                    <button
                      className="w-100 btn btn-danger btn-lg mt-2"
                      onClick={() => cancelUpdate()}
                    >
                      Cancelar
                    </button>
                  </>
                )}
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
    </>
  );
};

export default FormUsuario;
