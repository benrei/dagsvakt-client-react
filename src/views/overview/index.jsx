import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-enterprise";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
// import "ag-grid-community/dist/styles/ag-theme-balham.css";
// import GridHeader from './GridHeader';
import GridHeader from "../../agGrid/header/GridHeader";
import GridSearch from "../../agGrid/header/GridSearch";
import columns from "./columns";
import detailGridOptions from "../../agGrid/defaults/detailGrid";
import gridOptions from "../../agGrid/defaults/gridOptions";
import defaultColDef from "../../agGrid/defaults/defaultColDef";
import utils from "../../agGrid/utils";
import contextMenus from "../../agGrid/gridOptions/getContextMenuItems";

import { useMutation, useQuery } from "@apollo/client";
import api from "../../Api";
import apiUtils from "../../Api/mappers";

const Overview = props => {
  const [gridApi, setGridApi] = useState(null);
  const [gridColumnApi, setGridColumnApi] = useState(null);
  const [selectedRow, setSelectedRow] = useState(null);
  const [quickFilterText, setQuickFilterText] = useState("");
  const { loading, error, data } = useQuery(api.customersTable);
  const [updateCustomer] = useMutation(api.customerUpdate);

  function onGridReady(params) {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);

    params.api.sizeColumnsToFit();
  }
  const onCellValueChange = params => {
    const { api, column, data, node } = params;
    console.log(data);
    // updateCustomer({ variables: { ...data } }).then(res => {
    //   api.flashCells({
    //     // flashDelay: 1000,
    //     rowNodes: [node],
    //     columns: [column.colId]
    //   });
    // });
  };
  const colDef = {
    ...defaultColDef,
    editable: true
  };

  const options = {
    ...gridOptions,
    detailRowAutoHeight: true,
    getContextMenuItems: utils.contextMenuCustomer,
    headerHeight: 30,
    masterDetail: true,
    onFirstDataRendered: params => {
      params.api.sizeColumnsToFit();
      // params.api.setDomLayout("autoHeight");
    },
    onCellValueChanged: onCellValueChange,
    detailCellRendererParams: {
      // provide the Grid Options to use on the Detail Grid
      detailGridOptions: {
        ...detailGridOptions,
        defaultColDef: colDef,
        columnDefs: [
          { field: "brand", width: 80 },
          { field: "model", width: 80 },
          { field: "info" },
          { field: "serialIn", width: 80 },
          { field: "serialOut", width: 80 },
          { field: "installedTime", width: 80 },
          { field: "serviceInterval", width: 80 }
        ],
        getContextMenuItems: contextMenus.object
      },
      // get the rows for each Detail Grid
      getDetailRowData: function(params) {
        params.successCallback(params.data.objects);
      },
      detailCellRendererParams: {
        detailGridOptions: {
          ...detailGridOptions,
          columnDefs: [
            { field: "time", width: 80 },
            { field: "model", width: 80 },
            { field: "info" },
            { field: "serialIn", width: 80 },
            { field: "serialOut", width: 80 },
            { field: "installedTime", width: 80 },
            { field: "serviceInterval", width: 80 }
          ],
          getContextMenuItems: contextMenus.object
        },
        // get the rows for each Detail Grid
        getDetailRowData: function(params) {
          params.successCallback(params.data.services);
        }
      }
    }
  };
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  const customersObjectsServices = JSON.parse(
    JSON.stringify(data && data.customersObjectsServices)
  );
  apiUtils.agColumnsToGqlQuery("test", columns);
  return (
    <div className="ag-theme-alpine" style={{ height: "90vh", width: "100%" }}>
      <GridHeader>
        <GridSearch setQuickFilterText={setQuickFilterText} />
      </GridHeader>
      <AgGridReact
        onGridReady={onGridReady}
        quickFilterText={quickFilterText}
        rowData={customersObjectsServices}
        rowSelection={"single"}
        gridOptions={options}
        columnDefs={columns}
        defaultColDef={colDef}
      />
    </div>
  );
};

export default Overview;
