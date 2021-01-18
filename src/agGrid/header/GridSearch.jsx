import React from "react";
import { Input } from "antd";
const { Search } = Input;

const GridSearch = props => {
  return (
    <Search
      placeholder="Søk.."
      onSearch={value => props.setQuickFilterText(value)}
      size="large"
      allowClear={true}
      style={{ width: "100%" }}
    />
  );
};
export default GridSearch;

GridSearch.defaultProps = {
  setQuickFilterText: () => {}
};
