import React, { ChangeEvent, useState } from "react";
import { Button, Flex, Row, Typography } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { isPhoneNumber, yubObject } from "src/utils/validate";
import * as Yup from "yup";

import "./style.scss";
import {
  BookStoreLogo,
  RegisterIcon,
  RegisterIconHover,
  LoginIcon,
  LoginIconHover,
} from "src/assets/icons";

import { InputProps } from "src/components/Form/FormItem";
import { TYPE_FIELD } from "src/constants/enum/common";
import InputFields from "src/components/Form/FormItem/InputFields";
import { TLogin } from "src/constants/types/loginPage";
import { useFormik } from "formik";

type IconPosition = "start" | "end";

export interface IconProp {
  label: string;
  icon: React.ElementType;
  position: IconPosition;
  navigate: string;
  className?: string;
  hoverIcon?: React.ElementType;
}

export const LoginPage = () => {
  const [isLogin, setIsLogin] = useState<boolean>();
  const [isLoadingLogin, setIsLoadingLogin] = useState<boolean>(false);
  const [hint, setHint] = useState<string>("");
  const [formValues, setFormValues] = useState<Record<string, string>>({});

  const username = "0381234567";
  const password = "12345678x@X";

  const navigate = useNavigate();
  const location = useLocation();

  const formSchema = yubObject({
    phone_number: isPhoneNumber,
    password: Yup.string().required("Please enter password").nullable(),
  });

  const defaultValue: TLogin = {
    phone_number: "",
    password: "",
  };

  const formControl = useFormik<TLogin>({
    initialValues: defaultValue,
    validationSchema: formSchema,
    onSubmit: async (data: TLogin) => {
      setIsLoadingLogin(true);
      try {
        if (data.phone_number === username && data.password === password) {
          setIsLogin(true);
          navigate("/homepage");
        } else {
          setIsLogin(false);
          setHint(`Phone number: ${username} and password: ${password}`);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoadingLogin(false);
      }
    },
  });

  const Icons: IconProp[] = [
    {
      label: "Login",
      icon: LoginIconHover,
      position: "start",
      navigate: "/login",
      className: "userIcon",
      hoverIcon: LoginIcon,
    },
    {
      label: "Register",
      icon: RegisterIconHover,
      position: "start",
      navigate: "/register",
      className: "registerIcon",
      hoverIcon: RegisterIcon,
    },
  ];

  const [isHoverIcon, setIsHoverIcon] = useState<boolean[]>(
    Icons.map(() => false)
  );

  const handleHover = (index: number, value: boolean) => {
    setIsHoverIcon((prev) => {
      const updated = [...prev];
      updated[index] = value;
      return updated;
    });
  };

  const onHandleChange = (key: string, value: string) => {
    setFormValues((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const InputLoginForm: InputProps[] = [
    {
      name: "phone_number",
      value: formControl.values.phone_number,
      allowClear: true,
      type: TYPE_FIELD.TEXT,
      placeholder: "Phone number",
      label: "Phone number",
      style: { marginTop: "10px", width: "100%", height: "100%" },
      onChange: (e: ChangeEvent<HTMLInputElement>) => {
        onHandleChange("phone_number", e.target.value);
      },
    },
    {
      name: "password",
      value: formControl.values.password,
      allowClear: true,
      type: TYPE_FIELD.PASSWORD,
      placeholder: "Password",
      label: "Password",
      style: { marginTop: "10px", width: "100%", height: "100%" },
      onChange: (e: ChangeEvent<HTMLInputElement>) => {
        onHandleChange("password", e.target.value);
      },
    },
  ];

  return (
    <Flex
      vertical
      className="min-h-screen bg-gradient-to-t from-[#ffcbad] via-[#ffadb9] to-[#c2e3ea] p-6"
    >
      {/* Logo */}
      <Flex justify="center" className="mb-6">
        <img src={BookStoreLogo} className="w-48" alt="bookstore-logo" />
      </Flex>

      {/* Login Box */}
      <Flex justify="center">
        <div className="bg-white rounded-xl shadow-md px-10 py-8 w-full max-w-md">
          {/* Navigation Buttons */}
          <Flex justify="space-between" className="mb-3">
            {Icons.map((icon, index) => {
              const isActive = location.pathname === icon.navigate;

              const IconComponent = isActive
                ? isHoverIcon[index] && icon.icon
                  ? icon.icon
                  : icon.hoverIcon
                : isHoverIcon[index] && icon.hoverIcon
                ? icon.hoverIcon
                : icon.icon;

              return (
                <Button
                  key={icon.label}
                  type="primary"
                  icon={
                    IconComponent && (
                      <IconComponent className={icon.className} />
                    )
                  }
                  iconPosition={icon.position}
                  onClick={() => navigate(icon.navigate)}
                  className={`mx-2 w-full h-12 rounded-xl ${
                    isActive
                      ? "bg-red-300 text-white hover:!bg-white hover:!text-red-500"
                      : "bg-white text-red-500 border border-red-400 hover:!bg-red-300 hover:!text-white"
                  }`}
                  onMouseEnter={() => handleHover(index, true)}
                  onMouseLeave={() => handleHover(index, false)}
                >
                  {icon.label}
                </Button>
              );
            })}
          </Flex>

          {/* Error Hint */}
          <Row>
            {isLogin === false && (
              <Typography.Text type="danger" className="pl-3">
                {hint}
              </Typography.Text>
            )}
          </Row>

          {/* Input Fields */}
          <InputFields
            inputs={InputLoginForm}
            gutter={[0, 12]}
            isHorizontal={false}
            span={{ sm: 24 }}
            form={formControl}
          />

          {/* Forgot Password Link */}
          <Flex justify="end" className="mt-2">
            <Button
              type="link"
              className="!text-red-500 hover:!text-blue-400 px-0"
              onClick={() => navigate("/forgot-password")}
            >
              Forgot your password?
            </Button>
          </Flex>

          {/* Login Button */}
          <Button
            loading={isLoadingLogin}
            onClick={() => formControl.handleSubmit()}
            className="mt-4 w-full h-12 rounded-xl font-semibold text-white 
              bg-gradient-to-l from-[#FF7F99] via-[#BABBCF] to-[#81EDFC] 
              hover:!bg-gradient-to-l 
              hover:!from-[#FBB8AC] 
              hover:!via-[#D1CFE2] 
              hover:!to-[#A0DDE6]
              hover:!text-white hover:!border-[transparent]"
          >
            LOGIN
          </Button>
        </div>
      </Flex>
    </Flex>
  );
};
