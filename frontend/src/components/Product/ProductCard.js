import React from "react";
import { Link } from "react-router-dom";
import { Space, Button, Typography, Rate } from "antd";
import { HeartFilled, ShoppingFilled } from "@ant-design/icons";

import "./style.scss";

const ProductCard = ({ product }) => {
  return (
    <Space direction="vertical" className="product-card">
      <Link to={`/product/${product._id}`}>
        <div className="product-media">
          <img src={product.images[0].url} />
        </div>
        <div className="product-content">
          <Typography.Title
            level={5}
            ellipsis={true ? { tooltip: `${product.name}` } : false}
          >
            {product.name}
          </Typography.Title>
          <Rate value={product.ratings} disabled style={{ fontSize: 12 }} />
          <Typography style={{ color: "tomato" }}>
            Price: Rs.{product.price}/-
          </Typography>
        </div>
      </Link>
      <div className="product-action">
        <Button shape="circle">
          <ShoppingFilled />
        </Button>
        <Button type="primary" shape="round">
          Buy
        </Button>
        <Button shape="circle">
          <HeartFilled />
        </Button>
      </div>
    </Space>
  );
};

export default ProductCard;
