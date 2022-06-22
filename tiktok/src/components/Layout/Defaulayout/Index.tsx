import { AudioOutlined, SearchOutlined, CloudUploadOutlined } from '@ant-design/icons';
import { Breadcrumb, Col, Input, Layout, Menu, MenuProps, Row, Tooltip } from 'antd';
import logo from '../../../assets/images/logo.png';
import '../Defaulayout/Style.css';
import Header from './Header/Index';

const { Content, Sider } = Layout;
interface Props {
    Children: any;
}

const Defaulayout = ({ Children }: Props) => (
    <Layout>
        <Header></Header>
        <Layout>
            <Sider width={200} className="site-layout-background">
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%', borderRight: 0 }}
                />
            </Sider>
            <Layout style={{ padding: '0 24px 24px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <Content
                    className="site-layout-background"
                    style={{
                        padding: 24,
                        margin: 0,
                        minHeight: 280,
                    }}
                >
                    Content
                </Content>
            </Layout>
        </Layout>
    </Layout>
);
export default Defaulayout;
