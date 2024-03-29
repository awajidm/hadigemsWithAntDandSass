import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "antd/dist/antd.css";
import "./App.css";

import AppHeader from "./components/Layout/AppHeader";
import AppFooter from "./components/Layout/AppFooter";

import Home from "./components/Home";
import ProductDetails from "./components/Product/ProductDetails";

import { Layout, Affix } from "antd";

const { Header, Footer, Sider, Content } = Layout;

const App = () => {
  const [top, setTop] = useState(0);
  return (
    <Router>
      <Layout>
        <Affix offsetTop={top}>
          <Header className="header">
            <AppHeader />
          </Header>
        </Affix>
        <Content className="content">
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/product/:id" component={ProductDetails} exact />
            <Layout>
              <Sider>Sider</Sider>
              <Content>
                <Route path="/search/:keyword" component={Home} />
              </Content>
            </Layout>
          </Switch>
        </Content>
        <Footer>
          <AppFooter />
        </Footer>
      </Layout>
    </Router>
  );
};

export default App;
