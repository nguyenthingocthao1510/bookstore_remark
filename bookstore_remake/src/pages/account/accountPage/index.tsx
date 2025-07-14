import {
  UserOutlined,
  DollarCircleOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Layout, MenuProps, theme, Menu } from "antd";
import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  profileRoute,
  changePasswordRoute,
  myCoinRoute,
  logoutRoute,
} from "src/routes/routes.contants"; // Example

const { Content, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

export const AccountPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/account") {
      navigate(profileRoute, { replace: true });
    }
  }, [location.pathname, navigate]);

  const keyToRoute: Record<string, string> = {
    profile: profileRoute,
    "change-password": changePasswordRoute,
    "my-coin": myCoinRoute,
    logout: logoutRoute,
  };

  const items: MenuItem[] = [
    getItem("My account", "my-account", <UserOutlined />, [
      getItem("Profile", "profile"),
      getItem("Change password", "change-password"),
    ]),
    getItem("My coin", "my-coin", <DollarCircleOutlined />),
    getItem("Logout", "logout", <LogoutOutlined />),
  ];

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout className="pt-5">
      <Layout>
        <Sider width={200} style={{ background: colorBgContainer }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={["profile"]}
            defaultOpenKeys={["my-account"]}
            style={{ height: "100%", borderRight: 0 }}
            items={items}
            onClick={({ key }) => {
              const route = keyToRoute[key];
              if (route) {
                navigate(route);
              }
            }}
          />
        </Sider>
        <Layout style={{ padding: "0 24px 0px 24px" }}>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
