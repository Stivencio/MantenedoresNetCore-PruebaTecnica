import React, { useEffect, useState } from "react";
import { DataTablePropio } from "./DataTablePropio";
import Select from "react-select";
import "./loader.css";

export const FormUsuario = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState([]);
  const [nacionalidad, setNacionalidad] = useState([]);
  const formulario = "Usuarios";

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

  useEffect(() => {
    setLoading(true);
    fetch("https://localhost:44325/api/Usuarios")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setLoading(false);
        setUsuarios(data);
      });
  }, []);

  useEffect(() => {
    setLoading(true);
    fetch("https://localhost:44325/api/Nacionalidads")
      .then((response) => response.json())
      .then((data) => {
        setNacionalidad(
          data.map(({ id, descripcion }) => ({ value: id, label: descripcion }))
        );
        // setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1 className="text-center">Formulario</h1>
      <br />
      <div className="row g-5 align center-form">
        {/* Formulario */}
        <div className="col-md-6 col-lg-6">
          <h4 className="mb-3 text-center">{formulario}</h4>
          <br />
          <form className="needs-validation" noValidate>
            <div className="row g-3">
              {/* Form-Controls */}
              <div className="col-sm-4">
                <label htmlFor="firstName" className="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder=""
                  required=""
                ></input>
                <div className="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>

              <div className="col-sm-4">
                <label htmlFor="lastName" className="form-label">
                  Apellido Paterno
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="aPaterno"
                  placeholder=""
                  required=""
                />
                <div className="invalid-feedback">
                  Valid last name is required.
                </div>
              </div>
              <div className="col-sm-4">
                <label htmlFor="lastName" className="form-label">
                  Apellido Materno
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="aMaterno"
                  placeholder=""
                  required=""
                />
                <div className="invalid-feedback">
                  Valid last name is required.
                </div>
              </div>

              <div className="col-12">
                <label htmlFor="email" className="form-label">
                  Email <span className="text-muted">(Optional)</span>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="you@example.com"
                />
                <div className="invalid-feedback">
                  Please enter a valid email address htmlFor shipping updates.
                </div>
              </div>
              <div className="col-sm-12">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="**********"
                ></input>
                <div className="invalid-feedback">Password is required.</div>
              </div>
              <div className="col-md-12">
                <label htmlFor="country" className="form-label">
                  Country
                </label>
                {/* <select className="form-select" id="country" required="">
                  <option value="">Choose...</option>
                  <option>United States</option>
                </select> */}

                <Select options={nacionalidad} />
                <div className="invalid-feedback">
                  Please select a valid country.
                </div>
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
            data={usuarios}
            loading={loading}
            pagination={true}
            title={formulario}
          />
        </div>
        {/* DataTable */}
      </div>
    </div>
  );
};
