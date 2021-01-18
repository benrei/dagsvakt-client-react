import React from "react";
import api from "../../Api";
import { useQuery } from "@apollo/client";
import api from "../../Api";

const Items = () => {
  const { loading, error, data } = useQuery(api.items);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  console.log(data)
  return (
    <div>
      <h2>Items</h2>
    </div>
  );
};
