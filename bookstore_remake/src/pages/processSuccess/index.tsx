import { ProcessSuccess } from "src/assets/icons";
import "./style.scss";
import { Content } from "antd/es/layout/layout";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

export const ProcessSuccessPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Content className="!bg-white m-5 rounded-xl h-full px-5 pt-5 pb-5">
        <div
          className="thank-you-container"
          style={{ backgroundImage: `url(${ProcessSuccess})` }}
        >
          <div className="thank-you-content">
            <h1 className="thank-you-title">Thank you</h1>
            <p className="thank-you-subtitle">for your purchase</p>
            <p className="thank-you-success">Order successfully !!</p>
            <p className="thank-you-note">
              Your order will be delivered as soon as possible
            </p>

            {/* Back button */}
            <Button
              className="thank-you-button mt-5"
              onClick={() => navigate("/homepage")}
            >
              Go back to Home
            </Button>
          </div>
        </div>
      </Content>
    </div>
  );
};
