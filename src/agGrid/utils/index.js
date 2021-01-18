const utils = {
  addRow: (api, data, rowIndex = 0) => {
    const res = api.applyTransaction({
      add: [data],
      addIndex: rowIndex
    });
    api.flashCells({
      flashDelay: 1000,
      rowNodes: res.add
    });
  },
  addRows: (api, data = [], rowIndex = 0) => {},
  editRow: (api, data, rowIndex = 0) => {},
  editRows: (api, rowNodes = [], rowIndex = 0) => {},
  removeRow: (api, rowNode) => {
    api.applyTransaction({ remove: [rowNode] });
  },
  removeRows: (api, rowNodes = []) => {
    api.applyTransaction({ remove: rowNodes });
  }
};
utils.contextMenuCustomer = params => {
  const { api, node } = params;
  const menuItems = [];
  menuItems.push({
    name: "Legg til kunde",
    action: function() {
      utils.addRow(api, { name: "Kundenavn" }, 0);
      api.setFocusedCell(0, "name");
      api.startEditingCell({ rowIndex: 0, colKey: "name" });
    },
    tooltip:
      "Very long tooltip, did I mention that I am very long, well I am! Long!  Very Long!"
  });
  if (node) {
    menuItems.push(
      {
        name: "Slett kunde",
        icon: '<span class="ag-icon ag-icon-cancel"></span>',
        action: function() {
          let confirmed = window.confirm(
            "Er du sikker at du vil slette kunde?"
          );
          if (confirmed) utils.removeRow(api, node.data);
        }
      },
      "separator",
      // "copy",
      // "paste",
      // "separator",
      "chartRange"
    );
  }
  menuItems.push("export");
  return menuItems;
};

export default utils;
