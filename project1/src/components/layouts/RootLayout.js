import { Breadcrumb, Button, Layout, Menu, theme } from "antd";
import Link from "next/link";
const { Header, Content, Footer } = Layout;
const RootLayout = ({ children }) => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout className="layout">
            <Header
                style={{
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <div className="demo-logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={["2"]}
                >
                    <Link href="/">
                        <Button type="primary" style={{ margin: "0 10px" }}>
                            Home
                        </Button>
                    </Link>
                    <Link href="/news">
                        <Button type="primary" style={{ margin: "0 10px" }}>
                            news
                        </Button>
                    </Link>
                    <Link href="/products">
                        <Button type="primary" style={{ margin: "0 10px" }}>
                            products
                        </Button>
                    </Link>
                </Menu>
            </Header>
            <Content
                style={{
                    padding: "0 50px",
                }}
            >
                <Breadcrumb
                    style={{
                        margin: "16px 0",
                    }}
                >
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>RootLayout</Breadcrumb.Item>
                </Breadcrumb>
                <div
                    className="site-layout-content"
                    style={{
                        background: colorBgContainer,
                        minHeight: "100vh",
                    }}
                >
                    {children}
                </div>
            </Content>
            <Footer
                style={{
                    textAlign: "center",
                }}
            >
                Ant Design ©2023 Created by Ant UED
            </Footer>
        </Layout>
    );
};
export default RootLayout;
