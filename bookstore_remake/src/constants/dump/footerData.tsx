import {
  MessageOutlined,
  PhoneOutlined,
  ReconciliationOutlined,
} from "@ant-design/icons";

type contactComponentType = {
  label: string;
  key: string;
  icon?: React.ReactNode;
};

const contactComponent: contactComponentType[] = [
  {
    label: "60-62 Lê Lợi, Q.1, TP. HCM",
    key: "store-address",
    icon: <ReconciliationOutlined />,
  },
  {
    label: "0989034402",
    key: "phone-number",
    icon: <PhoneOutlined />,
  },
  {
    label: "https://www.facebook.com",
    key: "facebook-contact",
    icon: <MessageOutlined />,
  },
];

const serviceComponent = [
  {
    label: "Term of use",
    key: "term-of-use",
  },
  {
    label: "Privacy policy of personal information",
    key: "privacy-policy-of-personal-information",
  },
  {
    label: "Payment Privacy Policy",
    key: "payment-privacy-policy",
  },
  {
    label: "About us",
    key: "about-us",
  },
  {
    label: "Central system - bookstore",
    key: "Central-system-bookstore",
  },
];

const supportComponent = [
  {
    label: "Exchange - return - refund policy",
    key: "exchange-return-refund-policy",
  },
  {
    label: "Warranty - refund policy",
    key: "warranty-refund-policy",
  },
  {
    label: "Shipping Policy",
    key: "shipping-policy",
  },
  {
    label: "Wholesale customer policy",
    key: "wholesale-customer-policy",
  },
  {
    label: "Payment method and contact release",
    key: "payment-method-and-contact-release",
  },
];

const accountComponent = [
  {
    label: "Change customer address",
    key: "change-customer-address",
  },
  {
    label: "Login/Create a new account",
    key: "login-create-account",
  },
  {
    label: "Account details",
    key: "account-details",
  },
  {
    label: "Purchase history",
    key: "purchase-history",
  },
];

export {
  contactComponent,
  serviceComponent,
  supportComponent,
  accountComponent,
};
