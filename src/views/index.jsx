import React from "react";
import { Route, Redirect } from "react-router-dom";
import Home from "./home";
import Overview from "./overview";
import Customers from "./customers";
import Customer from "./customers/Customer";
import Services from "./services";
import Service from "./services/Service";
import Comments from "./services/Comments";
import RightDrawer from "../common/RightDrawer";
import Items from "./items";
import Item from "./items/Item";
import { useAuth0 } from "@auth0/auth0-react";

const Main = props => {
  const { isAuthenticated, user, getAccessTokenSilently } = useAuth0();
  if (isAuthenticated)
    return (
      <div>
        <Route path="/" render={() => <Redirect to={"/overview"} />} exact />
        <Route path="/overview" component={Overview} />
        <Route path="/customers" component={Customers} />
        <Route path="/services" component={Services} />
        <Route
          path="/services/:serviceId"
          render={props => (
            <RightDrawer>
              <Service {...props} />
              <Comments {...props} />
            </RightDrawer>
          )}
        />
        <Route path="/items" component={Items} />
        <Route
          path="*/items/:itemId"
          render={props => (
            <RightDrawer>
              <Item {...props} />
            </RightDrawer>
          )}
        />
        <Route
          path="*/customer/:customerId"
          render={props => (
            <RightDrawer>
              <Customer {...props} />
            </RightDrawer>
          )}
        />
      </div>
    );
  else return <span />;
};
export default Main;

Main.propTypes = {};
