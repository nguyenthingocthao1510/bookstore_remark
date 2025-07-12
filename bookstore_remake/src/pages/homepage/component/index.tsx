import { theme } from "antd";
import { Content } from "antd/es/layout/layout";

interface Props {}

export const HomepagePage = (props: Props) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <div>
      <Content style={{ margin: "24px 16px 0" }}>
        <div
          style={{
            padding: 24,
            minHeight: 360,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          content
        </div>
      </Content>
    </div>
  );
};
