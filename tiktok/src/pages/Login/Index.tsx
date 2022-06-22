import './style.css';
import { FacebookOutlined, GoogleOutlined, UserOutlined, DownOutlined } from '@ant-design/icons';
import { Fragment, useState } from 'react';
import { Button, Modal } from 'antd';
import Dangnhap from './Dangnhap/Index';
export default function Login() {
    const [isdangnhap, setisdangnhap] = useState(true);
    const dn = () => {
        setisdangnhap(false);
    };
    const [isModalVisible, setIsModalVisible] = useState(false);
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
        <div className="login">
            <div className="Phone" style={{ border: '1px solod rgb(87, 69, 69)', width: 'auto' }}>
                <p className="title">
                    <UserOutlined style={{ color: 'black', padding: '5px 5px 0px 5px', cursor: 'pointer' }} /> Sử dụng
                    SDT hoặc Email!
                </p>
            </div>
            <div className="Facebook">
                <p className="title">
                    <FacebookOutlined style={{ color: '#12c2e9', padding: '5px 5px 0px 5px' }} /> Đăng nhập với
                    FaceBook!
                </p>
            </div>
            <div className="Facebook">
                <p className="title">
                    <GoogleOutlined style={{ color: ' #f64f59', padding: '5px 5px 0px 5px', cursor: 'pointer' }} />
                    Đăng nhập với Google!
                </p>
            </div>
            <p style={{ textAlign: 'center', color: '#f0712a' }}>
                <DownOutlined />
            </p>
            <p style={{ textAlign: 'center' }}>
                Bằng cách đăng ký, bạn đồng ý với <span style={{ fontWeight: 800 }}>Điều khoản dịch vụ</span> của chúng
                tôi là thừa nhận rằng bạn đã đọc <span style={{ fontWeight: 800 }}>Chính sách quyền riêng tư </span>để
                tìm kiếm cách chúng tôi thu thập, sử dụng và chia sẻ dữ liệu của bạn.
            </p>
            <p style={{ textAlign: 'center', width: '100%', height: '20px' }}>
                Bạn đã có tài khoản?{' '}
                <Button
                    style={{ color: ' #f64f59', cursor: 'pointer', border: '0.1px solid white' }}
                    onClick={showModal}
                >
                    Đăng nhập
                </Button>
            </p>

            <Fragment>
                <Modal
                    title="Đăng nhập vào TikTok"
                    visible={isModalVisible}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    footer={[]}
                >
                    <Dangnhap />
                </Modal>
            </Fragment>
        </div>
    );
}
