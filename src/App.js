import React from "react";
import "./style.css";
import Main from "./views";
import { Layout } from "antd";
import AppMenu from "./common/AppMenu";
import { Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const { Header, Content } = Layout;

const App = props => {
  const { isLoading, getAccessTokenSilently } = useAuth0();
  if (isLoading) return <div>Loading...</div>;
  const setToken = async () => {
    localStorage.token = await getAccessTokenSilently();
    console.log(localStorage.token);
  };
  setToken();
  return (
    <Layout className="layout">
      <Header>
        <Route path="/" component={AppMenu} />
      </Header>
      <Layout className="site-layout">
        <Content>
          <div
            className="site-layout-background"
            style={{ minHeight: 360, background: "#fff" }}
          >
            <Main />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;
