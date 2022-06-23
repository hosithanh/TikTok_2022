import { Button, Col, Form, Input, Row, Select } from 'antd';
import { useState } from 'react';
import { REGEX } from '../../../utils/constants/validate';
import './Style.css';
export default function Dangky() {
    const [inputEmail, setiInputemail] = useState(false);
    const [ngayValue, setNgayValue] = useState<any | undefined>();
    const [thangValue, setThangValue] = useState<any | undefined>();
    const [namValue, setNamValue] = useState<any | undefined>();
    const { Option } = Select;
    const thang = [] as any;
    const ngay = [] as any;
    const now = new Date().getUTCFullYear();
    const years = Array(now - (now - 40))
        .fill('')
        .map((v, idx) => now - idx)
        .sort((a, b) => b - a);
    for (let i = 1; i < 13; i++) {
        thang.push(
            <Option title={`Tháng ${i}`} value={i} key={i}>
                Tháng {i}
            </Option>,
        );
    }
    for (let j = 1; j < 32; j++) {
        ngay.push(
            <Option title={`Ngày ${j}`} value={j} key={j}>
                Ngày {j}
            </Option>,
        );
    }
    console.log(ngayValue, thangValue, namValue);

    return (
        <div className="Dangky">
            <Form>
                <Form.Item name="namsinh">
                    <Row gutter={8}>
                        <Col span={24}>
                            <p style={{ fontWeight: 800 }}>Ngày sinh của bạn là ngày nào?</p>
                        </Col>
                        <Col span={8}>
                            <Select
                                onChange={(_, value) => {
                                    setNgayValue(value as any);
                                }}
                                allowClear
                                placeholder="--Chọn ngày--"
                                showSearch
                                style={{ width: '90%', textAlign: 'left' }}
                            >
                                {ngay}
                            </Select>
                        </Col>
                        <Col span={8}>
                            <Select
                                onChange={(_, value) => {
                                    console.log(value);

                                    setThangValue(value);
                                }}
                                allowClear
                                placeholder="--Chọn tháng--"
                                showSearch
                                style={{ width: '90%', textAlign: 'left' }}
                            >
                                {thang}
                            </Select>
                        </Col>
                        <Col span={8}>
                            <Select
                                onChange={(_, value) => {
                                    setNamValue(value as any);
                                }}
                                allowClear
                                placeholder="----Chọn năm----"
                                showSearch
                                style={{ width: '90%', textAlign: 'left' }}
                            >
                                {years?.map((item, index) => (
                                    <Select.Option key={index} value={`${item}`}>
                                        {item}
                                    </Select.Option>
                                ))}
                            </Select>
                        </Col>
                    </Row>
                    <Row>
                        <label style={{ fontSize: 12, marginLeft: 10, color: 'rgb(78, 72, 72)' }}>
                            Ngày sinh của bạn sẽ không được hiển thị công khai.
                        </label>
                    </Row>
                </Form.Item>

                <Row gutter={8}>
                    <Col span={24}>
                        <p style={{ float: 'left', fontWeight: 800 }}>Điện thoại</p>
                        <Button
                            style={{ float: 'right', cursor: 'pointer', border: '0.1px solid white' }}
                            onClick={() => setiInputemail(!inputEmail)}
                        >
                            Đăng ký bằng email
                        </Button>
                    </Col>
                </Row>
                <Row>
                    {!inputEmail ? (
                        <Form.Item
                            name="info"
                            rules={[
                                { required: true, message: 'Vui lòng nhập số điện thoại !' },
                                { pattern: REGEX.PHONE_NUMBER_REGEX, message: 'Biểu thức không hợp lệ!' },
                            ]}
                        >
                            <Col span={24}>
                                <input
                                    placeholder="Số điện thoại!"
                                    style={{
                                        width: '100%',
                                        height: '35px',
                                        borderRadius: '10px',
                                        padding: '10px 10px ',
                                    }}
                                />
                            </Col>
                        </Form.Item>
                    ) : (
                        <Form.Item
                            name="info"
                            rules={[
                                { required: true, message: 'Vui lòng nhập email !' },
                                { pattern: REGEX.EMAIL_REGEX, message: 'Biểu thức không hợp lệ!' },
                            ]}
                        >
                            <Col span={24}>
                                <input
                                    placeholder="Email!"
                                    style={{
                                        width: '100%',
                                        height: '35px',
                                        borderRadius: '10px',
                                        padding: '10px 10px ',
                                    }}
                                />
                            </Col>
                        </Form.Item>
                    )}
                </Row>
                <Row gutter={16}>
                    <Col span={24}>
                        <Form.Item rules={[{ required: true, message: 'Vui lòng nhập mã xác nhậnnhận !' }]}>
                            <Input.Group compact>
                                <Input
                                    style={{
                                        width: 'calc(100% - 79px)',
                                        border: '2px solid black',
                                        height: '37px',
                                        borderTopLeftRadius: '10px',
                                        borderBottomLeftRadius: '10px',
                                        padding: '10px 10px ',
                                        textAlign: 'left',
                                    }}
                                    placeholder="Nhập mã xác nhận!"
                                />
                                <Button
                                    type="primary"
                                    style={{
                                        background: 'rgb(117, 112, 112)',
                                        borderTopRightRadius: '10px',
                                        borderBottomRightRadius: '10px',
                                        height: '37px',
                                    }}
                                >
                                    Gửi mã
                                </Button>
                            </Input.Group>
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
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
                    </Col>
                </Row>
                <Row style={{ bottom: '0px' }}>
                    <Col span={24}>
                        <p style={{ textAlign: 'center', fontSize: '12px' }}>
                            Bằng cách đăng nhập bạn đồng ý với
                            <span style={{ fontWeight: 800 }}> Điều khoản sử dụng</span> của tiktok và xác nhận rằng bạn
                            đã đọc hiểu <span style={{ fontWeight: 800 }}>Chính sách quyền riêng tư</span> của tiktok.
                        </p>
                    </Col>
                </Row>
            </Form>
        </div>
    );
}
