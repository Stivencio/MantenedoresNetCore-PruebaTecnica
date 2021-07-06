import React, { useEffect, useState } from "react";
import { DataTablePropio } from "../../layout/DataTablePropio";

const EstadoUsuario = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState([]);
  const formulario = "Estado Usuario";

  const columns = [
    {
      name: "ID",
      selector: "id",
      sortable: true,
    },
    {
      name: "Estado",
      selector: "descripcion",
      sortable: true,
    },
  ];

  useEffect(() => {
    setLoading(true);
    fetch("https://localhost:44325/api/EstadoUsuarios")
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setData(data);
      });
  }, []);

  return (
    <div className="container">
      <main className="mt-5">
        <h1 className="text-center">{formulario}</h1>
        <div className="row g-5 align center-form">
          {/* DataTable */}
          <div className="col-md-6 col-lg-6">
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

export default EstadoUsuario;
