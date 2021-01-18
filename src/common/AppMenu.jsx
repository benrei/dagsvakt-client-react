import React from "react";
import PropTypes from "prop-types";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
const pkg = require("../../package.json");

const AppMenu = props => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  return (
    <div>
      <div className="logo">
        <h2 style={{ color: "#fff", lineHeight: "normal" }}>{pkg.name}</h2>
      </div>
      {isAuthenticated ? (
        <Menu theme="dark" mode="horizontal">
          <Menu.Item key="overview">
            <Link to={`/overview`}>Oversikt</Link>
          </Menu.Item>
          <Menu.Item key="objects">
            <Link to={`/objects`}>Varmepumper</Link>
          </Menu.Item>
          <Menu.Item key="tasks">
            <Link to={`/tasks`}>Servicer</Link>
          </Menu.Item>
          <Menu.Item key="logout">
            <a
              onClick={() => {
                localStorage.removeItem("token");
                logout({ returnTo: window.location.origin });
              }}
            >
              Logg ut
            </a>
          </Menu.Item>
        </Menu>
      ) : (
        <Menu theme="dark" mode="horizontal">
          <Menu.Item key="login">
            <a
              href="logout"
              onClick={() =>
                loginWithRedirect({ returnTo: window.location.origin })
              }
            >
              Logg inn
            </a>
          </Menu.Item>
        </Menu>
      )}
    </div>
  );
};
export default AppMenu;

AppMenu.propTypes = {
  name: PropTypes.string
};
