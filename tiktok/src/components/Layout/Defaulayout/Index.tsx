import { AudioOutlined, SearchOutlined, CloudUploadOutlined } from '@ant-design/icons';
import { Breadcrumb, Input, Layout, Menu, MenuProps, Tooltip } from 'antd';
import logo from '../../../assets/images/logo.png';
import '../Defaulayout/Style.css';

const { Header, Content, Sider } = Layout;
interface Props {
    Children: any;
}

export default function Defaulayout({ Children }: Props) {
    const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
        key,
        label: `nav ${key}`,
    }));
    return (
        <Layout>
            <Header className="header">
                <div className="logo">
                    <img src={logo} alt="LogoTikTok" />
                    <Input
                        className="Search"
                        style={{ float: 'left', color: 'red', marginLeft: '20rem', width: '65rem', top: '1.5rem' }}
                        placeholder="Nhập từ khóa cần tìm!"
                        prefix={<SearchOutlined className="site-form-item-icon iconSearch" />}
                        suffix={
                            <Tooltip title="Nhấn vào đây để nói!">
                                <AudioOutlined style={{ fontSize: '16px' }} />
                            </Tooltip>
                        }
                    />
                    <p
                        style={{
                            float: 'left',
                            color: ' #fc5c7d',
                            fontSize: '3.8rem',
                            marginLeft: '60rem',
                        }}
                    >
                        <CloudUploadOutlined />
                    </p>
                </div>
            </Header>
            <Layout>
                <Sider width={200} className="site-layout-background">
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                        // items={items2}
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
                        {Children}
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
}
