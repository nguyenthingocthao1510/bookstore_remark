import { DollarOutlined, QuestionCircleOutlined } from "@ant-design/icons";
import { Button, Divider, Popconfirm } from "antd";

export const MyCoinPage = () => {
  return (
    <div className="bg-white p-6">
      <div>
        <h2 className="text-xl font-semibold text-[#FBA1B3]">My Coin</h2>
        <Divider className="border border-1 border-grey-400" />
      </div>
      <div className="flex flex-row items-center gap-4 text-[#FBA1B3]">
        <DollarOutlined className="text-4xl" />
        <p className="text-2xl">50 coins</p>
        <Popconfirm
          title={<p className="text-[#BD7C89]">How coins work</p>}
          placement="right"
          description={
            <p className="text-[#FBA1B3]">
              Every <strong className="text-[#BD7C89]">1000 coins</strong> can
              be used to reduce the price
              <br />
              1000 coins is equivalent to{" "}
              <strong className="text-[#BD7C89]">1.000 ₫</strong>
            </p>
          }
          icon={<QuestionCircleOutlined style={{ color: "#FBA1B3" }} />}
          okButtonProps={{ style: { display: "none" } }}
          cancelButtonProps={{ style: { display: "none" } }}
        >
          <Button
            icon={<QuestionCircleOutlined />}
            className="border-none -ml-3 text-[#FBA1B3] hover:!text-red-500"
            aria-label="Info about coin usage"
          />
        </Popconfirm>
      </div>
    </div>
  );
};
