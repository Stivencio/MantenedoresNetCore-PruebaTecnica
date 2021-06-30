import React from "react";
import DataTable from "react-data-table-component";
import "./loader.css";

export const DataTablePropio = ({
  columns,
  data,
  loading,
  pagination,
  title,
}) => {
  return (
    <>
      <div className="mt-5">
        <DataTable
          columns={columns}
          data={data}
          title={title}
          noDataComponent={
            <>
              {" "}
              {loading ? (
                <div class="lds-ring">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              ) : (
                <h1>Sin datos</h1>
              )}
            </>
          }
          pagination={pagination}
          paginationComponentOptions={{
            rowsPerPageText: "Filas por página:",
            rangeSeparatorText: "de",
            noRowsPerPage: false,
            selectAllRowsItem: false,
            selectAllRowsItemText: "Todo",
          }}
        />
      </div>
    </>
  );
};
