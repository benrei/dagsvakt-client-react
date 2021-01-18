import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "antd/dist/antd.css";
import App from "./App";
//import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Auth0Provider } from "@auth0/auth0-react";

import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri:
    "https://func-dagsvakt-api.azurewebsites.net/graphql?code=5n/jKLFTHXrdoEfZTJX4VxpXkItGhmIfRucCPa5yVt9zDLNqi0OJgg=="
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ""
    }
  };
});
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

ReactDOM.render(
  <BrowserRouter>
    <Auth0Provider
      domain="dagsvakt.eu.auth0.com"
      clientId="cWXPsRJSHWbasPzTG5Ciwm153Y6DYsPL"
      redirectUri="https://dagsvakt.stackblitz.io"
      audience="dagsvakt-api"
      scope="openid profile email"
    >
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Auth0Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
