import { Col, Layout, Row } from 'antd';
import '../Defaulayout/Style.css';
import Header from './Header/Index';
import Sidebar from './Sidebar/Index';

const { Content } = Layout;
interface Props {
    Children: any;
}

const Defaulayout = ({ Children }: Props) => (
    <Layout>
        <Header></Header>
        <Layout>
            <Row gutter={16}>
                <Col span={8} style={{ textAlign: 'center' }}>
                    <Sidebar></Sidebar>
                </Col>
                <Col span={16}>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        {/* <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb> */}
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
                </Col>
            </Row>
        </Layout>
    </Layout>
);
export default Defaulayout;
