import BaseStep from "@/components/Application/Steps/BaseStep";
import Step1 from "@/components/Application/Steps/Step1";
import Step2 from "@/components/Application/Steps/Step2";
import Step3 from "@/components/Application/Steps/Step3";
import Step4 from "@/components/Application/Steps/Step4";
import Step5 from "@/components/Application/Steps/Step5";
import Step6 from "@/components/Application/Steps/Step6";
import Step7 from "@/components/Application/Steps/Step7";
import Step8 from "@/components/Application/Steps/Step8";
import Step9 from "@/components/Application/Steps/Step9";

export const stepData = [
  { title: "Bio", component: Step1 },
  { title: "Program and Travel", component: Step2 },
  { title: "Pictures and Video ", component: Step3 },
  { title: "Color Code", component: Step4 },
  { title: "Educational and Professional Experience", component: Step5 },
  { title: "More About You", component: Step6 },
  { title: "Letter to Your Future Host Family", component: Step7 },
  { title: "Emergency Contact and References", component: Step8 },
  { title: "Priority Documents", component: Step9 },
];

// Export Account Information component separately for use as a standalone page
export const AccountInformationComponent = BaseStep;
