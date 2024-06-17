import React, { useState } from "react";
import {
  ShoppingCartOutlined,
  LayoutOutlined,
  PieChartOutlined,
  InboxOutlined,
  TeamOutlined,
  BarChartOutlined
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
// import OrderSection from "../components/OrderSection";
import { Outlet, useNavigate } from "react-router-dom";
const { Header, Sider, Content } = Layout;
const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  return (
    <Layout hasSider>
      <Sider
        style={{
          overflow: "auto",
          minHeight: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0
        }}
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical">
          <h1>POS</h1>
        </div>
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <PieChartOutlined />,
              label: "Dashboard",
              onClick: () => navigate("/")
            },
            {
              key: "2",
              icon: <LayoutOutlined />,
              label: "Orders",
              onClick: () => navigate("/orders")
            },
            {
              key: "3",
              icon: <TeamOutlined />,
              label: "Customers",
              onClick: () => navigate("/customers")
            },
            {
              key: "4",
              icon: <InboxOutlined />,
              label: "Product",
              children: [
                {
                  key: "41",
                  label: "Manage Products",
                  onClick: () => navigate("/products")
                },
                {
                  key: "42",
                  label: "Manage Categories",
                  onClick: () => navigate("/categories")
                }
              ]
            },
            {
              key: "5",
              icon: <BarChartOutlined />,
              label: "Reports",
              children: [
                {
                  key: "51",
                  label: "Today's Sales Report",
                  onClick: () => navigate("/reports/today")
                },
                {
                  key: "52",
                  label: "Sales Reports",
                  onClick: () => navigate("reports/sales-reports")
                },
                {
                  key: "53",
                  label: "Sales Returns",
                  onClick: () => navigate("/reports/sales-returns")
                },
                {
                  key: "54",
                  label: "Stock Reports",
                  onClick: () => navigate("/reports/stock-reports")
                }
              ]
            }
          ]}
        />
      </Sider>
      <Layout
        style={{
          transition: "all .1s linear",
          marginLeft: collapsed ? 80 : 200
        }}
      >
        <Header
          style={{
            position: "sticky",
            top: 0,
            zIndex: 1,
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <div style={{ width: collapsed ? "88.5%" : "87.2%" }}></div>
          <Menu
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            items={[
              {
                key: "1",
                icon: <ShoppingCartOutlined style={{ fontSize: "20px" }} />
                // label: "Dashboard"
              },
              {
                key: "2",
                // icon: < />,
                label: "Profile"
              }
            ]}
            style={{
              flex: 1,
              minWidth: 0
            }}
          />
        </Header>
        <Content
          style={{
            margin: "0px 16px",
            paddingTop: "0px",
            padding: "20px",
            minHeight: "95vh"
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default MainLayout;
