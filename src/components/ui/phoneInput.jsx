import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import PropTypes from "prop-types";

// Country list
const countries = [
  { name: "United States", code: "+1", class: "fi-us" },
  { name: "United Kingdom", code: "+44", class: "fi-gb" },
  { name: "Bangladesh", code: "+880", class: "fi-bd" },
];

const PhoneInput = ({ inputId, value, onChange, disabled = false }) => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (value) {
      const foundCountry = countries.find((c) => value.startsWith(c.code));
      if (foundCountry) {
        setSelectedCountry(foundCountry);
        setPhone(value.substring(foundCountry.code.length).trim());
      } else {
        setSelectedCountry(countries[0]);
        setPhone(value);
      }
    } else {
      setPhone("");
    }
  }, [value]);

  const handleCountryChange = (code) => {
    const country = countries.find((c) => c.code === code);
    if (country) {
      setSelectedCountry(country);
      onChange(code + phone.trim());
    }
  };

  const handlePhoneChange = (e) => {
    const newPhone = e.target.value.replace(/[^\d\s+-]/g, "");
    setPhone(newPhone);
    onChange(selectedCountry.code + newPhone);
  };

  return (
    <div
      className={`flex items-center w-full border rounded-md px-2 py-1 shadow-xs h-10 ${
        disabled ? "opacity-50" : ""
      }`}
    >
      {/* ShadCN Select showing only flag in trigger */}
      <Select
        value={selectedCountry.code}
        onValueChange={handleCountryChange}
        disabled={disabled}
      >
        <SelectTrigger className=" px-2 justify-center border-none shadow-none">
          {/* Show only the flag icon */}
          <span className={`fi ${selectedCountry.class} `} />
        </SelectTrigger>
        <SelectContent className="-translate-x-2">
          {countries.map((country) => (
            <SelectItem
              key={country.code}
              value={country.code}
              className="cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <span className={`fi ${country.class}`} />
                {country.name} ({country.code})
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Phone number input */}
      <Input
        id={inputId}
        type="tel"
        value={phone}
        onChange={handlePhoneChange}
        placeholder="Type Here..."
        disabled={disabled}
        className="border-none shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-muted-foreground text-sm"
        aria-label="Phone number"
      />
    </div>
  );
};

PhoneInput.propTypes = {
  inputId: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

export default PhoneInput;
