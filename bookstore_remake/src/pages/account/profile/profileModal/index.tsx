import { FormOutlined } from "@ant-design/icons";
import { Button, Input, Select } from "antd";
import React, { useState } from "react";

type FieldType = "input" | "select";

interface ProfileModalProps {
  label: string;
  value: string;
  onChange: (val: string) => void;
  onSave: () => void;
  type?: FieldType;
  options?: { label: string; value: string }[];
}

export const ProfileModal = ({
  label,
  value,
  onChange,
  onSave,
  type = "input",
  options = [],
}: ProfileModalProps) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    setIsEditing(false);
    onSave();
  };

  return (
    <div className="flex flex-row w-full items-center mt-2">
      <p className="text-[#BD7C89] font-bold w-32">{label}</p>
      {isEditing ? (
        <div className="flex gap-3 mx-5">
          {type === "input" ? (
            <Input
              value={value}
              onChange={(e) => onChange(e.target.value)}
              className="w-64"
            />
          ) : (
            <Select
              className="w-64"
              value={value}
              onChange={(val) => onChange(val)}
              options={options}
            />
          )}
          <Button type="primary" onClick={handleSave}>
            Save
          </Button>
        </div>
      ) : (
        <div className="flex items-center justify-between mx-5 border-b border-b-[#FBA1B3] w-64">
          <p className="text-[#BD7C89]">{value}</p>
          <Button
            icon={<FormOutlined />}
            onClick={() => setIsEditing(true)}
            className="mb-1 !pl-5 border-none text-red-500"
          />
        </div>
      )}
    </div>
  );
};
