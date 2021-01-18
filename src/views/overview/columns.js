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
  { field: "objects._id", hide: true, lockVisible: true },
  { field: "objects.customerId", hide: true, lockVisible: true },
  { field: "objects.brand", hide: true, lockVisible: true },
  { field: "objects.model", hide: true, lockVisible: true },
  { field: "objects.info", hide: true, lockVisible: true },
  { field: "objects.serialIn", hide: true, lockVisible: true },
  { field: "objects.serialOut", hide: true, lockVisible: true },
  { field: "objects.installedTime", hide: true, lockVisible: true },
  { field: "objects.serviceInterval", hide: true, lockVisible: true },
  { field: "objects.warrantyStartTime", hide: true, lockVisible: true },
  { field: "objects.geometry", hide: true, lockVisible: true },
  { field: "objects.geometry.type", hide: true, lockVisible: true },
  { field: "objects.geometry.coordinates", hide: true, lockVisible: true },
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
