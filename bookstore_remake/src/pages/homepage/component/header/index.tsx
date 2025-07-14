import {
  HomeOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { AutoComplete, Menu, MenuProps } from "antd";
import { Header } from "antd/es/layout/layout";
import MenuItem from "antd/es/menu/MenuItem";
import React, { ChangeEvent, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BookStoreLogo } from "src/assets/icons";
import { InputProps } from "src/components/Form/FormItem";
import InputFields from "src/components/Form/FormItem/InputFields";
import { TYPE_FIELD } from "src/constants/enum/common";

import "./style.scss";

type MenuItem = Required<MenuProps>["items"][number];

export const HeaderComponent = () => {
  const [formValues, setFormValues] = useState<Record<string, string>>({});

  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname.split("/")[1];

  const items: MenuItem[] = [
    {
      label: "Home",
      key: "homepage",
      icon: <HomeOutlined />,
    },
    {
      label: "Cart",
      key: "cart",
      icon: <ShoppingCartOutlined />,
    },
    {
      label: "Account",
      key: "account",
      icon: <UserOutlined />,
    },
  ];

  const searchFields: InputProps[] = [
    {
      name: "search",
      label: "",
      allowClear: true,
      value: formValues["search"],
      type: TYPE_FIELD.AUTO_COMPLETE,
      placeholder: "Search books here...",
      suffixIcon: <SearchOutlined />,
      onChange: (value: string) => {
        handleSearch("search", value);
      },
      className: "!w-[40rem] !h-10",
    },
  ];

  const handleClick: MenuProps["onClick"] = (e) => {
    navigate(`/${e.key}`);
  };

  const handleSearch = (key: string, value: string) => {
    setFormValues((prev) => ({
      ...prev,
      [key]: value,
    }));
    console.log("Search value:", value);
  };

  return (
    <Header
      style={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "white",
        justifyContent: "space-between",
        padding: "0rem 0rem 0rem 2rem",
      }}
    >
      <div style={{ width: "10rem" }}>
        <img src={BookStoreLogo} className="w-18 h-14" />
      </div>

      <div>
        <InputFields inputs={searchFields} />
      </div>

      <div
        style={{
          width: "22%",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Menu
          className="custom-menu"
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={[currentPath]}
          items={items}
          style={{ flex: 1, minWidth: 0 }}
          onClick={handleClick}
        />
      </div>
    </Header>
  );
};
