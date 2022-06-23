import { AudioOutlined, SearchOutlined, CloudUploadOutlined, MoreOutlined } from '@ant-design/icons';
import { Button, Col, Dropdown, Input, Layout, Menu, Modal, Row, Tooltip } from 'antd';
import logo from '../../../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import { Fragment, useEffect, useState } from 'react';
import Login from '../../../../pages/Login/Index';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import Wrapper from '../../popper/Wrapper';
const { Header } = Layout;
const HeaderApp = (): JSX.Element => {
    const [valuee, setvaluee] = useState<any>();
    const [searchResult, setsearchResult] = useState<any>([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [visible, setVisible] = useState(true);
    const show = () => setVisible(true);
    const hide = () => setVisible(false);

    const menu = (
        <Menu style={{ width: '190px' }}>
            <Menu.Item key="1">Tiếng Việt.</Menu.Item>
            <Menu.Item key="2">Chính sách quyền riêng tư.</Menu.Item>
            <Menu.Item key="3">Thông tin thêm.</Menu.Item>
        </Menu>
    );
    useEffect(() => {
        setTimeout(() => {
            setsearchResult([1]);
        }, 1000);
    }, []);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const onchange = (e: any) => {
        console.log(e.target.value);
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
                    <Tippy
                        visible={searchResult.length > 0}
                        render={(attrs) => (
                            <div className="box" tabIndex={-1} {...attrs}>
                                <Wrapper Children={'ketqua'}></Wrapper>
                            </div>
                        )}
                        interactive={true}
                    >
                        <Col span={15}>
                            <Input
                                onChange={(e) => onchange(e)}
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
                    </Tippy>
                    )
                    <Col span={2} style={{ flex: 0 }}>
                        <p
                            style={{
                                color: ' #fc5c7d',
                                fontSize: '3.8rem',
                            }}
                        >
                            <Tippy content="Upload Video">
                                <Link to="/Uploads">
                                    <CloudUploadOutlined
                                        style={{
                                            color: ' #fc5c7d',
                                            fontSize: '3.8rem',
                                        }}
                                    />
                                </Link>
                            </Tippy>
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
