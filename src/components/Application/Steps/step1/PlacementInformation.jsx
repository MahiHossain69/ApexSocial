import StepTitle from "../../StepTitle";
import FormField from "@/components/ui/formField";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const PlacementInformation = ({
  formData,
  errors,
  handleChange,
  handleSelectChange,
  handleAnimalSelectionChange,
  handleAnimalLevelChange,
  handleOtherAnimalChange,
  handleDietaryRestrictionChange,
}) => {
  const animalList = [
    { id: "dogs", name: "Dogs" },
    { id: "cats", name: "Cats" },
    { id: "birds", name: "Birds" },
    { id: "fish", name: "Fish" },
    {
      id: "rodents",
      name: "Rodents (ie. Hamsters, Guinea Pigs, Rats, Rabbits)",
    },
    { id: "reptiles", name: "Reptiles (ie. Turtles, Lizards, Snakes)" },
    { id: "farm", name: "Farm Animals (ie. Horses, Goats, Chickens)" },
  ];

  // Extract animal data from formData
  const allergySelections = formData["allergy-selections"] || {};
  const allergyLevels = formData["allergy-levels"] || {};
  const otherAllergyChecked = formData["other-allergy-checked"] || false;
  const otherAllergyName = formData["other-allergy-name"] || "";
  const otherAllergyError = errors["other-allergy-name"] || "";

  const fearSelections = formData["fear-selections"] || {};
  const fearLevels = formData["fear-levels"] || {};
  const otherFearChecked = formData["other-fear-checked"] || false;
  const otherFearName = formData["other-fear-name"] || "";
  const otherFearError = errors["other-fear-name"] || "";

  // Button colors for different levels
  const levelColors = [
    "bg-green-base",
    "bg-green-light",
    "bg-yellow-base",
    "bg-orange-base",
    "bg-red-light",
  ];

  // Handle "Other" checkbox changes
  const handleOtherAllergyCheckboxChange = (checked) => {
    handleOtherAnimalChange("allergy", "checked", checked);
    if (!checked) {
      handleOtherAnimalChange("allergy", "name", "");
    }
  };

  const handleOtherFearCheckboxChange = (checked) => {
    handleOtherAnimalChange("fear", "checked", checked);
    if (!checked) {
      handleOtherAnimalChange("fear", "name", "");
    }
  };

  // Handle "Other" input changes
  const handleOtherAllergyNameChange = (e) => {
    const value = e.target.value;
    handleOtherAnimalChange("allergy", "name", value);
  };

  const handleOtherFearNameChange = (e) => {
    const value = e.target.value;
    handleOtherAnimalChange("fear", "name", value);
  };

  // Handle allergy level selection
  const handleAllergyLevelChangeLocal = (animalId, level) => {
    handleAnimalLevelChange("allergy", animalId, level);
    // Auto-check the checkbox if not already checked
    if (!allergySelections[animalId]) {
      handleAnimalSelectionChange("allergy", animalId, true);
    }
  };

  // Handle fear level selection
  const handleFearLevelChangeLocal = (animalId, level) => {
    handleAnimalLevelChange("fear", animalId, level);
    // Auto-check the checkbox if not already checked
    if (!fearSelections[animalId]) {
      handleAnimalSelectionChange("fear", animalId, true);
    }
  };

  // Handle checkbox change for allergies
  const handleAllergyCheckboxChange = (animalId, checked) => {
    handleAnimalSelectionChange("allergy", animalId, checked);
  };

  // Handle checkbox change for fears
  const handleFearCheckboxChange = (animalId, checked) => {
    handleAnimalSelectionChange("fear", animalId, checked);
  };

  // Reusable level button component
  const LevelButton = ({ level, selectedLevel, onClick, disabled }) => {
    // Determine if this button should be colored or neutral
    const isActive = selectedLevel && level <= selectedLevel;
    const bgColor = isActive ? levelColors[level - 1] : "bg-neutral-300";

    return (
      <Button
        type="button"
        disabled={disabled}
        onClick={() => onClick(level)}
        className={`!h-6 !w-6 !px-0 rounded-full shadow-[0px_3.9px_3.9px_0px_rgba(0,0,0,0.25)] flex items-center justify-center ${bgColor} hover:opacity-90`}
      >
        {level}
      </Button>
    );
  };

  return (
    <div className="cardShadow p-4 md:p-6  border border-soft-200 rounded-[12px] bg-white">
      <StepTitle
        className="!font-inter !text-[20px] !font-semibold "
        title={`2. Placement Information`}
      />

      <div className="mt-5">
        {/* Form fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <FormField
            id="allergic-to-animals"
            label="Are you allergic to animals?"
            required
            error={errors["allergic-to-animals"]}
          >
            <RadioGroup
              onValueChange={(value) =>
                handleSelectChange("allergic-to-animals", value)
              }
              value={formData["allergic-to-animals"] || ""}
              className="flex  h-10 placeholder:text-soft-400 text-sm font-inter font-normal"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="yes"
                  id="yes-allergies-to-animals"
                  className="border border-gray-300 data-[state=checked]:bg-BrandPrimary data-[state=checked]:[&_*_svg]:fill-white data-[state=checked]:[&_*_svg]:stroke-white"
                />
                <Label
                  htmlFor="yes-allergies-to-animals"
                  className="cursor-pointer font-inter font-medium text-sm"
                >
                  Yes
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="no"
                  id="no-allergies-to-animals"
                  className="border border-gray-300 data-[state=checked]:bg-BrandPrimary data-[state=checked]:[&_*_svg]:fill-white data-[state=checked]:[&_*_svg]:stroke-white"
                />
                <Label
                  htmlFor="no-allergies-to-animals"
                  className="cursor-pointer font-inter font-medium text-sm"
                >
                  No
                </Label>
              </div>
            </RadioGroup>
          </FormField>

          <FormField
            id="afraid-of-animals"
            label="Are you afraid of any animals?"
            required
            error={errors["afraid-of-animals"]}
          >
            <RadioGroup
              onValueChange={(value) =>
                handleSelectChange("afraid-of-animals", value)
              }
              value={formData["afraid-of-animals"] || ""}
              className="flex  h-10 placeholder:text-soft-400 text-sm font-inter font-normal"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="yes"
                  id="yes-afraid-of-animals"
                  className="border border-gray-300 data-[state=checked]:bg-BrandPrimary data-[state=checked]:[&_*_svg]:fill-white data-[state=checked]:[&_*_svg]:stroke-white"
                />
                <Label
                  htmlFor="yes-afraid-of-animals"
                  className="cursor-pointer font-inter font-medium text-sm"
                >
                  Yes
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="no"
                  id="no-afraid-of-animals"
                  className="border border-gray-300 data-[state=checked]:bg-BrandPrimary data-[state=checked]:[&_*_svg]:fill-white data-[state=checked]:[&_*_svg]:stroke-white"
                />
                <Label
                  htmlFor="no-afraid-of-animals"
                  className="cursor-pointer font-inter font-medium text-sm"
                >
                  No
                </Label>
              </div>
            </RadioGroup>
          </FormField>

          <FormField
            id="allergic-animal-list"
            label="What animal are you allergic to?"
            required
            error={errors["allergy-selections"]}
          >
            <span className="text-sm font-semibold text-textPrimary">
              Select all that apply
            </span>

            <div className="flex gap-2 items-center">
              <Checkbox id="regularAllergic" />
              <Label
                htmlFor="regularAllergic"
                className="text-sm text-textPrimary"
              >
                N/A
              </Label>
            </div>

            {animalList.map((animal) => {
              return (
                <div
                  key={`allergic-${animal.id}`}
                  className="flex gap-2 items-center"
                >
                  <Checkbox
                    id={`allergic-${animal.id}`}
                    checked={allergySelections[animal.id] || false}
                    onCheckedChange={(checked) =>
                      handleAllergyCheckboxChange(animal.id, checked)
                    }
                  />
                  <Label
                    htmlFor={`allergic-${animal.id}`}
                    className="text-sm text-textPrimary"
                  >
                    {animal.name}
                  </Label>
                </div>
              );
            })}
            <div className="flex gap-2 items-center">
              <Checkbox
                id="otherAnimalAllergic"
                checked={otherAllergyChecked}
                onCheckedChange={handleOtherAllergyCheckboxChange}
              />
              <Label
                htmlFor="otherAnimalAllergic"
                className="text-sm text-textPrimary"
              >
                Other
              </Label>
              <div className="flex flex-col">
                <Input
                  placeholder="Type here..."
                  className={`h-5 text-xs rounded-md max-w-64 ${
                    otherAllergyError ? "border-red-500" : ""
                  }`}
                  value={otherAllergyName}
                  onChange={handleOtherAllergyNameChange}
                  disabled={!otherAllergyChecked}
                />
                {otherAllergyError && (
                  <span className="text-xs text-red-500">
                    {otherAllergyError}
                  </span>
                )}
              </div>
            </div>
          </FormField>

          <FormField
            id="afraid-of-animal-list"
            label="What animal are you afraid of?"
            required
            error={errors["fear-selections"]}
          >
            <span className="text-sm font-semibold text-textPrimary">
              Select all that apply
            </span>

            <div className="flex gap-2 items-center">
              <Checkbox id="regularAfraid" />
              <Label
                htmlFor="regularAfraid"
                className="text-sm text-textPrimary"
              >
                N/A
              </Label>
            </div>

            {animalList.map((animal) => {
              return (
                <div
                  key={`afraid-of-${animal.id}`}
                  className="flex gap-2 items-center"
                >
                  <Checkbox
                    id={`afraid-of-${animal.id}`}
                    checked={fearSelections[animal.id] || false}
                    onCheckedChange={(checked) =>
                      handleFearCheckboxChange(animal.id, checked)
                    }
                  />
                  <Label
                    htmlFor={`afraid-of-${animal.id}`}
                    className="text-sm text-textPrimary "
                  >
                    {animal.name}
                  </Label>
                </div>
              );
            })}
            <div className="flex gap-2 items-center">
              <Checkbox
                id="otherAnimalAfraid"
                checked={otherFearChecked}
                onCheckedChange={handleOtherFearCheckboxChange}
              />
              <Label
                htmlFor="otherAnimalAfraid"
                className="text-sm text-textPrimary"
              >
                Other
              </Label>
              <div className="flex flex-col">
                <Input
                  placeholder="Type here..."
                  className={`h-5 text-xs rounded-md max-w-64 ${
                    otherFearError ? "border-red-500" : ""
                  }`}
                  value={otherFearName}
                  onChange={handleOtherFearNameChange}
                  disabled={!otherFearChecked}
                />
                {otherFearError && (
                  <span className="text-xs text-red-500">{otherFearError}</span>
                )}
              </div>
            </div>
          </FormField>
          <FormField
            id="animal-allergic-level"
            label="If you have animal allergies, how allergic are you to the following? (1 = Minimal to 5 = Severe)"
            required
            className="md:col-span-2"
            error={errors["allergy-selections"]}
          >
            <span className="text-sm font-semibold text-textPrimary">
              Select all that apply
            </span>

            <div className="flex gap-2 items-center">
              <Checkbox id="regularAllergicLevel" />
              <Label
                htmlFor="regularAllergicLevel"
                className="text-sm text-textPrimary"
              >
                N/A
              </Label>
            </div>

            {animalList.map((animal) => {
              return (
                <div
                  key={`allergic-level-${animal.id}`}
                  className="flex gap-2 items-center"
                >
                  <Checkbox
                    id={`allergic-level-${animal.id}`}
                    checked={allergySelections[animal.id] || false}
                    onCheckedChange={(checked) =>
                      handleAllergyCheckboxChange(animal.id, checked)
                    }
                  />
                  <Label
                    htmlFor={`allergic-level-${animal.id}`}
                    className="text-sm text-textPrimary "
                  >
                    {animal.name}
                  </Label>

                  <div className="ml-auto flex py-2 px-4 rounded-[12px] border border-neutral-300 bg-white gap-2">
                    {[1, 2, 3, 4, 5].map((level) => (
                      <LevelButton
                        key={level}
                        level={level}
                        selectedLevel={allergyLevels[animal.id]}
                        onClick={(selectedLevel) =>
                          handleAllergyLevelChangeLocal(
                            animal.id,
                            selectedLevel
                          )
                        }
                        disabled={!allergySelections[animal.id]}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
            <div className="flex gap-2 items-center">
              <Checkbox
                id="otherAnimalAllergicLevel"
                checked={otherAllergyChecked}
                onCheckedChange={handleOtherAllergyCheckboxChange}
              />
              <Label
                htmlFor="otherAnimalAllergicLevel"
                className="text-sm text-textPrimary"
              >
                Other
              </Label>
              <div className="flex flex-col">
                <Input
                  placeholder="Type here..."
                  className={`h-5 text-xs rounded-md max-w-64 ${
                    otherAllergyError ? "border-red-500" : ""
                  }`}
                  value={otherAllergyName}
                  onChange={handleOtherAllergyNameChange}
                  disabled={!otherAllergyChecked}
                />
                {otherAllergyError && (
                  <span className="text-xs text-red-500">
                    {otherAllergyError}
                  </span>
                )}
              </div>

              <div className="ml-auto flex py-2 px-4 rounded-[12px] border border-neutral-300 bg-white gap-2">
                {[1, 2, 3, 4, 5].map((level) => (
                  <LevelButton
                    key={level}
                    level={level}
                    selectedLevel={allergyLevels["other"]}
                    onClick={(selectedLevel) =>
                      handleAllergyLevelChangeLocal("other", selectedLevel)
                    }
                    disabled={!otherAllergyChecked}
                  />
                ))}
              </div>
            </div>
          </FormField>
          <FormField
            id="animal-afraid-level"
            label="If you are afraid of any animals, how severe is your fear to the following? (1 = Minimal to 5 = Severe)"
            required
            className="md:col-span-2"
            error={errors["fear-selections"]}
          >
            <span className="text-sm font-semibold text-textPrimary">
              Select all that apply
            </span>

            <div className="flex gap-2 items-center">
              <Checkbox id="regularAfraidLevel" />
              <Label
                htmlFor="regularAfraidLevel"
                className="text-sm text-textPrimary"
              >
                N/A
              </Label>
            </div>

            {animalList.map((animal) => {
              return (
                <div
                  key={`afraid-of-${animal.id}`}
                  className="flex gap-2 items-center"
                >
                  <Checkbox
                    id={`afraid-level-${animal.id}`}
                    checked={fearSelections[animal.id] || false}
                    onCheckedChange={(checked) =>
                      handleFearCheckboxChange(animal.id, checked)
                    }
                  />
                  <Label
                    htmlFor={`afraid-level-${animal.id}`}
                    className="text-sm text-textPrimary "
                  >
                    {animal.name}
                  </Label>

                  <div className="ml-auto flex py-2 px-4 rounded-[12px] border border-neutral-300 bg-white gap-2">
                    {[1, 2, 3, 4, 5].map((level) => (
                      <LevelButton
                        key={level}
                        level={level}
                        selectedLevel={fearLevels[animal.id]}
                        onClick={(selectedLevel) =>
                          handleFearLevelChangeLocal(animal.id, selectedLevel)
                        }
                        disabled={!fearSelections[animal.id]}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
            <div className="flex gap-2 items-center">
              <Checkbox
                id="otherAnimalAfraidLevel"
                checked={otherFearChecked}
                onCheckedChange={handleOtherFearCheckboxChange}
              />
              <Label
                htmlFor="otherAnimalAfraidLevel"
                className="text-sm text-textPrimary"
              >
                Other
              </Label>
              <div className="flex flex-col">
                <Input
                  placeholder="Type here..."
                  className={`h-5 text-xs rounded-md max-w-64 ${
                    otherFearError ? "border-red-500" : ""
                  }`}
                  value={otherFearName}
                  onChange={handleOtherFearNameChange}
                  disabled={!otherFearChecked}
                />
                {otherFearError && (
                  <span className="text-xs text-red-500">{otherFearError}</span>
                )}
              </div>

              <div className="ml-auto flex py-2 px-4 rounded-[12px] border border-neutral-300 bg-white gap-2">
                {[1, 2, 3, 4, 5].map((level) => (
                  <LevelButton
                    key={level}
                    level={level}
                    selectedLevel={fearLevels["other"]}
                    onClick={(selectedLevel) =>
                      handleFearLevelChangeLocal("other", selectedLevel)
                    }
                    disabled={!otherFearChecked}
                  />
                ))}
              </div>
            </div>
          </FormField>

          <FormField
            id="have-other-allergies"
            label="Do you have any other allergies? If yes, please specify."
            className="md:col-span-2"
            error={errors["have-other-allergies"]}
          >
            <Textarea
              id="have-other-allergies"
              placeholder="Type Here..."
              className="resize-none h-[103px] placeholder:text-soft-400 text-sm font-inter font-normal"
              value={formData["have-other-allergies"]}
              onChange={handleChange}
            />
          </FormField>

          <FormField
            id="dietary-restrictions"
            label="Do you have any dietary restrictions? If yes, please specify. "
            required
            error={
              errors["dietary-restrictions"] ||
              errors["other-dietary-restriction-name"]
            }
          >
            <div className="flex gap-2 items-center">
              <Checkbox
                id="noDietRestrictions"
                checked={formData["dietary-restrictions"]?.none || false}
                onCheckedChange={(checked) =>
                  handleDietaryRestrictionChange("none", checked)
                }
              />
              <Label
                htmlFor="noDietRestrictions"
                className="text-sm text-textPrimary"
              >
                No
              </Label>
            </div>
            <div className="flex gap-2 items-center">
              <Checkbox
                id="vegan"
                checked={formData["dietary-restrictions"]?.vegan || false}
                onCheckedChange={(checked) =>
                  handleDietaryRestrictionChange("vegan", checked)
                }
              />
              <Label htmlFor="vegan" className="text-sm text-textPrimary">
                Vegan
              </Label>
            </div>
            <div className="flex gap-2 items-center">
              <Checkbox
                id="vegetarian"
                checked={formData["dietary-restrictions"]?.vegetarian || false}
                onCheckedChange={(checked) =>
                  handleDietaryRestrictionChange("vegetarian", checked)
                }
              />
              <Label htmlFor="vegetarian" className="text-sm text-textPrimary">
                Vegetarian
              </Label>
            </div>
            <div className="flex gap-2 items-center">
              <Checkbox
                id="kosher"
                checked={formData["dietary-restrictions"]?.kosher || false}
                onCheckedChange={(checked) =>
                  handleDietaryRestrictionChange("kosher", checked)
                }
              />
              <Label htmlFor="kosher" className="text-sm text-textPrimary">
                Kosher
              </Label>
            </div>
            <div className="flex gap-2 items-center">
              <Checkbox
                id="pescatarian"
                checked={formData["dietary-restrictions"]?.pescatarian || false}
                onCheckedChange={(checked) =>
                  handleDietaryRestrictionChange("pescatarian", checked)
                }
              />
              <Label htmlFor="pescatarian" className="text-sm text-textPrimary">
                Pescatarian
              </Label>
            </div>
            <div className="flex gap-2 items-center">
              <Checkbox
                id="glutenFree"
                checked={formData["dietary-restrictions"]?.glutenFree || false}
                onCheckedChange={(checked) =>
                  handleDietaryRestrictionChange("glutenFree", checked)
                }
              />
              <Label htmlFor="glutenFree" className="text-sm text-textPrimary">
                Gluten-free
              </Label>
            </div>

            <div className="flex gap-2 items-center">
              <Checkbox
                id="otherDietaryRestrictions"
                checked={formData["other-dietary-restriction-checked"] || false}
                onCheckedChange={(checked) =>
                  handleChange({
                    target: {
                      id: "other-dietary-restriction-checked",
                      value: checked,
                    },
                  })
                }
              />
              <Label
                htmlFor="otherDietaryRestrictions"
                className="text-sm text-textPrimary"
              >
                Other
              </Label>
              <Input
                id="other-dietary-restriction-name"
                value={formData["other-dietary-restriction-name"] || ""}
                onChange={handleChange}
                placeholder="Type here..."
                className="h-5 text-xs rounded-md max-w-64"
                disabled={!formData["other-dietary-restriction-checked"]}
              />
            </div>
          </FormField>

          <FormField
            id="dietary-restrictions-importance"
            label="How important is it to you that the host family shares or respects your dietary restrictions? "
            required
            error={errors["dietary-restrictions-importance"]}
          >
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <Checkbox
                  id="not-important"
                  checked={
                    formData["dietary-restrictions-importance"] ===
                    "not-important"
                  }
                  onCheckedChange={(checked) =>
                    handleSelectChange(
                      "dietary-restrictions-importance",
                      checked ? "not-important" : ""
                    )
                  }
                />
                <Label
                  htmlFor="not-important"
                  className="text-sm text-textPrimary"
                >
                  Not important - I'm flexible
                </Label>
              </div>
              <div className="flex gap-2 items-center">
                <Checkbox
                  id="somewhat-important"
                  checked={
                    formData["dietary-restrictions-importance"] ===
                    "somewhat-important"
                  }
                  onCheckedChange={(checked) =>
                    handleSelectChange(
                      "dietary-restrictions-importance",
                      checked ? "somewhat-important" : ""
                    )
                  }
                />
                <Label
                  htmlFor="somewhat-important"
                  className="text-sm text-textPrimary"
                >
                  Somewhat important - I'd prefer it, but I can adapt
                </Label>
              </div>
              <div className="flex gap-2 items-center">
                <Checkbox
                  id="very-important"
                  checked={
                    formData["dietary-restrictions-importance"] ===
                    "very-important"
                  }
                  onCheckedChange={(checked) =>
                    handleSelectChange(
                      "dietary-restrictions-importance",
                      checked ? "very-important" : ""
                    )
                  }
                />
                <Label
                  htmlFor="very-important"
                  className="text-sm text-textPrimary"
                >
                  Very important - I'd like to be placed with a family whose
                  household diet aligns with mine
                </Label>
              </div>
            </div>
          </FormField>

          <FormField
            id="have-driver-certificate"
            label="Do you have a drivers license?"
            required
            error={errors["have-driver-certificate"]}
          >
            <RadioGroup
              onValueChange={(value) =>
                handleSelectChange("have-driver-certificate", value)
              }
              value={formData["have-driver-certificate"] || ""}
              className="flex  h-10 placeholder:text-soft-400 text-sm font-inter font-normal"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="yes"
                  id="yes-driver-certificate"
                  className="border border-gray-300 data-[state=checked]:bg-BrandPrimary data-[state=checked]:[&_*_svg]:fill-white data-[state=checked]:[&_*_svg]:stroke-white"
                />
                <Label
                  htmlFor="yes-driver-certificate"
                  className="cursor-pointer font-inter font-medium text-sm"
                >
                  Yes
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="no"
                  id="no-driver-certificate"
                  className="border border-gray-300 data-[state=checked]:bg-BrandPrimary data-[state=checked]:[&_*_svg]:fill-white data-[state=checked]:[&_*_svg]:stroke-white"
                />
                <Label
                  htmlFor="no-driver-certificate"
                  className="cursor-pointer font-inter font-medium text-sm"
                >
                  No
                </Label>
              </div>
            </RadioGroup>
          </FormField>
          <FormField
            id="comfortable-with-children"
            label="Are you comfortable driving with children in your car?"
            required
            error={errors["comfortable-with-children"]}
          >
            <RadioGroup
              onValueChange={(value) =>
                handleSelectChange("comfortable-with-children", value)
              }
              value={formData["comfortable-with-children"] || ""}
              className="flex  h-10 placeholder:text-soft-400 text-sm font-inter font-normal"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="yes"
                  id="yes-comfortable-with-children"
                  className="border border-gray-300 data-[state=checked]:bg-BrandPrimary data-[state=checked]:[&_*_svg]:fill-white data-[state=checked]:[&_*_svg]:stroke-white"
                />
                <Label
                  htmlFor="yes-comfortable-with-children"
                  className="cursor-pointer font-inter font-medium text-sm"
                >
                  Yes
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="no"
                  id="no-comfortable-with-children"
                  className="border border-gray-300 data-[state=checked]:bg-BrandPrimary data-[state=checked]:[&_*_svg]:fill-white data-[state=checked]:[&_*_svg]:stroke-white"
                />
                <Label
                  htmlFor="no-comfortable-with-children"
                  className="cursor-pointer font-inter font-medium text-sm"
                >
                  No
                </Label>
              </div>
            </RadioGroup>
          </FormField>

          <FormField
            id="enjoy-driving"
            label="Do you enjoy driving?"
            required
            error={errors["enjoy-driving"]}
          >
            <RadioGroup
              onValueChange={(value) =>
                handleSelectChange("enjoy-driving", value)
              }
              value={formData["enjoy-driving"] || ""}
              className="flex  h-10 placeholder:text-soft-400 text-sm font-inter font-normal"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="yes"
                  id="yes-enjoy"
                  className="border border-gray-300 data-[state=checked]:bg-BrandPrimary data-[state=checked]:[&_*_svg]:fill-white data-[state=checked]:[&_*_svg]:stroke-white"
                />
                <Label
                  htmlFor="yes-enjoy"
                  className="cursor-pointer font-inter font-medium text-sm"
                >
                  Yes
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="no"
                  id="no-enjoy"
                  className="border border-gray-300 data-[state=checked]:bg-BrandPrimary data-[state=checked]:[&_*_svg]:fill-white data-[state=checked]:[&_*_svg]:stroke-white"
                />
                <Label
                  htmlFor="no-enjoy"
                  className="cursor-pointer font-inter font-medium text-sm"
                >
                  No
                </Label>
              </div>
            </RadioGroup>
          </FormField>

          <FormField
            id="have-drive-in-snow"
            label="Do you have experience driving in the snow?"
            required
            error={errors["have-drive-in-snow"]}
          >
            <RadioGroup
              onValueChange={(value) =>
                handleSelectChange("have-drive-in-snow", value)
              }
              value={formData["have-drive-in-snow"] || ""}
              className="flex  h-10 placeholder:text-soft-400 text-sm font-inter font-normal"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="yes"
                  id="yes-driving-in-snow"
                  className="border border-gray-300 data-[state=checked]:bg-BrandPrimary data-[state=checked]:[&_*_svg]:fill-white data-[state=checked]:[&_*_svg]:stroke-white"
                />
                <Label
                  htmlFor="yes-driving-in-snow"
                  className="cursor-pointer font-inter font-medium text-sm"
                >
                  Yes
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="no"
                  id="no-driving-in-snow"
                  className="border border-gray-300 data-[state=checked]:bg-BrandPrimary data-[state=checked]:[&_*_svg]:fill-white data-[state=checked]:[&_*_svg]:stroke-white"
                />
                <Label
                  htmlFor="no-driving-in-snow"
                  className="cursor-pointer font-inter font-medium text-sm"
                >
                  No
                </Label>
              </div>
            </RadioGroup>
          </FormField>

          <FormField
            id="how-often-do-you-drive"
            label="How often do you drive?"
            required
            error={errors["how-often-do-you-drive"]}
          >
            <Select
              value={formData["how-often-do-you-drive"] || ""}
              onValueChange={(value) =>
                handleSelectChange("how-often-do-you-drive", value)
              }
            >
              <SelectTrigger
                id="how-often-do-you-drive"
                className="w-full !h-10 placeholder:text-soft-400 text-sm font-inter font-normal"
              >
                <SelectValue placeholder="Select Here" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="regularly">Regularly</SelectItem>
                <SelectItem value="weekly">Weekly</SelectItem>
                <SelectItem value="often-in-a-month">
                  Often in a month
                </SelectItem>
              </SelectContent>
            </Select>
          </FormField>

          <FormField
            id="year-of-experience"
            label="How many years have you been driving?"
            required
            error={errors["year-of-experience"]}
          >
            <Input
              id="year-of-experience"
              value={formData["year-of-experience"] || ""}
              onChange={handleChange}
              placeholder="Type here..."
              className=" h-10 placeholder:text-soft-400 text-sm font-inter font-normal"
            />
          </FormField>

          <FormField
            id="about-driving-skills-experience"
            label="Please tell us about your driving skills and experience"
            required
            error={errors["about-driving-skills-experience"]}
          >
            <Select
              value={formData["about-driving-skills-experience"] || ""}
              onValueChange={(value) =>
                handleSelectChange("about-driving-skills-experience", value)
              }
            >
              <SelectTrigger
                id="about-driving-skills-experience"
                className="w-full !h-10 placeholder:text-soft-400 text-sm font-inter font-normal"
              >
                <SelectValue placeholder="Select Here" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="beginner">
                  Beginner - Still learning and gaining confidence
                </SelectItem>
                <SelectItem value="intermediate">
                  Intermediate - Comfortable with daily driving
                </SelectItem>
                <SelectItem value="experienced">
                  Experienced - Very confident in various conditions
                </SelectItem>
                <SelectItem value="expert">
                  Expert - Professional or advanced driving skills
                </SelectItem>
              </SelectContent>
            </Select>
          </FormField>

          <FormField
            id="getting-license"
            label="If you don't have a license are you open to getting one?"
            required
            error={errors["getting-license"]}
          >
            <RadioGroup
              onValueChange={(value) =>
                handleSelectChange("getting-license", value)
              }
              value={formData["getting-license"] || ""}
              className="flex  h-10 placeholder:text-soft-400 text-sm font-inter font-normal"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="yes"
                  id="yes-open-to-get"
                  className="border border-gray-300 data-[state=checked]:bg-BrandPrimary data-[state=checked]:[&_*_svg]:fill-white data-[state=checked]:[&_*_svg]:stroke-white"
                />
                <Label
                  htmlFor="yes-open-to-get"
                  className="cursor-pointer font-inter font-medium text-sm"
                >
                  Yes
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="no"
                  id="no-open-to-get"
                  className="border border-gray-300 data-[state=checked]:bg-BrandPrimary data-[state=checked]:[&_*_svg]:fill-white data-[state=checked]:[&_*_svg]:stroke-white"
                />
                <Label
                  htmlFor="no-open-to-get"
                  className="cursor-pointer font-inter font-medium text-sm"
                >
                  No
                </Label>
              </div>
            </RadioGroup>
          </FormField>
        </div>
      </div>
    </div>
  );
};

export default PlacementInformation;
