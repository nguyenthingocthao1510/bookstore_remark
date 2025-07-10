import { EyeInvisibleOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
import React, { ChangeEvent, useState } from "react";

type Props = {
  value: any;
  size?: "small" | "middle" | "large";
  onChange?: (e: any) => void;
  disabled?: boolean;
  placeholder: string;
  name: string;
  allowClear?: boolean;
  style?: React.CSSProperties;
};

const PasswordInput = ({
  value,
  size,
  onChange,
  disabled,
  placeholder,
  name,
  allowClear,
  style,
}: Props) => {
  const onHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e);
  };

  return (
    <>
      <Space direction="vertical" style={{ width: "100%" }}>
        <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
          <Input.Password
            id={name}
            name={name}
            placeholder={placeholder ?? "Input"}
            size={size}
            onChange={onHandleChange}
            value={value}
            disabled={disabled}
            allowClear={allowClear}
            style={style}
          ></Input.Password>
        </div>
      </Space>
    </>
  );
};

export default PasswordInput;
