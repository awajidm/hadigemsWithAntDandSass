import React from "react";
import { Route, Link } from "react-router-dom";
import { Space, Row, Col, Divider, Typography } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";

import AppSearch from "./AppSearch";

import "./style.scss";

const AppHeader = () => {
  return (
    <Row justify="space-around">
      <Col span={4} className="logo">
        <Link to="/">
          <img src="/images/logo.png" />
        </Link>
      </Col>
      <Col span={12}></Col>
      <Col span={5} className="searchbar">
        <Route render={({ history }) => <AppSearch history={history} />} />
      </Col>
      <Col span={3}>
        <Space split={<Divider type="vertical" />}>
          <Typography.Link>Login/Register</Typography.Link>
          <Typography.Link>
            <ShoppingCartOutlined style={{ fontSize: 24 }} />
          </Typography.Link>
        </Space>
      </Col>
    </Row>
  );
};

export default AppHeader;
