import FormField from "@/components/ui/formField";
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
const ProfessionalExperience = ({
  formData,
  handleChange,
  handleSelectChange,
  errors,
}) => {
  return (
    <div className="mb-5">
      <p className="text-base font-semibold text-main-900">
        Professional Experience
      </p>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
        <FormField
          id="ageGroupExperience"
          label="What age group do you have experience working with?"
          required
          error={errors.ageGroupExperience}
        >
          <Select
            value={formData.ageGroupExperience || ""}
            onValueChange={(value) =>
              handleSelectChange("ageGroupExperience", value)
            }
          >
            <SelectTrigger id="ageGroupExperience" className="w-full !h-10 ">
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

        <FormField
          id="hasSpecialNeedsCaringExperience"
          label="Do you have experience caring for children with special needs?"
          required
          error={errors.hasSpecialNeedsCaringExperience}
        >
          <RadioGroup
            onValueChange={(value) =>
              handleSelectChange("hasSpecialNeedsCaringExperience", value)
            }
            value={formData.hasSpecialNeedsCaringExperience}
            className="flex h-10"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="yes"
                id="yes-special-needs-caring"
                className="border border-gray-300 data-[state=checked]:bg-BrandPrimary data-[state=checked]:[&_*_svg]:fill-white data-[state=checked]:[&_*_svg]:stroke-white"
              />
              <Label
                htmlFor="yes-special-needs-caring"
                className="cursor-pointer"
              >
                Yes
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="no"
                id="no-special-needs-caring"
                className="border border-gray-300 data-[state=checked]:bg-BrandPrimary data-[state=checked]:[&_*_svg]:fill-white data-[state=checked]:[&_*_svg]:stroke-white"
              />
              <Label
                htmlFor="no-special-needs-caring"
                className="cursor-pointer"
              >
                No
              </Label>
            </div>
          </RadioGroup>
        </FormField>

        <FormField
          id="workedWithChildrenZeroTo24Months"
          label="Do you have experience working with children aged zero to 24 months?"
          required
          error={errors.workedWithChildrenZeroTo24Months}
        >
          <RadioGroup
            onValueChange={(value) =>
              handleSelectChange("workedWithChildrenZeroTo24Months", value)
            }
            value={formData.workedWithChildrenZeroTo24Months}
            className="flex h-10"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="yes"
                id="yes-worked-with-children-zero-to-24-months"
                className="border border-gray-300 data-[state=checked]:bg-BrandPrimary data-[state=checked]:[&_*_svg]:fill-white data-[state=checked]:[&_*_svg]:stroke-white"
              />
              <Label
                htmlFor="yes-worked-with-children-zero-to-24-months"
                className="cursor-pointer"
              >
                Yes
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="no"
                id="no-worked-with-children-zero-to-24-months"
                className="border border-gray-300 data-[state=checked]:bg-BrandPrimary data-[state=checked]:[&_*_svg]:fill-white data-[state=checked]:[&_*_svg]:stroke-white"
              />
              <Label
                htmlFor="no-worked-with-children-zero-to-24-months"
                className="cursor-pointer"
              >
                No
              </Label>
            </div>
          </RadioGroup>
        </FormField>

        <FormField
          id="howManyHoursWithZeroTo24Months"
          label="If yes, how many hours of experience do you have caring for children age zero to 24 months?"
          required
          error={errors.howManyHoursWithZeroTo24Months}
        >
          <Select
            value={formData.howManyHoursWithZeroTo24Months || ""}
            onValueChange={(value) =>
              handleSelectChange("howManyHoursWithZeroTo24Months", value)
            }
            className=""
          >
            <SelectTrigger
              id="howManyHoursWithZeroTo24Months"
              className="w-full !h-10"
            >
              <SelectValue placeholder="Select Here" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Yes-less-than-50-hours">
                Yes, less than 50 hours
              </SelectItem>
              <SelectItem value="Yes-50-100-hours">
                Yes, 50-100 hours
              </SelectItem>
              <SelectItem value="have-not">No, I have not</SelectItem>
            </SelectContent>
          </Select>
        </FormField>

        <FormField
          id="yearsChildcareExperience"
          label="How many years of childcare experience do you have?"
          required
          error={errors.yearsChildcareExperience}
        >
          <Select
            value={formData.yearsChildcareExperience || ""}
            onValueChange={(value) =>
              handleSelectChange("yearsChildcareExperience", value)
            }
          >
            <SelectTrigger
              id="yearsChildcareExperience"
              className="w-full !h-10"
            >
              <SelectValue placeholder="Select Here" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1-2-years">1-2 years</SelectItem>
              <SelectItem value="2-3-years">2-3 years</SelectItem>
              <SelectItem value="3-4-years">3-4 years</SelectItem>
              <SelectItem value="4-5-years">4-5 years</SelectItem>
            </SelectContent>
          </Select>
        </FormField>

        <FormField
          id="desiredAgeGroupToWorkWith"
          label="What age group would you like to work with?"
          required
          error={errors.desiredAgeGroupToWorkWith}
        >
          <Select
            value={formData.desiredAgeGroupToWorkWith || ""}
            onValueChange={(value) =>
              handleSelectChange("desiredAgeGroupToWorkWith", value)
            }
          >
            <SelectTrigger
              id="desiredAgeGroupToWorkWith"
              className="w-full !h-10"
            >
              <SelectValue placeholder="Select Here" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1-2-years">1–2 years</SelectItem>
              <SelectItem value="2-3-years">2–3 years</SelectItem>
              <SelectItem value="3-4-years">3–4 years</SelectItem>
              <SelectItem value="4-5-years">4–5 years</SelectItem>
            </SelectContent>
          </Select>
        </FormField>

        <FormField
          id="describeSpecialNeedsExperience"
          label="Describe your experience for caring a child with special needs."
          required
          className="md:col-span-2"
          error={errors.describeSpecialNeedsExperience}
        >
          <Textarea
            id="describeSpecialNeedsExperience"
            placeholder="Type Here..."
            className="resize-none h-[102px] placeholder:font-inter font-normal placeholder:text-[#868C98]"
            value={formData.describeSpecialNeedsExperience}
            onChange={handleChange}
          />
        </FormField>
        <FormField
          id="specialNeedsCondition"
          label="What special needs condition do you have experience working with?"
          required
          className="md:col-span-2"
          error={errors.specialNeedsCondition}
        >
          <Select
            value={formData.specialNeedsCondition || ""}
            onValueChange={(value) =>
              handleSelectChange("specialNeedsCondition", value)
            }
          >
            <SelectTrigger id="specialNeedsCondition" className="w-full !h-10">
              <SelectValue placeholder="Select Here" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="physical-disabilities">
                Physical Disabilities
              </SelectItem>
              <SelectItem value="hearing-impairment">
                Hearing Impairment
              </SelectItem>
              <SelectItem value="vision-impairment">
                Vision Impairment
              </SelectItem>
              <SelectItem value="cerebral-palsy">Cerebral Palsy</SelectItem>
            </SelectContent>
          </Select>
        </FormField>
      </div>
    </div>
  );
};

export default ProfessionalExperience;
