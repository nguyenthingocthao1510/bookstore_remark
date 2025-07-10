import React, { ChangeEvent, useCallback, useEffect, useState } from "react";
import { InputProps } from "..";
import { Input, Space, Typography } from "antd";

const TextInput = ({
  value,
  name,
  type,
  size,
  placeholder,
  addonBefore,
  addonAfter,
  allowClear,
  disabled,
  className,
  suffixIcon,
  prefix,
  onKeyDown,
  onChange,
  style,
}: InputProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e);
  };

  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
        <Input
          id={name}
          name={name}
          type={type}
          size={size}
          value={value}
          onChange={handleChange}
          onKeyDown={onKeyDown}
          spellCheck={false}
          placeholder={placeholder ?? "Input"}
          addonAfter={addonAfter}
          addonBefore={addonBefore}
          allowClear={allowClear}
          disabled={disabled}
          className={className}
          suffix={suffixIcon}
          prefix={prefix}
          style={style}
        />
      </div>
    </Space>
  );
};

export default TextInput;
