import { Layout } from "antd";
import { HeaderComponent } from "./component/header";
import { FooterComponent } from "./component/footer";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: Props) => {
  return (
    <Layout className="w-full h-full">
      <HeaderComponent />
      <div className="flex-1 bg-[#f5f5f5]">{children}</div>
      <FooterComponent />
    </Layout>
  );
};
