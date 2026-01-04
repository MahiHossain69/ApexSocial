import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Plus, X, ChevronDown, FileText, Check } from "lucide-react";
import { ReferenceFormDialog } from "@/components/Application/Steps/Step8/ReferenceFormDialog";

const availableAdditionalReferences = [
  { id: "childcare-reference", label: "Childcare Reference" },
  { id: "teacher-reference", label: "Teacher Reference" },
  { id: "emergency-contact", label: "Emergency Contact" },
  { id: "personal-reference", label: "Personal Reference" },
];

export function AdditionalReferences({
  selectedReferences = [],
  onReferencesChange = () => {},
}) {
  const [open, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [completedReferences, setCompletedReferences] = useState([]);

  const safeSelectedReferences = Array.isArray(selectedReferences)
    ? selectedReferences
    : [];

  const handleToggleReference = (ref) => {
    if (
      safeSelectedReferences.length > 0 &&
      safeSelectedReferences[0]?.id === ref.id
    ) {
      onReferencesChange([]);
    } else {
      onReferencesChange([ref]);
    }
    setOpen(false);
  };

  const handleRemoveReference = () => {
    onReferencesChange([]);
  };

  const handleAddReference = () => {
    if (safeSelectedReferences.length > 0) {
      setIsModalOpen(true);
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleSaveAndUpload = (newReference) => {
    const newRefWithId = {
      ...newReference,
      instanceId: Date.now() + Math.random(),
    };
    setCompletedReferences((prev) => [...prev, newRefWithId]);
    handleModalClose();
  };

  return (
    <Card className="w-full rounded-xl cardShadow p-4">
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-inter font-semibold text-gray-800">
          Additional References
        </h3>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className="w-[470px] border border-[#E2E4E9] h-auto min-h-[40px] pr-2 bg-transparent justify-start items-center overflow-hidden"
              >
                <div className="flex items-center gap-1 overflow-x-auto scrollbar-none whitespace-nowrap">
                  {safeSelectedReferences.length > 0 ? (
                    <Badge
                      key={safeSelectedReferences[0]?.id}
                      variant="secondary"
                      className="inline-flex font-inter font-medium text-[11px] items-center pr-1 bg-[#CBF5E5] text-[#176448]"
                    >
                      {safeSelectedReferences[0]?.label?.toUpperCase()}
                      <button
                        type="button"
                        className="ml-1 rounded-full outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleRemoveReference();
                          setOpen(false);
                        }}
                        aria-label={`Remove ${safeSelectedReferences[0]?.label}`}
                      >
                        <X className="h-3 w-3 text-primary-text hover:text-primary-text/80" />
                      </button>
                    </Badge>
                  ) : (
                    <span className="text-muted-foreground font-inter">
                      Select references...
                    </span>
                  )}
                </div>
                <ChevronDown className="ml-auto h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>

            <PopoverContent
              align="start"
              className="min-w-[250px] max-w-[360px] w-auto p-0"
            >
              <Command>
                <CommandList>
                  <CommandGroup>
                    {availableAdditionalReferences.map((ref) => (
                      <CommandItem
                        key={ref.id}
                        onSelect={() => handleToggleReference(ref)}
                        className="flex items-center font-inter text-[#0A0D14] font-medium text-[12px] gap-2 cursor-pointer"
                      >
                        <Checkbox
                          className="border border-[#E2E4E9] shadow-sm text-white"
                          checked={safeSelectedReferences.some(
                            (sRef) => sRef?.id === ref.id
                          )}
                          onCheckedChange={() => handleToggleReference(ref)}
                        />
                        {ref.label}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>

          <Button
            className="bg-[#44B5AA] text-primary-foreground hover:bg-[#44B5AA]/90 whitespace-nowrap w-full sm:w-auto"
            onClick={handleAddReference}
            disabled={safeSelectedReferences.length === 0}
          >
            <Plus className="mr-2 h-4 w-4" /> Add a Reference
          </Button>
        </div>

        <div className="flex flex-col gap-2 mt-4">
          {completedReferences.map((ref, index) => (
            <div
              key={ref.instanceId}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
            >
              <div className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-gray-500" />
                <span>{ref.label}</span>
                <span className="text-sm font-semibold">{index + 1}</span>
                <Check className="h-5 w-5 text-green-500" />
              </div>
              <div className="flex gap-2">
                <Button variant="outline">Download PDF</Button>
                <Button>Upload</Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {safeSelectedReferences.length > 0 && (
        <ReferenceFormDialog
          open={isModalOpen}
          onOpenChange={setIsModalOpen}
          selectedReference={safeSelectedReferences[0]}
          onClose={handleModalClose}
          onSave={handleSaveAndUpload}
        />
      )}
    </Card>
  );
}
