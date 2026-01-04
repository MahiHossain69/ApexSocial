import React from "react";
import StepTitle from "../../StepTitle";
import FormField from "@/components/ui/formField";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Country } from "country-state-city";
import PhoneInput from "@/components/ui/phoneInput";

const EmergencyContactBlock = ({
  formData,
  errors,
  handleChange,
  handleSelectChange,
  handlePhoneChange,
}) => {
  return (
    <div className="cardShadow p-4 md:p-6  border border-soft-200 rounded-[12px] bg-white">
      <StepTitle
        className="!font-inter !text-[20px] !font-semibold "
        title={`Emergency Contact`}
      />
      <hr className="border-soft-200 mt-5" />

      <div className="mt-5">
        {/* Form fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <FormField
            id="ECfirstName"
            label="First Name"
            required
            error={errors.ECfirstName}
            className="font-inter font-medium text-sm"
          >
            <Input
              id="ECfirstName"
              placeholder="Type Here..."
              required
              className=" h-10 placeholder:text-soft-400 text-sm font-inter font-normal"
              value={formData["ECfirstName"]}
              onChange={handleChange}
            />
          </FormField>
          <FormField
            id="EClastName"
            label="Last Name"
            required
            error={errors.EClastName}
            className="font-inter font-medium text-sm"
          >
            <Input
              id="EClastName"
              placeholder="Type Here..."
              required
              className=" h-10 placeholder:text-soft-400 text-sm font-inter font-normal"
              value={formData["EClastName"]}
              onChange={handleChange}
            />
          </FormField>
          <FormField
            id="ECemail"
            label="Email"
            required
            error={errors.ECemail}
            className="font-inter font-medium text-sm"
          >
            <Input
              id="ECemail"
              placeholder="Type Here..."
              required
              className=" h-10 placeholder:text-soft-400 text-sm font-inter font-normal"
              value={formData["ECemail"]}
              onChange={handleChange}
            />
          </FormField>
          <FormField
            id="ECprofession"
            label="Profession"
            required
            error={errors.ECprofession}
            className="font-inter font-medium text-sm"
          >
            <Select
              value={formData["ECprofession"]}
              onValueChange={(value) =>
                handleSelectChange("ECprofession", value)
              }
            >
              <SelectTrigger
                id="ECprofession"
                className="w-full !h-10 placeholder:text-soft-400 text-sm font-inter font-normal"
              >
                <SelectValue placeholder="Select Here" />
              </SelectTrigger>
              <SelectContent className="font-inter font-normal">
                <SelectItem value="teacher">Teacher</SelectItem>
                <SelectItem value="businessman">Businessman</SelectItem>
                <SelectItem value="salesman">Salesman</SelectItem>
              </SelectContent>
            </Select>
          </FormField>
          <FormField
            id="ECstreetAddress"
            label="Street Address"
            required
            error={errors.ECstreetAddress}
            className="font-inter font-medium text-sm"
          >
            <Input
              id="ECstreetAddress"
              placeholder="Type Here..."
              required
              className=" h-10 placeholder:text-soft-400 text-sm font-inter font-normal"
              value={formData["ECstreetAddress"]}
              onChange={handleChange}
            />
          </FormField>
          <FormField
            id="ECcity"
            label="City"
            required
            error={errors.ECcity}
            className="font-inter font-medium text-sm"
          >
            <Input
              id="ECcity"
              placeholder="Type Here..."
              required
              className=" h-10 placeholder:text-soft-400 text-sm font-inter font-normal"
              value={formData["ECcity"]}
              onChange={handleChange}
            />
          </FormField>
          <FormField
            id="ECpostalCode"
            label="Postal Code/ Zip Code"
            required
            error={errors.ECpostalCode}
            className="font-inter font-medium text-sm"
          >
            <Input
              id="ECpostalCode"
              placeholder="Type Here..."
              required
              className=" h-10 placeholder:text-soft-400 text-sm font-inter font-normal"
              value={formData["ECpostalCode"]}
              onChange={handleChange}
            />
          </FormField>
          <FormField
            id="ECstate"
            label="State"
            required
            error={errors.ECstate}
            className="font-inter font-medium text-sm"
          >
            <Input
              id="ECstate"
              placeholder="Type Here..."
              required
              className=" h-10 placeholder:text-soft-400 text-sm font-inter font-normal"
              value={formData["ECstate"]}
              onChange={handleChange}
            />
          </FormField>

          <FormField
            id="ECcountry"
            label="Country"
            required
            error={errors["ECcountry"]}
          >
            <Select
              value={formData["ECcountry"]}
              onValueChange={(value) => handleSelectChange("ECcountry", value)}
            >
              <SelectTrigger
                id="ECcountry"
                className="w-full !h-10 placeholder:text-soft-400 text-sm font-inter font-normal"
              >
                <SelectValue placeholder="Select Here" />
              </SelectTrigger>
              <SelectContent className="font-inter font-normal">
                {Country.getAllCountries().map((country) => (
                  <SelectItem
                    key={country.isoCode}
                    value={country.isoCode}
                    className="cursor-pointer"
                  >
                    {country.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormField>

          <FormField
            id="ECmobilePhone"
            label="Mobile Phone"
            required
            error={errors.ECmobilePhone}
          >
            <PhoneInput
              inputId="ECmobilePhone"
              placeholder="Type Here..."
              required
              className=" h-10 placeholder:text-soft-400 text-sm font-inter font-normal"
              value={formData.ECmobilePhone}
              onChange={(value) => handlePhoneChange("ECmobilePhone", value)}
            />
          </FormField>
          <FormField
            id="EChomePhone"
            label="Home Phone"
            required
            error={errors.EChomePhone}
          >
            <PhoneInput
              inputId="EChomePhone"
              placeholder="Type Here..."
              required
              className=" h-10 placeholder:text-soft-400 text-sm font-inter font-normal"
              value={formData.EChomePhone}
              onChange={(value) => handlePhoneChange("EChomePhone", value)}
            />
          </FormField>

          <FormField
            id="EClanguage"
            label="Language"
            required
            error={errors["EClanguage"]}
          >
            <Select
              value={formData["EClanguage"]}
              onValueChange={(value) => handleSelectChange("EClanguage", value)}
            >
              <SelectTrigger
                id="EClanguage"
                className="w-full !h-10 placeholder:text-soft-400 text-sm font-inter font-normal"
              >
                <SelectValue placeholder="Select Here" />
              </SelectTrigger>
              <SelectContent className="font-inter font-normal">
                <SelectItem value="english">English</SelectItem>
                <SelectItem value="spanish">Spanish</SelectItem>
                <SelectItem value="french">French</SelectItem>
                <SelectItem value="german">German</SelectItem>
                <SelectItem value="italian">Italian</SelectItem>
                <SelectItem value="portuguese">Portuguese</SelectItem>
                <SelectItem value="russian">Russian</SelectItem>
                <SelectItem value="chinese">Chinese</SelectItem>
                <SelectItem value="japanese">Japanese</SelectItem>
              </SelectContent>
            </Select>
          </FormField>
        </div>
      </div>
    </div>
  );
};

export default EmergencyContactBlock;
