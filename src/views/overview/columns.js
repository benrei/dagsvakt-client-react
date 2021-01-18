const columns = [
  { field: "_id", hide: true },
  {
    headerName: "Navn",
    field: "name",
    minWidth: 150,
    cellRenderer: "agGroupCellRenderer"
  },
  // { headerName: "Nummer", field: "number", width: 85 },
  { headerName: "Telefon", field: "phone" },
  { headerName: "Epost", field: "email" },
  { headerName: "Gate", field: "street" },
  { headerName: "PNr", field: "postCode" },
  { headerName: "Sted", field: "city" },
  {
    field: "objects",
    hide: true,
    getQuickFilterText: params => JSON.stringify(params.value)
  },
  { field: "objects._id", hidden: true, lockVisible: true },
  { field: "objects.customerId", hidden: true, lockVisible: true },
  { field: "objects.brand", hidden: true, lockVisible: true },
  { field: "objects.model", hidden: true, lockVisible: true },
  { field: "objects.info", hidden: true, lockVisible: true },
  { field: "objects.serialIn", hidden: true, lockVisible: true },
  { field: "objects.serialOut", hidden: true, lockVisible: true },
  { field: "objects.installedTime", hidden: true, lockVisible: true },
  { field: "objects.serviceInterval", hidden: true, lockVisible: true },
  { field: "objects.warrantyStartTime", hidden: true, lockVisible: true },
  { field: "objects.geometry", hidden: true, lockVisible: true },
  { field: "objects.geometry.type", hidden: true, lockVisible: true },
  { field: "objects.geometry.coordinates", hidden: true, lockVisible: true },
  {
    headerName: "Pumper",
    editable: false,
    cellRenderer: params => params.data?.objects?.length || 0
  },
  {
    headerName: "Servicer",
    editable: false,
    cellRenderer: params => params.data?.objects?.services?.length || 0
  }
  // {
  //   headerName: "Merke - modell | Siste service | Vis i kart",
  //   field: "objects",
  //   width: 300,
  //   cellRenderer: "itemsRenderer",
  //   wrapText: true,
  //   autoHeight: true
  // }
];

const columnsNested = [];

export default columns;
