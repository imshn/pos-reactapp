import React, { useState } from "react";
import {
  ShoppingCartOutlined,
  LayoutOutlined,
  PieChartOutlined,
  InboxOutlined,
  TeamOutlined
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import OrderSection from "../components/OrderSection";
const { Header, Sider, Content } = Layout;
const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout hasSider>
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
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
          defaultSelectedKeys={["2"]}
          items={[
            {
              key: "1",
              icon: <PieChartOutlined />,
              label: "Dashboard"
            },
            {
              key: "2",
              icon: <LayoutOutlined />,
              label: "Orders",
              children: [
                {
                  key: "21",
                  label: "Manage Orders"
                }
              ]
            },
            {
              key: "3",
              icon: <TeamOutlined />,
              label: "Customer",
              children: [
                {
                  key: "31",
                  label: "Manage Customers"
                },
              ]
            },
            {
              key: "4",
              icon: <InboxOutlined />,
              label: "Product", 
              children:[
                {
                  key: "41",
                  label: "Manage Products",
                },
                {
                  key: "42",
                  label: "Manage Categories",
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
          <OrderSection />
        </Content>
      </Layout>
    </Layout>
  );
};
export default MainLayout;
