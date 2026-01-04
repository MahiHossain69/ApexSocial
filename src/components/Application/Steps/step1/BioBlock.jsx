import StepTitle from "../../StepTitle";
import { stepData } from "@/data/StepData";
import FormField from "@/components/ui/formField";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { RiCalendar2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { Info } from "lucide-react";
import PhoneInput from "@/components/ui/phoneInput";

const BioBlock = ({
  formData,
  errors,
  handleChange,
  handleSelectChange,
  handlePhoneChange,
  handleDateChange,
  currentStep,
}) => {
  return (
    <div className="cardShadow p-4 md:p-6  border border-soft-200 rounded-[12px] bg-white">
      <StepTitle
        className="!font-inter !text-[20px] !font-semibold "
        title={`${currentStep + 1}. ${stepData[currentStep].title}`}
      />
      <div className="mt-5">
        {/* Form fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <FormField
            id="firstName"
            label="First Name"
            required
            error={errors.firstName}
            className="font-inter font-medium text-sm"
          >
            <Input
              id="firstName"
              placeholder="Type Here..."
              required
              className=" h-10 placeholder:text-soft-400 text-sm font-inter font-normal"
              value={formData["firstName"]}
              onChange={handleChange}
            />
          </FormField>
          <FormField
            id="lastName"
            label="Last Name"
            required
            error={errors.lastName}
            className="font-inter font-medium text-sm"
          >
            <Input
              id="lastName"
              placeholder="Type Here..."
              required
              className=" h-10 placeholder:text-soft-400 text-sm font-inter font-normal"
              value={formData["lastName"]}
              onChange={handleChange}
            />
          </FormField>

          <FormField id="dob" label="Date of Birth" required error={errors.dob}>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  id="dob"
                  className={cn(
                    "w-full font-inter text-sm justify-start text-left font-normal flex items-center gap-2",
                    !formData.dob && "text-muted-foreground"
                  )}
                >
                  <RiCalendar2Line size={20} />
                  {formData.dob
                    ? format(formData.dob, "MMM dd, yyyy")
                    : "Select Here"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={formData.dob}
                  onSelect={(date) => handleDateChange("dob", date)}
                  initialFocus
                  captionLayout="dropdown"
                />
              </PopoverContent>
            </Popover>
          </FormField>

          <FormField
            id="addressed-person"
            label="How would you like to be addressed?"
            required
            error={errors["addressed-person"]}
          >
            <Select
              value={formData["addressed-person"] || ""}
              onValueChange={(value) =>
                handleSelectChange("addressed-person", value)
              }
            >
              <SelectTrigger
                id="addressed-person"
                className="w-full !h-10 placeholder:text-soft-400 text-sm font-inter font-normal"
              >
                <SelectValue placeholder="Select Here" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="mr.">Mr.</SelectItem>
                <SelectItem value="mrs.">Mrs.</SelectItem>
                <SelectItem value="ms.">Ms.</SelectItem>
                <SelectItem value="mss.">Mss.</SelectItem>
              </SelectContent>
            </Select>
          </FormField>

          <FormField
            id="profession"
            label="Profession"
            required
            error={errors.profession}
          >
            <Select
              value={formData.profession || ""}
              onValueChange={(value) => handleSelectChange("profession", value)}
            >
              <SelectTrigger
                id="profession"
                className="w-full !h-10 placeholder:text-soft-400 text-sm font-inter font-normal"
              >
                <SelectValue placeholder="Select Here" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="teacher">Teacher</SelectItem>
                <SelectItem value="businessman">Businessman</SelectItem>
                <SelectItem value="salesman">Salesman</SelectItem>
              </SelectContent>
            </Select>
          </FormField>

          <FormField
            id="vocation-training-date"
            label="When did you complete or will complete your vocational studies?"
            required
            error={errors["vocation-training-date"]}
          >
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  id="vocation-training-date"
                  className={cn(
                    "w-full font-inter text-sm justify-start text-left font-normal flex items-center gap-2",
                    !formData["vocation-training-date"] &&
                      "text-muted-foreground"
                  )}
                >
                  <RiCalendar2Line size={20} />
                  {formData["vocation-training-date"]
                    ? format(formData["vocation-training-date"], "MMM dd, yyyy")
                    : "Select Here"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={formData["vocation-training-date"]}
                  onSelect={(date) =>
                    handleDateChange("vocation-training-date", date)
                  }
                  initialFocus
                  captionLayout="dropdown"
                />
              </PopoverContent>
            </Popover>
          </FormField>

          <FormField
            id="street-address"
            label="Street Address"
            required
            error={errors["street-address"]}
          >
            <Input
              id="street-address"
              placeholder="Type Here..."
              required
              className=" h-10 placeholder:text-soft-400 text-sm font-inter font-normal"
              value={formData["street-address"]}
              onChange={handleChange}
            />
          </FormField>

          <FormField id="city" label="City" required error={errors.city}>
            <Input
              id="city"
              placeholder="Type Here..."
              required
              className=" h-10 placeholder:text-soft-400 text-sm font-inter font-normal"
              value={formData.city}
              onChange={handleChange}
            />
          </FormField>

          <FormField
            id="zip-code"
            label="Postal Code/ Zip Code"
            required
            error={errors["zip-code"]}
          >
            <Input
              id="zip-code"
              placeholder="Type Here..."
              required
              className=" h-10 placeholder:text-soft-400 text-sm font-inter font-normal"
              value={formData["zip-code"]}
              onChange={handleChange}
            />
          </FormField>

          <FormField id="state" label="State" required error={errors.state}>
            <Input
              id="state"
              placeholder="Type Here..."
              required
              className=" h-10 placeholder:text-soft-400 text-sm font-inter font-normal"
              value={formData.state}
              onChange={handleChange}
            />
          </FormField>

          <FormField
            id="mobilePhone"
            label="Mobile Phone"
            required
            error={errors.mobilePhone}
          >
            <PhoneInput
              inputId="mobilePhone"
              placeholder="Type Here..."
              required
              className=" h-10 placeholder:text-soft-400 text-sm font-inter font-normal"
              value={formData.mobilePhone}
              onChange={(value) => handlePhoneChange("mobilePhone", value)}
            />
          </FormField>

          <FormField
            id="country"
            label="Country"
            required
            error={errors.country}
          >
            <Input
              id="country"
              placeholder="Type Here..."
              required
              className=" h-10 placeholder:text-soft-400 text-sm font-inter font-normal"
              value={formData.country}
              onChange={handleChange}
            />
          </FormField>

          <FormField
            id="passport-country"
            label="What country is your passport from?"
            required
            error={errors["passport-country"]}
          >
            <Select
              value={formData["passport-country"] || ""}
              onValueChange={(value) =>
                handleSelectChange("passport-country", value)
              }
            >
              <SelectTrigger
                id="passport-country"
                className="w-full !h-10 placeholder:text-soft-400 text-sm font-inter font-normal"
              >
                <SelectValue placeholder="Select Here" />
              </SelectTrigger>
              <SelectContent className="font-inter font-normal">
                <SelectItem value="us">United States</SelectItem>
                <SelectItem value="uk">United Kingdom</SelectItem>
                <SelectItem value="bd">Bangladesh</SelectItem>
              </SelectContent>
            </Select>
          </FormField>

          <FormField
            id="facebook-url"
            label="Facebook"
            required
            error={errors["facebook-url"]}
          >
            <Input
              id="facebook-url"
              placeholder="Enter your Facebook URL"
              className=" h-10 placeholder:text-soft-400 text-sm font-inter font-normal"
              value={formData["facebook-url"]}
              onChange={handleChange}
            />
          </FormField>

          <FormField
            id="tiktok-url"
            label="TikTok"
            required
            error={errors["tiktok-url"]}
          >
            <Input
              id="tiktok-url"
              placeholder="Enter your TikTok URL"
              className=" h-10 placeholder:text-soft-400 text-sm font-inter font-normal"
              value={formData["tiktok-url"]}
              onChange={handleChange}
            />
          </FormField>

          <FormField
            id="instagram-url"
            label="Instagram"
            required
            error={errors["instagram-url"]}
          >
            <Input
              id="instagram-url"
              placeholder="Enter your Instagram URL"
              className=" h-10 placeholder:text-soft-400 text-sm font-inter font-normal"
              value={formData["instagram-url"]}
              onChange={handleChange}
            />
          </FormField>

          <FormField
            id="youtube-url"
            label="YouTube"
            required
            error={errors["youtube-url"]}
          >
            <Input
              id="youtube-url"
              placeholder="Enter your YouTube URL"
              className=" h-10 placeholder:text-soft-400 text-sm font-inter font-normal"
              value={formData["youtube-url"]}
              onChange={handleChange}
            />
          </FormField>

          <FormField
            id="linkedin-url"
            label="Linkedin"
            required
            error={errors["linkedin-url"]}
          >
            <Input
              id="linkedin-url"
              placeholder="Enter your LinkedIn URL"
              className=" h-10 placeholder:text-soft-400 text-sm font-inter font-normal"
              value={formData["linkedin-url"]}
              onChange={handleChange}
            />
          </FormField>

          <FormField
            id="blog-url"
            label="Blog"
            required
            error={errors["blog-url"]}
          >
            <Input
              id="blog-url"
              placeholder="Enter your Blog URL"
              className=" h-10 placeholder:text-soft-400 text-sm font-inter font-normal"
              value={formData["blog-url"]}
              onChange={handleChange}
            />
          </FormField>

          <FormField
            id="website-url"
            label="Website"
            required
            error={errors["website-url"]}
          >
            <Input
              id="website-url"
              placeholder="Enter your website URL"
              className=" h-10 placeholder:text-soft-400 text-sm font-inter font-normal"
              value={formData["website-url"]}
              onChange={handleChange}
            />
          </FormField>

          <FormField
            className="w-full"
            id="first-aid-certificate"
            label="Do you have a first AID certificate?"
            required
            error={errors["first-aid-certificate"]}
          >
            <Select
              value={formData["first-aid-certificate"] || ""}
              onValueChange={(value) =>
                handleSelectChange("first-aid-certificate", value)
              }
            >
              <SelectTrigger
                id="first-aid-certificate"
                className="w-full !h-10 placeholder:text-soft-400 text-sm font-inter font-normal"
              >
                <SelectValue placeholder="Select Here" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="yes">Yes</SelectItem>
                <SelectItem value="no">No</SelectItem>
              </SelectContent>
            </Select>
          </FormField>

          <div className="flex flex-col gap-2">
            <FormField
              className="w-full md:col-span-2"
              id="t-shirt-size"
              label="What's your size for your Apex Social t-shirt?"
              required
              error={errors["t-shirt-size"]}
            >
              <Select
                value={formData["t-shirt-size"] || ""}
                onValueChange={(value) =>
                  handleSelectChange("t-shirt-size", value)
                }
              >
                <SelectTrigger
                  id="t-shirt-size"
                  className="w-full !h-10 placeholder:text-soft-400 text-sm font-inter font-normal"
                >
                  <SelectValue placeholder="Select Here" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="extra-small">Extra Small</SelectItem>
                  <SelectItem value="small">Small</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="large">Large</SelectItem>
                  <SelectItem value="extra-large">Extra Large</SelectItem>
                </SelectContent>
              </Select>
            </FormField>

            <span className="p-2 w-full flex gap-2 rounded-md font-inter   text-sm font-medium text-soft-400">
              <Tooltip>
                <TooltipTrigger>
                  <Info size={18} />
                </TooltipTrigger>
                <TooltipContent>
                  <span>T-shirt Sizing Info</span>
                </TooltipContent>
              </Tooltip>
              <Link to={"#"} className="underline">
                For additional info click here to see sizing chart
              </Link>
            </span>
          </div>

          {/* End */}
        </div>
      </div>
    </div>
  );
};

export default BioBlock;
