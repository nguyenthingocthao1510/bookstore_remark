import { Input } from "antd";
import React from "react";

interface Props {
  label: string;
  value: string;
  onChange: (val: string) => void;
}

export const PasswordModal = ({ label, value, onChange }: Props) => {
  return (
    <div className="flex flex-row w-full items-center mt-4">
      <label className="text-[#BD7C89] font-bold w-40">{label}</label>
      <Input.Password
        className="w-64"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};
