"use client";

import { useState } from "react";
import { toast } from "sonner";

import { updatePassword } from "@/app/actions/security";
import PasswordField from "./PasswordField";
import Button from "@/components/ui/Button";

export default function ChangePasswordForm() {
  const [editing, setEditing] = useState(false);

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [loading, setLoading] = useState(false);

  const isValid =
    currentPassword.length > 0 &&
    newPassword.length >= 8 &&
    confirmPassword === newPassword;

  async function handleSave() {
    if (!isValid) return;

    setLoading(true);

    const result = await updatePassword(
      currentPassword,
      newPassword
    );

    setLoading(false);

    if (!result.success) {
      toast.error(result.error);
      return;
    }

    toast.success("Password updated successfully.");

    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");

    setEditing(false);
  }

  return (
    <div>

      {!editing ? (
        <button
          onClick={() => setEditing(true)}
          className="
            text-sm
            font-medium
            text-pink-400
            transition
            hover:text-pink-300
          "
        >
          Change Password
        </button>
      ) : (
        <div className="space-y-6">

          <PasswordField
            label="Current Password"
            value={currentPassword}
            onChange={setCurrentPassword}
            visible={showCurrent}
            toggleVisible={() =>
              setShowCurrent(!showCurrent)
            }
            placeholder="Enter current password"
          />

          <PasswordField
            label="New Password"
            value={newPassword}
            onChange={setNewPassword}
            visible={showNew}
            toggleVisible={() =>
              setShowNew(!showNew)
            }
            placeholder="Enter new password"
          />

          {newPassword.length > 0 &&
            newPassword.length < 8 && (
              <p className="text-sm text-yellow-400">
                Password must contain at least 8 characters.
              </p>
            )}

          <PasswordField
            label="Confirm Password"
            value={confirmPassword}
            onChange={setConfirmPassword}
            visible={showConfirm}
            toggleVisible={() =>
              setShowConfirm(!showConfirm)
            }
            placeholder="Confirm new password"
          />

          {confirmPassword &&
            confirmPassword !== newPassword && (
              <p className="text-sm text-red-400">
                Passwords do not match.
              </p>
            )}

          <div className="flex justify-end gap-5">

            <Button
            variant="ghost"
            onClick={() => {
                setEditing(false);
                setCurrentPassword("");
                setNewPassword("");
                setConfirmPassword("");
            }}
            >
                Cancel
            </Button>

            <Button
            variant="ghost"
            disabled={!isValid || loading}
            onClick={handleSave}
            >
            {loading ? "Updating..." : "Save"}
            </Button>

          </div>

        </div>
      )}

    </div>
  );
}