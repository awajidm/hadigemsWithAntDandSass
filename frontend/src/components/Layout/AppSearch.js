import React, { useState } from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const { Search } = Input;

const AppSearch = ({ history }) => {
  const [keyword, setKeyword] = useState("");
  const searchHandler = (e) => {
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/");
    }
  };
  return (
    <Search
      placeholder="Search Product"
      enterButton
      allowClear
      onChange={(e) => {
        setKeyword(e.target.value);
      }}
      onSearch={searchHandler}
    />
  );
};

export default AppSearch;
