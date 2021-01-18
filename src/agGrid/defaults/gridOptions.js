const gridOptions = {
  // allowContextMenuWithControlKey: true,
  autoGroupColumnDef: {
    minWidth: 150
  },
  enableCharts: true,
  enableRangeSelection: true,
  enableRangeHandle: true,
  // enableFillHandle: true,
  // rowSelection: "single",
  // rowGroupPanelShow: "always",
  sideBar: {
    toolPanels: ["columns", "filters"]
  },
  suppressCopyRowsToClipboard: true,
  // sendToClipboard: (params)=>params.api.copySelectedRangeToClipboard(),
  statusBar: {
    statusPanels: [
      { statusPanel: "agTotalAndFilteredRowCountComponent", align: "left" },
      { statusPanel: "agAggregationComponent" }
    ]
  },
  stopEditingWhenGridLosesFocus: true,
  // suppressRowClickSelection: true,
  undoRedoCellEditing: true
};
export default gridOptions;
