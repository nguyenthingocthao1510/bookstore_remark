import { Button, Card, Typography, Space, Divider } from "antd";
import { useNavigate } from "react-router-dom";
import { LogoutOutlined, RollbackOutlined } from "@ant-design/icons";

export const LogoutPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  const handleCancel = () => {};

  return (
    <div>
      <div>
        <h2 className="text-xl font-semibold text-[#FBA1B3]">My Coin</h2>
        <Divider className="border border-1 border-grey-400" />
      </div>
      <div className="min-h-[60vh] flex justify-center items-center bg-red-100 rounded-xl">
        <Card
          bordered={false}
          style={{ width: 420 }}
          className="shadow-lg rounded-xl"
        >
          <Typography.Title level={4} className="text-center text-[#FBA1B3]">
            Do you want to logout?
          </Typography.Title>

          <Space className="flex justify-center mt-6">
            <Button
              type="primary"
              danger
              icon={<LogoutOutlined className="mb-1.5" />}
              onClick={handleLogout}
            >
              Yes, Logout
            </Button>
            <Button
              type="default"
              icon={<RollbackOutlined className="mb-1.5" />}
              onClick={handleCancel}
            >
              No, Go Back
            </Button>
          </Space>
        </Card>
      </div>
    </div>
  );
};
