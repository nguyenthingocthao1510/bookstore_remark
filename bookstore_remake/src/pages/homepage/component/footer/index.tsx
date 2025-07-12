import {
  CreditCardOutlined,
  DollarOutlined,
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import { Footer } from "antd/es/layout/layout";
import "./style.scss";

import {
  accountComponent,
  contactComponent,
  serviceComponent,
  supportComponent,
} from "src/constants/dump/footerData";

export const FooterComponent = () => {
  return (
    <Footer
      style={{ textAlign: "center" }}
      className="w-full px-0 pt-4 pb-0 h-full"
    >
      {/* Top Section */}
      <div className="flex justify-between bg-[#fdd7de] px-8 py-4">
        {/* Service Section */}
        <div className="flex flex-col">
          <Button className="w-1/3 service-btn">SERVICE</Button>
          <div className="flex flex-col service-cpn">
            {serviceComponent.map((item, index) => (
              <Button key={index} href={`/${item.key}`}>
                {item.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Support Section */}
        <div className="flex flex-col">
          <Button className="w-1/2 support-btn">SUPPORT</Button>
          <div className="flex flex-col support-cpn">
            {supportComponent.map((item, index) => (
              <Button key={index} href={`/${item.key}`}>
                {item.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Account Section */}
        <div className="flex flex-col">
          <Button className="w-32 account-btn">MY ACCOUNT</Button>
          <div className="flex flex-col account-cpn">
            {accountComponent.map((item, index) => (
              <Button key={index} href={`/${item.key}`}>
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full h-auto bg-white pt-4 pb-8 px-8">
        <div className="flex flex-row justify-between w-1/3">
          {/* Contact Section */}
          <div className="flex flex-col">
            <Button className="w-1/2 contact-btn">CONTACT</Button>
            <div className="flex flex-col contact-cpn">
              {contactComponent.map((item, index) => (
                <Button icon={item.icon} key={index} href={`/${item.key}`}>
                  {item.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Payment Section */}
          <div className="flex flex-col">
            <Button className="w-32 payment-btn">PAYMENT</Button>
            <div className="flex flex-row pt-2 icons-cpn">
              <Button icon={<DollarOutlined />} className="!mr-2" />
              <Button icon={<CreditCardOutlined />} />
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex flex-row pt-4 pb-2 w-64 h-12 social-cpn">
          <Button href="https://www.youtube.com/" icon={<YoutubeOutlined />} />
          <Button
            href="https://www.instagram.com/"
            icon={<InstagramOutlined />}
          />
          <Button
            href="https://www.facebook.com/"
            icon={<FacebookOutlined />}
          />
          <Button href="https://x.com/" icon={<TwitterOutlined />} />
        </div>
      </div>
    </Footer>
  );
};
