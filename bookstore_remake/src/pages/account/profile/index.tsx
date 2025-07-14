import { FormOutlined } from "@ant-design/icons";
import { Button, Divider, Input, notification } from "antd";
import React, { useState } from "react";
import { ProfileModal } from "./profileModal";

export const ProfilePage = () => {
  const [name, setName] = useState("ntnthao15102002");
  const [phoneNumber, setPhoneNumber] = useState("0381234567");
  const [dob, setDob] = useState("15/10/2002");
  const [gender, setGender] = useState<"Male" | "Female" | "Other">("Female");
  const [city, setCity] = useState("TPHCM");
  const [district, setDistrict] = useState("12");
  const [ward, setWard] = useState("TTN");

  const [api, contextHolder] = notification.useNotification();

  const showSuccess = () => {
    api.success({
      message: "Save successfully",
      description: "Your saving was processed successfully.",
    });
  };

  return (
    <div className="bg-white p-6 rounded-md shadow-md">
      {contextHolder}

      <div>
        <h2 className="text-xl font-semibold text-[#FBA1B3]">My Profile</h2>
        <Divider className="border border-1 border-grey-400" />
      </div>

      <ProfileModal
        label="Name"
        value={name}
        onChange={setName}
        onSave={showSuccess}
      />
      <ProfileModal
        label="Phone number"
        value={phoneNumber}
        onChange={setPhoneNumber}
        onSave={showSuccess}
      />
      <ProfileModal
        label="Date of Birth"
        value={dob}
        onChange={setDob}
        onSave={showSuccess}
      />
      <ProfileModal
        label="Gender"
        value={gender}
        onChange={(val) => setGender(val as "Male" | "Female" | "Other")}
        onSave={showSuccess}
        type="select"
        options={[
          { label: "Male", value: "male" },
          { label: "Female", value: "female" },
          { label: "Other", value: "other" },
        ]}
      />
      <div className="flex flex-row mt-5">
        <p className="text-[#BD7C89] font-bold">Address</p>
        <div className="ml-5 -mt-3.5">
          <ProfileModal
            label="City"
            value={city}
            onChange={setCity}
            onSave={showSuccess}
          />
          <ProfileModal
            label="District"
            value={district}
            onChange={setDistrict}
            onSave={showSuccess}
          />
          <ProfileModal
            label="Ward"
            value={ward}
            onChange={setWard}
            onSave={showSuccess}
          />
        </div>
      </div>
    </div>
  );
};
