import { childcareExperienceSchema } from "@/lib/validationSchemas";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { MinusIcon } from "lucide-react";

export default function ChildcareExperience({
  errors,
  childcareExperiences,
  setChildcareExperiences,
  setErrors,
}) {
  const addExperience = () => {
    const newExperiences = [
      ...childcareExperiences,
      {
        experienceType: '',
        experienceDuration: '',
        totalHours: '',
        children: '',
        duties: '',
        frequency: '',
        referenceName: '',
        referenceEmail: '',
      },
    ];
    setChildcareExperiences(newExperiences);
    setErrors((prev) => [...(prev || []), {}]);
  };

  const removeExperience = (index) => {
    const updatedExperiences = childcareExperiences.filter(
      (_, i) => i !== index
    );
    setChildcareExperiences(updatedExperiences);
    setErrors((prev) => {
      const newErrors = [...(prev.childcareExperiences || [])];
      newErrors.splice(index, 1);
      return { ...prev, childcareExperiences: newErrors };
    });
  };

  const handleChange = (index, field, value) => {
    const updatedExperiences = [...childcareExperiences];
    updatedExperiences[index] = {
      ...updatedExperiences[index],
      [field]: value,
    };
    setChildcareExperiences(updatedExperiences);

    const validationResult = childcareExperienceSchema.safeParse(
      updatedExperiences[index]
    );

    if (!validationResult.success) {
      const newErrorsForExperience = {};
      validationResult.error.errors.forEach((err) => {
        newErrorsForExperience[err.path[0]] = err.message;
      });
      setErrors((prev) => {
        const newErrors = [...(prev || [])];
        newErrors[index] = newErrorsForExperience;
        return newErrors;
      });
    } else {
      setErrors((prev) => {
        const newErrors = [...(prev || [])];
        newErrors[index] = {}; // Clear errors for this specific experience
        return newErrors;
      });
    }
  };

  return (
    <div className="">
      <div className="space-y-6">
        {childcareExperiences.map((exp, index) => (
          <div key={index} className="">
            <div className="border-soft-200 border rounded-lg overflow-hidden">
              <div className="p-4 bg-[#45B5AA1A] flex items-center justify-between">
                <p className="text-sm font-medium text-black">
                  Please describe each childcare experience in detail.
                  <span className="text-red-base">*</span>
                </p>
                {index > 0 && (
                  <MinusIcon
                    onClick={() => {
                      removeExperience(index);
                    }}
                    className="cursor-pointer text-red-base"
                  />
                )}
              </div>
              <div className="grid grid-cols-2 border-t *:h-11">
                {/* Experience Type */}
                <div className="label-childExperience border-b border-soft-200 flex items-center">
                  <Label htmlFor="experienceType">Experience Type</Label>
                </div>
                <div className="value-childExperience border-b border-soft-200 flex items-center">
                  <Input
                    id="experienceType"
                    required
                    value={exp.experienceType}
                    onChange={(e) =>
                      handleChange(index, "experienceType", e.target.value)
                    }
                    placeholder="Day care center"
                    className="ring-0 border-0 shadow-none focus-visible:ring-0 focus-visible:border-0 !h-full px-8 rounded-none"
                  />
                </div>

                {/* Date Range */}
                <div className="label-childExperience border-b border-soft-200 flex items-center">
                  <Label htmlFor="experienceDuration">Date</Label>
                </div>
                <div className="value-childExperience flex gap-2 border-b border-soft-200 items-center">
                  {/* date field */}
                  <Input
                    id="experienceDuration"
                    required
                    value={exp.experienceDuration}
                    onChange={(e) =>
                      handleChange(index, "experienceDuration", e.target.value)
                    }
                    placeholder="May 2012 - May 2013"
                    className="ring-0 border-0 shadow-none focus-visible:ring-0 focus-visible:border-0 !h-full px-8 rounded-none"
                  />
                </div>

                {/* Total Hours */}
                <div className="label-childExperience border-b border-soft-200 flex items-center">
                  <Label htmlFor="totalHours">Total Hours</Label>
                </div>
                <div className="value-childExperience border-b border-soft-200 flex items-center">
                  <Input
                    id="totalHours"
                    required
                    value={exp.totalHours}
                    onChange={(e) =>
                      handleChange(index, "totalHours", e.target.value)
                    }
                    placeholder="70 Hours"
                    className="ring-0 border-0 shadow-none focus-visible:ring-0 focus-visible:border-0 !h-full px-8 rounded-none"
                  />
                </div>

                {/* Children */}
                <div className="label-childExperience border-b border-soft-200 flex items-center">
                  <Label htmlFor="children">Children</Label>
                </div>
                <div className="value-childExperience border-b border-soft-200 flex items-center">
                  <Input
                    id="children"
                    required
                    value={exp.children}
                    onChange={(e) =>
                      handleChange(index, "children", e.target.value)
                    }
                    placeholder="12 children, age 1-3 years, male and female"
                    className="ring-0 border-0 shadow-none focus-visible:ring-0 focus-visible:border-0 !h-full px-8 rounded-none"
                  />
                </div>

                {/* Duties */}
                <div className="label-childExperience border-b border-soft-200 flex items-center">
                  <Label htmlFor="duties">Duties</Label>
                </div>
                <div className="value-childExperience border-b border-soft-200 flex items-center">
                  <Input
                    id="duties"
                    required
                    value={exp.duties}
                    onChange={(e) =>
                      handleChange(index, "duties", e.target.value)
                    }
                    placeholder="Change diapers, feeding, reading, playing"
                    className="ring-0 border-0 shadow-none focus-visible:ring-0 focus-visible:border-0 !h-full px-8 rounded-none"
                  />
                </div>

                {/* Frequency of Care */}
                <div className="label-childExperience border-b border-soft-200 flex items-center">
                  <Label htmlFor="frequency">Frequency of Care</Label>
                </div>
                <div className="value-childExperience border-b border-soft-200 flex items-center">
                  <Input
                    id="frequency"
                    required
                    value={exp.frequency}
                    onChange={(e) =>
                      handleChange(index, "frequency", e.target.value)
                    }
                    placeholder="Daily"
                    className="ring-0 border-0 shadow-none focus-visible:ring-0 focus-visible:border-0 !h-full px-8 rounded-none"
                  />
                </div>

                {/* Reference Name */}
                <div className="label-childExperience border-b border-soft-200 flex items-center">
                  <Label htmlFor="referenceName">Reference name</Label>
                </div>
                <div className="value-childExperience border-b border-soft-200 flex items-center">
                  <Input
                    id="referenceName"
                    value={exp.referenceName}
                    onChange={(e) =>
                      handleChange(index, "referenceName", e.target.value)
                    }
                    placeholder="John Smith"
                    className="ring-0 border-0 shadow-none focus-visible:ring-0 focus-visible:border-0 !h-full px-8 rounded-none"
                  />
                </div>

                {/* Reference Email */}
                <div className="label-childExperience flex items-center">
                  <Label htmlFor="referenceEmail">Reference email</Label>
                </div>
                <div className="value-childExperience flex items-center">
                  <Input
                    id="referenceEmail"
                    value={exp.referenceEmail}
                    onChange={(e) =>
                      handleChange(index, "referenceEmail", e.target.value)
                    }
                    placeholder="john.smith.email.com"
                    className="ring-0 border-0 shadow-none focus-visible:ring-0 focus-visible:border-0 !h-full px-8 rounded-none"
                  />
                </div>
              </div>
            </div>
            {errors?.[index] && Object.keys(errors[index]).length > 0 && (
              <p className="text-red-500 text-sm mt-2">
                {Object.values(errors[index])[0]}
              </p>
            )}
          </div>
        ))}

        {/* Add Button */}
        <Button
          onClick={addExperience}
          className="h-10 px-2.5 py-1.5 text-[#45B5AA] border border-[#45B5AA] bg-white rounded-[10px] flex items-center justify-center gap-1 hover:bg-[#d9faf7] duration-150 select-none"
        >
          <img src="/icons/plus-icon.svg" alt="plus-icon" />
          Add Another
        </Button>
      </div>
    </div>
  );
}
