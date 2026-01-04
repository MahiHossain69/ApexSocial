import StepTitle from "../../StepTitle";
import { stepData } from "@/data/StepData";
import FormField from "@/components/ui/formField";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { RiCalendar2Line } from "react-icons/ri";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";

const EducationPart = ({
  formData,
  handleChange,
  handleSelectChange,
  errors,
  setErrors,
  setFormData,
  currentStep,
}) => {
  const handleDateChange = (id, date) => {
    setFormData((prevData) => ({
      ...prevData,
      educationPart: {
        ...prevData.educationPart,
        [id]: date,
      },
    }));
    setErrors((prev) => ({
      ...prev,
      educationPart: {
        ...prev.educationPart,
        [id]: undefined,
      },
    }));
  };
  return (
    <div>
      {stepData[currentStep] && (
        <StepTitle className="mb-4"
          title={`${currentStep + 1}. ${stepData[currentStep].title}`}
        />
      )}
      <div>
        <FormField
          id="otherDegreeCertification"
          required
          label="Do you have or are you pursuing another degree/certification? Please specify"
          className="md:!col-span-2 mt-4"
          error={errors.otherDegreeCertification}
        >
          <Textarea
            id="otherDegreeCertification"
            placeholder="Type Here..."
            className="resize-none h-[102px] placeholder:font-inter font-normal placeholder:text-[#868C98]"
            value={formData.otherDegreeCertification}
            onChange={handleChange}
          />
        </FormField>
      </div>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
        <FormField
          id="highestDegree"
          label="What will be your highest degree at the time you go abroad?"
          required
          info={true}
          infoTitle="What will be your highest degree at the time you go abroad?"
          infoDescription="We will use this information to help you match with the
                appropriate program."
          error={errors.highestDegree}
        >
          <Select
            value={formData.highestDegree || ""}
            onValueChange={(value) =>
              handleSelectChange("highestDegree", value)
            }
          >
            <SelectTrigger id="highestDegree" className="w-full !h-10">
              <SelectValue placeholder="Select Here" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="O-Level.">O-Level</SelectItem>
              <SelectItem value="A-Level">A-Level</SelectItem>
              <SelectItem value="PhD">PhD</SelectItem>
              <SelectItem value="MBA">MBA</SelectItem>
            </SelectContent>
          </Select>
        </FormField>
        <FormField
          id="schoolUniversityName"
          label="School/University Name"
          required
          error={errors.schoolUniversityName}
        >
          <Input
            id="schoolUniversityName"
            placeholder="Type Here..."
            required
            className="h-10 placeholder:font-inter font-normal placeholder:text-[#868C98]"
            value={formData.schoolUniversityName}
            onChange={handleChange}
          />
        </FormField>
        <FormField
          id="graduationDate"
          label="If applicable, what is your expected graduation date"
          required
          error={errors.graduationDate}
        >
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                id="graduationDate"
                className={cn(
                  "w-full justify-start text-left font-normal flex items-center gap-2",
                  !formData.graduationDate && "text-muted-foreground"
                )}
              >
                <RiCalendar2Line size={20} />
                {formData.graduationDate
                  ? format(formData.graduationDate, "MMM dd, yyyy")
                  : "Select Here"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={formData.graduationDate}
                onSelect={(date) => handleDateChange("graduationDate", date)}
                initialFocus
                captionLayout="dropdown"
              />
            </PopoverContent>
          </Popover>
        </FormField>
        <FormField
          id="currentEmployer"
          label="Current Employer"
          required
          error={errors.currentEmployer}
        >
          <Input
            id="currentEmployer"
            placeholder="Type Here..."
            required
            className="h-10 placeholder:font-inter font-normal placeholder:text-[#868C98]"
            value={formData.currentEmployer}
            onChange={handleChange}
          />
        </FormField>
        <FormField
          id="employerNotice"
          label="Have you given your current employer notice?"
          required
          error={errors.employerNotice}
        >
          <RadioGroup
            onValueChange={(value) =>
              handleSelectChange("employerNotice", value)
            }
            value={formData.employerNotice}
            className="flex h-10"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="yes"
                id="yes-employer-notice"
                className="border border-gray-300 data-[state=checked]:bg-BrandPrimary data-[state=checked]:[&_*_svg]:fill-white data-[state=checked]:[&_*_svg]:stroke-white"
              />
              <Label htmlFor="yes-employer-notice" className="cursor-pointer font-inter text-[#0A0D14] font-medium">
                Yes
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="no"
                id="no-employer-notice"
                className="border border-gray-300 data-[state=checked]:bg-BrandPrimary data-[state=checked]:[&_*_svg]:fill-white data-[state=checked]:[&_*_svg]:stroke-white"
              />
              <Label htmlFor="no-employer-notice" className="cursor-pointer font-inter text-[#0A0D14] font-medium">
                No
              </Label>
            </div>
          </RadioGroup>
        </FormField>

        <FormField
          id="howMuchNotice"
          label="How much notice do you have to give your current employer?"
          required
          
         
          error={errors.howMuchNotice}
        >
          <Select
            value={formData.howMuchNotice || ""}
            onValueChange={(value) =>
              handleSelectChange("howMuchNotice", value)
            }
          >
            <SelectTrigger id="howMuchNotice" className="w-full !h-10">
              <SelectValue placeholder="Select Here" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1-week">1 week</SelectItem>
              <SelectItem value="2-week">2 week</SelectItem>
              <SelectItem value="3-week">3 week</SelectItem>
              <SelectItem value="4-week">4 week</SelectItem>
            </SelectContent>
          </Select>
        </FormField>
      </div>
    </div>
  );
};

export default EducationPart;
