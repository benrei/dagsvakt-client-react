import React from "react";
import api from "../../Api";
import { useQuery } from "@apollo/client";
import api from "../../Api";

const Item = (props) => {
  const {itemId} = props.match.params;
  console.log(itemId)
  //const { loading, error, data } = useQuery(api.itemServicesComments, {id:itemId});
  //if (loading) return <p>Loading...</p>;
  //if (error) return <p>Error :(</p>;
  //console.log(data)
  return (
    <div>
      <h2>Item</h2>
    </div>
  );
};
export default Item