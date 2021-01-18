import React from "react";

const FitColumns = props => {
  return <h1>Hello, {props.name}</h1>;
};
export default FitColumns;

FitColumns.defaultProps = {
  func: () => {}
};
