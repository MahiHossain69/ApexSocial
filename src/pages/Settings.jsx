"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import { useState } from "react";

const Settings = () => {
  const [password, setPassword] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [passwordErrors, setPasswordErrors] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const validatePassword = (pass) => {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return re.test(pass);
  };

  const handlePasswordChange = (e) => {
    const { id, value } = e.target;
    setPassword((prev) => ({ ...prev, [id]: value }));

    if (passwordErrors[id]) {
      setPasswordErrors((prev) => ({ ...prev, [id]: "" }));
    }
  };

  const validatePasswordForm = () => {
    let valid = true;
    const newErrors = {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    };

    if (!password.currentPassword) {
      newErrors.currentPassword = "Current password is required";
      valid = false;
    }

    if (!password.newPassword) {
      newErrors.newPassword = "New password is required";
      valid = false;
    } else if (!validatePassword(password.newPassword)) {
      newErrors.newPassword =
        "Password must be at least 8 characters with 1 uppercase, 1 lowercase, and 1 number";
      valid = false;
    }

    if (!password.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
      valid = false;
    } else if (password.newPassword !== password.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      valid = false;
    }

    setPasswordErrors(newErrors);
    return valid;
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (validatePasswordForm()) {
      console.log("Password form is valid, submitting...");
      // Form submission logic here
    }
  };

  return (
    <div className="max-w-[1300px] mx-auto px-4 py-8">
      <div className="pb-14 border-b border-[#e2e4e9]">
        <h2 className="text-2xl font-semibold">Profile Information</h2>
        <p className="text-sm text-muted-foreground mb-6">
          Update your account's profile information and email address.
        </p>

        <Card>
          <CardContent className="space-y-6 p-6">
            {/* First Name */}
            <div className="space-y-2">
              <Label htmlFor="firstName">
                First Name<span className="text-destructive">*</span>
              </Label>
              <div className="relative max-w-[610px] w-full">
                <Input id="firstName" placeholder="Joy" required />
                <Button
                  type="button"
                  variant="destructive"
                  className="absolute right-2 top-2 bottom-2 w-5 h-5 !p-0 flex items-center justify-center rounded-sm"
                >
                  <MoreHorizontal className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Last Name */}
            <div className="space-y-2">
              <Label htmlFor="lastName">
                Last Name<span className="text-destructive">*</span>
              </Label>
              <div className="relative max-w-[610px] w-full">
                <Input id="lastName" placeholder="Curth HF" required />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">
                Email<span className="text-destructive">*</span>
              </Label>
              <div className="relative max-w-[610px] w-full">
                <Input
                  id="email"
                  type="email"
                  placeholder="joy.curth+hf@apex-social.com"
                  required
                />
              </div>
            </div>

            <Button className="mt-2 py-3 px-11 bg-[#45B5AA] hover:bg-[#00897C] duration-300">
              Save
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Update Password */}
      <div className="pt-14">
        <h2 className="text-2xl font-semibold">Update Password</h2>
        <p className="text-sm text-muted-foreground mb-6">
          Ensure your account is using a long, random password to stay secure.
        </p>

        <Card>
          <CardContent className="space-y-6 p-6">
            <form className="space-y-6" onSubmit={handlePasswordSubmit}>
              {/* Current Password */}
              <div className="space-y-2">
                <Label htmlFor="currentPassword">
                  Current Password<span className="text-destructive">*</span>
                </Label>
                <div className="relative max-w-[610px] w-full">
                  <Input
                    id="currentPassword"
                    type="password"
                    placeholder="*********"
                    required
                    value={password.currentPassword}
                    onChange={handlePasswordChange}
                  />
                  <Button
                    type="button"
                    variant="destructive"
                    className="absolute right-2 top-2 bottom-2 w-5 h-5 !p-0 flex items-center justify-center rounded-sm"
                  >
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </div>
                {passwordErrors.currentPassword && (
                  <p className="text-sm text-destructive">
                    {passwordErrors.currentPassword}
                  </p>
                )}
              </div>

              {/* New Password */}
              <div className="space-y-2">
                <Label htmlFor="newPassword">
                  New Password<span className="text-destructive">*</span>
                </Label>
                <div className="relative max-w-[610px] w-full">
                  <Input
                    id="newPassword"
                    type="password"
                    placeholder="Type here..."
                    required
                    value={password.newPassword}
                    onChange={handlePasswordChange}
                  />
                  <Button
                    type="button"
                    variant="destructive"
                    className="absolute right-2 top-2 bottom-2 w-5 h-5 !p-0 flex items-center justify-center rounded-sm"
                  >
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </div>
                {passwordErrors.newPassword && (
                  <p className="text-sm text-destructive">
                    {passwordErrors.newPassword}
                  </p>
                )}
              </div>

              {/* Confirm Password */}
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">
                  Confirm Password<span className="text-destructive">*</span>
                </Label>
                <div className="relative max-w-[610px] w-full">
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="Type here..."
                    required
                    value={password.confirmPassword}
                    onChange={handlePasswordChange}
                  />
                  <Button
                    type="button"
                    variant="destructive"
                    className="absolute right-2 top-2 bottom-2 w-5 h-5 !p-0 flex items-center justify-center rounded-sm"
                  >
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </div>
                {passwordErrors.confirmPassword && (
                  <p className="text-sm text-destructive">
                    {passwordErrors.confirmPassword}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                className="mt-2 py-3 px-11 bg-[#45B5AA] hover:bg-[#00897C] duration-300"
              >
                Save
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Settings;
