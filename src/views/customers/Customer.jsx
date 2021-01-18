import React from "react";
import { useQuery } from "@apollo/client";
import api from "../../Api";
import CustomerAll from "./CustomerAll";

const Customer = props => {
  const { customerId } = props.match.params;
  let variables = {
    id: customerId
  };
  const { loading, error, data } = useQuery(api.customerObjectsServicesComments,{variables});
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  console.log(data);
  return <CustomerAll />;
};

export default Customer;
