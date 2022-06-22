import { AudioOutlined, SearchOutlined, CloudUploadOutlined, MoreOutlined } from '@ant-design/icons';
import { Button, Col, Dropdown, Input, Layout, Menu, Modal, Row, Tooltip } from 'antd';
import logo from '../../../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import { Fragment, useState } from 'react';
import Login from '../../../../pages/Login/Index';
const { Header } = Layout;
const HeaderApp: React.FC = (): JSX.Element => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const menu = (
        <Menu style={{ width: '160px' }}>
            <Menu.Item key="1">Tiếng Việt</Menu.Item>
            <Menu.Item key="2">Thông tin thêm</Menu.Item>
        </Menu>
    );

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <div>
            <Header className="header">
                <Row gutter={24}>
                    <Col style={{ cursor: 'pointer' }} span={4}>
                        <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
                            <img className="logo" src={logo} alt="LogoTikTok" />
                        </Link>
                    </Col>
                    <Col span={15}>
                        <Input
                            className="Search"
                            style={{ color: 'red', width: '65rem' }}
                            placeholder="Nhập từ khóa cần tìm!"
                            prefix={<SearchOutlined className="site-form-item-icon iconSearch" />}
                            suffix={
                                <Tooltip title="Nhấn vào đây để nói!">
                                    <AudioOutlined style={{ fontSize: '16px' }} />
                                </Tooltip>
                            }
                        />
                    </Col>
                    <Col span={2} style={{ flex: 0 }}>
                        <p
                            style={{
                                color: ' #fc5c7d',
                                fontSize: '3.8rem',
                            }}
                        >
                            <CloudUploadOutlined />
                        </p>
                    </Col>
                    <Col span={2} style={{ flex: 0 }}>
                        <Button
                            style={{
                                textAlign: 'center',
                                color: 'white',
                                borderRadius: '20px',
                                width: 80,
                                background: 'linear-gradient( #fc5c7d, #6a82fb)',
                            }}
                            onClick={showModal}
                        >
                            Login
                        </Button>
                    </Col>
                    <Col span={1} style={{ flex: 0 }}>
                        <Dropdown overlay={menu} placement="bottomRight" arrow>
                            <div className="user">
                                <MoreOutlined style={{ color: 'white', fontSize: '1.5rem', cursor: 'pointer' }} />
                            </div>
                        </Dropdown>
                    </Col>
                </Row>
            </Header>
            <Fragment>
                <Modal
                    title="Đăng nhập TikTok"
                    visible={isModalVisible}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    footer={[]}
                >
                    <Login />
                </Modal>
            </Fragment>
        </div>
    );
};

export default HeaderApp;
