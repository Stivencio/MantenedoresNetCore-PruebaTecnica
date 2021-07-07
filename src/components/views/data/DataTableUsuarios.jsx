import React, { useState, useEffect } from "react";
import { DataTablePropio } from "../../layout/DataTablePropio";

export const DataTableUsuarios = (title, columns) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState([]);

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
  return (
    <div className="col-md-12 col-lg-12">
      <DataTablePropio
        columns={columns}
        data={data}
        loading={loading}
        pagination={true}
        title={title}
      />
    </div>
  );
};
