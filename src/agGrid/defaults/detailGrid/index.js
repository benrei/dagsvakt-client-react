const gridOptions = {
  headerHeight: 30,
  // detailRowHeight: 200,
  // detailRowAutoHeight: true,
  // rowHeight: 24,
  defaultColDef: {
    sortable: true,
    resizable: true
  },
  onGridReady: params => {},
  onFirstDataRendered: params => {
    params.api.sizeColumnsToFit();
    // params.api.setDomLayout("autoHeight");
  }
};
export default gridOptions;
