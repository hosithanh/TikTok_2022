import { Avatar, Col, Row } from 'antd';
import {
    HomeFilled,
    UsergroupAddOutlined,
    VideoCameraAddOutlined,
    UserOutlined,
    CheckOutlined,
} from '@ant-design/icons';
import './Style.css';
import { Link } from 'react-router-dom';

export default function Sidebar() {
    // const pathname = window.location.pathname.split('/').pop();

    // let mau = true;
    // pathname !== '' ? (mau = false) : (mau = true);

    const dataUser = [
        { Name: 'Hồ Sĩ Thành', Check: 1 },
        { Name: 'Nguyênx Thị Kim Anh', Check: 0 },
        { Name: 'Trần Viết Nin', Check: 1 },
        { Name: 'Trịnh Hoang Kim Sơm', Check: 0 },
        { Name: 'Nguyễn Bá Long Châu', Check: 1 },
        { Name: 'Võ Hoàng Đức', Check: 1 },
        { Name: 'Lê Văn Minh', Check: 1 },
        { Name: 'Nguyễn Văn Dũng', Check: 1 },
        { Name: 'Lê Trọng LInh', Check: 1 },
        { Name: 'Đặng HOnagf Việt', Check: 0 },
        { Name: 'Châu tinh Trì', Check: 1 },
        { Name: 'Võ Thanh Hong Long', Check: 1 },
        { Name: 'Đặng HOnagf Việt', Check: 0 },
        { Name: 'Châu tinh Trì', Check: 1 },
        { Name: 'Võ Thanh Hong Long', Check: 1 },
    ];
    return (
        <div className="sidebar">
            <Row>
                <Col span={24}>
                    <Link to="/">
                        <div className="danhchoban" style={{ color: '#fc5c7d' }}>
                            <HomeFilled /> Dành cho bạn
                        </div>
                    </Link>
                </Col>
                <Col span={24}>
                    <Link to="/Fllowing">
                        <div className="Fllowing">
                            <UsergroupAddOutlined /> Đang Fllowing
                        </div>
                    </Link>
                </Col>
                <Col span={24}>
                    <Link to="/">
                        <div className="live">
                            <VideoCameraAddOutlined style={{ padding: '5px 5px' }} />
                            Live
                        </div>
                    </Link>
                </Col>
            </Row>
            <Row>
                <Col span={24} style={{ padding: '10px 10px' }}>
                    Đăng nhập để có thể fllow các tác giả, like video và xem các bình luận.{' '}
                </Col>
            </Row>
            <Row style={{ top: '15px' }}>
                {' '}
                <p style={{ width: '100%', height: '2px', background: 'bisque' }}></p>
            </Row>

            <Row style={{ color: 'black', textAlign: 'center' }}>
                <Col span={24}>
                    <p>Tài khoản được đề xuất</p>
                </Col>
            </Row>
            <div className="sidebar_left" style={{ overflowY: 'scroll', maxHeight: '65vh' }}>
                {dataUser.map((item, index) => (
                    <Row>
                        <Col span={7}></Col>
                        <Col span={3} style={{ padding: '2px 2px ', float: 'left' }}>
                            <Avatar size={37} icon={<UserOutlined />} />
                        </Col>
                        <Col span={14}>
                            <p
                                style={{
                                    display: 'flex',
                                    textAlign: 'left',
                                    padding: '7px 0px 0px 2px',
                                    fontFamily: 'monospace',
                                    fontWeight: '600',
                                    fontSize: '17px',
                                }}
                            >
                                {item.Name}
                                {item.Check === 1 ? (
                                    <CheckOutlined
                                        style={{
                                            fontSize: '14px',
                                            // paddingLeft: '10px',
                                            height: '15px',
                                            width: '15px',
                                            // paddingTop: '7px',
                                            marginLeft: '10px',
                                            marginTop: '7px',
                                            color: 'white',
                                            background: '#69c0ff',
                                            display: 'inline-block',
                                            borderRadius: '50%',
                                        }}
                                    />
                                ) : (
                                    ''
                                )}
                            </p>
                        </Col>
                    </Row>
                ))}
            </div>
        </div>
    );
}
