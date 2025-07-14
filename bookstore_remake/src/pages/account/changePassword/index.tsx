import { Button, Divider, notification } from "antd";
import { useState } from "react";
import { PasswordModal } from "./passwordModal";

export const ChangePasswordPage = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [api, contextHolder] = notification.useNotification();

  const handleSubmit = () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      return api.error({ message: "All fields are required." });
    }

    if (currentPassword === newPassword) {
      return api.error({
        message: "New password must be different from current password.",
      });
    }

    if (newPassword !== confirmPassword) {
      return api.error({
        message: "Confirm password does not match.",
      });
    }

    api.success({
      message: "Password updated successfully",
      description: "Your password has been changed.",
    });

    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="bg-white p-6 rounded-md shadow-md">
      {contextHolder}
      <h2 className="text-xl font-semibold text-[#FBA1B3]">Change Password</h2>
      <Divider />

      <PasswordModal
        label="Current Password"
        value={currentPassword}
        onChange={setCurrentPassword}
      />
      <PasswordModal
        label="New Password"
        value={newPassword}
        onChange={setNewPassword}
      />
      <PasswordModal
        label="Confirm Password"
        value={confirmPassword}
        onChange={setConfirmPassword}
      />

      <div className="mt-6 flex justify-end">
        <Button type="primary" onClick={handleSubmit}>
          Save
        </Button>
      </div>
    </div>
  );
};
