"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import SideBar from "@/components/SideBar/SideBar";
import { cn } from "@/lib/utils";
import { SaveIcon } from "lucide-react";
import { toast } from "sonner";

const Settings = () => {
  // on toggle the sidebar will be smaller and bigger state
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // state for handling mobile sidebar
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    setIsMobileSidebarOpen(false);
  };

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setIsMobileSidebarOpen(false);
    } else {
      setIsMobileSidebarOpen(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const validatePassword = (pass) => {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return re.test(pass);
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));

    if (errors[id]) {
      setErrors((prev) => ({ ...prev, [id]: "" }));
    }
  };

  const validateProfileForm = () => {
    let valid = true;
    const newErrors = { ...errors };

    // Validate firstName
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
      valid = false;
    } else {
      newErrors.firstName = "";
    }

    // Validate lastName
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
      valid = false;
    } else {
      newErrors.lastName = "";
    }

    // Validate email
    if (!formData.email) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      valid = false;
    } else {
      newErrors.email = "";
    }

    setErrors(newErrors);
    return valid;
  };

  const validatePasswordForm = () => {
    let valid = true;
    const newErrors = { ...errors };

    // Validate currentPassword
    if (!formData.currentPassword) {
      newErrors.currentPassword = "Current password is required";
      valid = false;
    } else {
      newErrors.currentPassword = "";
    }

    // Validate newPassword
    if (!formData.newPassword) {
      newErrors.newPassword = "New password is required";
      valid = false;
    } else if (!validatePassword(formData.newPassword)) {
      newErrors.newPassword =
        "Password must be at least 8 characters with 1 uppercase, 1 lowercase, and 1 number";
      valid = false;
    } else {
      newErrors.newPassword = "";
    }

    // Validate confirmPassword
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
      valid = false;
    } else if (formData.newPassword !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      valid = false;
    } else {
      newErrors.confirmPassword = "";
    }

    setErrors(newErrors);
    return valid;
  };

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    if (validateProfileForm()) {
      const profileData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
      };
      console.log("Profile information updated successfully:", profileData);
      // Profile update logic here
      toast.success("Profile information updated successfully!");
    }
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (validatePasswordForm()) {
      const passwordData = {
        currentPassword: formData.currentPassword,
        newPassword: formData.newPassword,
      };
      console.log("Password updated successfully:", passwordData);
      // Password update logic here
      toast.success("Password updated successfully!");

      // Clear password fields after successful update
      setFormData((prev) => ({
        ...prev,
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      }));
    }
  };

  return (
    <div className="container_fluid">
      <div className="flex lg:gap-6">
        <div
          className={cn(
            "w-full transition-width duration-300",
            isSidebarOpen ? "md:w-72 lg:w-80" : "w-18"
          )}
        >
          <SideBar
            isSidebarOpen={isSidebarOpen}
            toggleSidebar={toggleSidebar}
            isMobileSidebarOpen={isMobileSidebarOpen}
          />
        </div>

        <section className="px-4 w-full">
          <div className="max-w-[984px] mx-auto mt-[30px]">
            <div className="pb-14 ">
              {/* <h2 className="text-2xl font-semibold">My Account</h2>
              <p className="text-sm text-muted-foreground mb-6">
                Update your profile information and password
              </p> */}

              

              <Card className={`p-6 border border-soft-200 cardShadow mt-6`}>
                <CardContent className="space-y-5 p-0">
                  <div>
                    <p className="text-gray-900 font-inter font-semibold text-lg leading-7">
                      Update Password
                    </p>
                    <p className="text-sm text-[#000000] font-inter font-normal leading-5 mt-5">
                      Ensure your account is using a long, random password to
                      stay secure.
                    </p>
                  </div>

                  <div className="space-y-6">
                    {/* Current Password */}
                    <div className="space-y-2">
                      <Label className={`w-fit`} htmlFor="currentPassword">
                        Current Password
                        <span className="text-destructive">*</span>
                      </Label>

                      <Input
                        id="currentPassword"
                        type="password"
                        placeholder="Type Here..."
                        required
                        value={formData.currentPassword}
                        onChange={handleChange}
                      />

                      {errors.currentPassword && (
                        <p className="text-sm text-destructive">
                          {errors.currentPassword}
                        </p>
                      )}
                    </div>

                    {/* New Password */}
                    <div className="space-y-2">
                      <Label className={`w-fit`} htmlFor="newPassword">
                        New Password<span className="text-destructive">*</span>
                      </Label>

                      <Input
                        id="newPassword"
                        type="password"
                        placeholder="Type Here..."
                        required
                        value={formData.newPassword}
                        onChange={handleChange}
                      />

                      {errors.newPassword && (
                        <p className="text-sm text-destructive">
                          {errors.newPassword}
                        </p>
                      )}
                    </div>

                    {/* Confirm Password */}
                    <div className="space-y-2">
                      <Label className={`w-fit`} htmlFor="confirmPassword">
                        Confirm Password
                        <span className="text-destructive">*</span>
                      </Label>

                      <Input
                        id="confirmPassword"
                        type="password"
                        placeholder="Type Here..."
                        required
                        value={formData.confirmPassword}
                        onChange={handleChange}
                      />

                      {errors.confirmPassword && (
                        <p className="text-sm text-destructive">
                          {errors.confirmPassword}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-4 w-full justify-end font-inter text-sm leading-5 font-semibold">
                    <Button
                      type="button"
                      onClick={handlePasswordSubmit}
                      className="mt-2 p-2.5 bg-[#45B5AA] hover:bg-[#00897C] duration-300"
                    >
                      <SaveIcon /> Save
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Settings;
