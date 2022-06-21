import { Button, Result } from 'antd';
import { Link } from 'react-router-dom';
export default function NotFound() {
    return (
        <div>
            <Result
                status="404"
                title="404"
                subTitle="Xin lỗi trang bạn yêu cầu không tồn tại!"
                extra={
                    <Link to="/">
                        <Button type="primary">Trang chủ</Button>
                    </Link>
                }
            />
        </div>
    );
}
