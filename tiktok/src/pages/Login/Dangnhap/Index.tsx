import { Button, Form, Input, Modal, Row } from 'antd';
import React, { Fragment, useState } from 'react';
import Dangky from '../Dangky/Index';

export default function Dangnhap() {
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

    const onFinish = (values: any) => {
        console.log('Success:', values);
    };
    return (
        <div>
            <p>Vui lòng nhập thông tin đăng nhập !</p>
            <Form onFinish={onFinish}>
                <Row>
                    <label style={{ fontSize: '15px', color: '#f64f59' }}> Sđt hoặc Email</label>
                </Row>
                <Form.Item name="username" rules={[{ required: true, message: 'Vui lòng nhập sdt hoặc email!' }]}>
                    <Input style={{ borderRadius: 10 }} />
                </Form.Item>
                <Row>
                    <label style={{ fontSize: '15px', color: '#f64f59' }}>Mật khẩu</label>
                </Row>
                <Form.Item name="password" rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}>
                    <Input style={{ borderRadius: 10 }} />
                </Form.Item>
                <Row>
                    <label style={{ fontSize: '12px', color: 'f64f59' }}>Quên mật khẩu?</label>
                </Row>
                <Row>
                    <Button
                        htmlType="submit"
                        style={{
                            textAlign: 'center',
                            width: '100%',
                            color: 'white',
                            background: 'linear-gradient( #c471ed, #f64f59)',
                            borderRadius: '10px',
                        }}
                    >
                        Đăng nhập
                    </Button>
                </Row>
                <Row>
                    <p style={{ textAlign: 'center', width: '100%', height: '20px' }}>
                        Bạn chưa có tài khoản?{' '}
                        <Button
                            style={{
                                color: ' #f64f59',
                                cursor: 'pointer',
                                border: '0.1px solid white',
                            }}
                            onClick={showModal}
                        >
                            Đăng ký
                        </Button>
                    </p>
                </Row>
            </Form>
            <Fragment>
                <Modal
                    title="Đăng kí TikTok"
                    visible={isModalVisible}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    footer={[]}
                >
                    <Dangky />
                </Modal>
            </Fragment>
        </div>
    );
}
