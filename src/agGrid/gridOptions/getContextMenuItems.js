import utils from "../utils";

const standard = params => {
  const { api, node } = params;
  console.log(params);
  // .copySelectedRangeToClipboard()
  const menuItems = [];
  const copySelectedRangeToClipboard = {
    name: "Copy selected cell(s)",
    icon: '<span class="ag-icon ag-icon-copy"></span>',
    action: () => api.copySelectedRangeToClipboard()
  };
  if (node) {
    menuItems.push(
      // copySelectedRangeToClipboard,
      "copy",
      "paste",
      "separator",
      "chartRange"
    );
  }
  menuItems.push("export");
  return menuItems;
};

const customer = params => {
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

const object = params => {
  const { api, node } = params;
  console.log(params);
  const menuItems = [];
  menuItems.push({
    name: "Ny varmepumpe",
    icon: '<span class="ag-icon ag-icon-group"></span>',
    action: () => utils.addRow(api, {}, 0)
  });
  if (node) {
    menuItems.push({
      name: "Slett varmepumpe",
      icon: '<span class="ag-icon ag-icon-cancel"></span>',
      action: function() {
        let confirmed = window.confirm(
          "Er du sikker at du vil slette varmepumpe?"
        );
        if (confirmed) utils.removeRow(api, node.data);
      }
    });
  }
  menuItems.push("export");
  return menuItems;
};

const service = params => {
  const { api, node } = params;
  console.log(params);
  const menuItems = [];
  menuItems.push({
    name: "Ny service",
    icon: '<span class="ag-icon ag-icon-group"></span>',
    action: () => utils.addRow(api, {}, 0)
  });
  if (node) {
    menuItems.push({
      name: "Slett service",
      icon: '<span class="ag-icon ag-icon-cancel"></span>',
      action: function() {
        let confirmed = window.confirm(
          "Er du sikker at du vil slette service?"
        );
        if (confirmed) utils.removeRow(api, node.data);
      }
    });
  }
  menuItems.push("export");
  return menuItems;
};

export default { customer, object, service, standard };
