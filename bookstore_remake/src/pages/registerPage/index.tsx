import { TRegister } from "src/constants/types/register";
import "./style.scss";
import { useFormik } from "formik";
import { isPhoneNumber, yubObject } from "src/utils/validate";
import * as Yup from "yup";
import { ChangeEvent, useState } from "react";
import { TYPE_FIELD } from "src/constants/enum/common";
import { InputProps } from "src/components/Form/FormItem";
import { Button, Flex } from "antd";
import {
  BookStoreLogo,
  LoginIcon,
  LoginIconHover,
  RegisterIcon,
  RegisterIconHover,
} from "src/assets/icons";
import { IconProp } from "../loginPage";
import { useLocation, useNavigate } from "react-router-dom";
import InputFields from "src/components/Form/FormItem/InputFields";

export const RegisterPage = () => {
  const [formValues, setFormValues] = useState<Record<string, string>>({});

  const navigate = useNavigate();
  const location = useLocation();

  const defaultValues: TRegister = {
    phone_number: "",
    password: "",
    confirm_password: "",
  };

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

  const formSchema = yubObject({
    phone_number: isPhoneNumber,
    password: Yup.string().required("Please enter password").nullable(),
    confirm_password: Yup.string()
      .required("Please confirm your password")
      .nullable(),
  });

  const formControl = useFormik<TRegister>({
    initialValues: defaultValues,
    validationSchema: formSchema,
    onSubmit: async (data: TRegister) => {
      try {
        if (data.password !== data.confirm_password) {
          alert("Password and confirm password do not match");
          return;
        }
      } catch (error) {
        console.log("Error!", error);
      }
    },
  });

  const onHandleChange = (key: string, value: string) => {
    setFormValues((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleHover = (index: number, isHover: boolean) => {
    setIsHoverIcon((prev) => {
      const updated = [...prev];
      updated[index] = isHover;
      return updated;
    });
  };

  const inputRegisterForm: InputProps[] = [
    {
      name: "phone_number",
      label: "Phone Number",
      placeholder: "Enter your phone number",
      value: formControl.values.phone_number,
      allowClear: true,
      type: TYPE_FIELD.TEXT,
      onChange: (e: ChangeEvent<HTMLInputElement>) => {
        onHandleChange("phone_number", e.target.value);
      },
      style: { marginTop: "10px", width: "100%", height: "100%" },
    },
    {
      name: "password",
      label: "Password",
      placeholder: "Enter your password",
      value: formControl.values.password,
      allowClear: true,
      type: TYPE_FIELD.PASSWORD,
      onChange: (e: ChangeEvent<HTMLInputElement>) => {
        onHandleChange("password", e.target.value);
      },
      style: { marginTop: "10px", width: "100%", height: "100%" },
    },
    {
      name: "confirm_password",
      label: "Confirm password",
      placeholder: "Enter your confirm password",
      value: formControl.values.confirm_password,
      allowClear: true,
      type: TYPE_FIELD.PASSWORD,
      onChange: (e: ChangeEvent<HTMLInputElement>) => {
        onHandleChange("confirm_password", e.target.value);
      },
      style: { marginTop: "10px", width: "100%", height: "100%" },
    },
  ];
  return (
    <Flex
      vertical={false}
      justify="center"
      align="center"
      className="min-h-screen bg-gradient-to-t from-[#ffcbad] via-[#ffadb9] to-[#c2e3ea] p-6 overflow-y-auto"
    >
      <Flex justify="center" className="mr-20">
        <img src={BookStoreLogo} className="w-64 h-64" alt="bookstore-logo" />
      </Flex>

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

          {/* Input Fields */}
          <InputFields
            inputs={inputRegisterForm}
            gutter={[0, 12]}
            isHorizontal={false}
            span={{ sm: 24 }}
            form={formControl}
          />

          {/* Register Button */}
          <Button
            onClick={() => formControl.handleSubmit()}
            className="mt-5 w-full h-12 rounded-xl font-semibold text-white 
              bg-gradient-to-l from-[#FF7F99] via-[#BABBCF] to-[#81EDFC] 
              hover:!bg-gradient-to-l 
              hover:!from-[#FBB8AC] 
              hover:!via-[#D1CFE2] 
              hover:!to-[#A0DDE6]
              hover:!text-white hover:!border-[transparent]"
          >
            REGISTER
          </Button>
        </div>
      </Flex>
    </Flex>
  );
};
