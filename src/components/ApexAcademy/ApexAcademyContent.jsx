import { Achievement } from "@/components/shared/svgs";
import { Button } from "@/components/ui/button";
import { Check, LayoutDashboard } from "lucide-react";
import { AiOutlineEdit } from "react-icons/ai";
import { RiCalendar2Line } from "react-icons/ri";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import FormField from "../ui/formField";
import PhoneInput from "../ui/phoneInput";
import { Input } from "../ui/input";
import { z } from "zod";
import { ApexAcademySchema } from "@/lib/validationSchemas";
import { toast } from "sonner";
import CoreImage from "@/assets/core.png";

const Topics = [
  {
    id: 1,
    name: "Support in the host country by Apex Social and program details",
  },
  { id: 2, name: "What you should know about America and American culture" },
  { id: 3, name: "Living and working in an American households" },
  { id: 4, name: "Effective communication with the host family" },
  { id: 5, name: "What you can expect from your first few months in the USA" },
  { id: 6, name: "American parenting methods and expectations" },
  { id: 7, name: "Leisure activities in the USA" },
  {
    id: 8,
    name: "Working with the Area Director and how best to stay in touch",
  },
  { id: 9, name: "How to get the most out of your stay abroad" },
];

const ApexAcademyContent = ({
  academyFormData,
  setAcademyFormData,
  errors,
  setErrors,
}) => {
  const handleDateChange = (id, date) => {
    setAcademyFormData((prev) => ({ ...prev, [id]: date }));
    setErrors((prev) => ({ ...prev, [id]: undefined }));
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setAcademyFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
    setErrors((prev) => ({ ...prev, [id]: undefined }));
  };

  const handleRegisterNow = () => {
    try {
      const dataToValidate = {
        ...academyFormData,
        seminarDate: academyFormData.seminarDate || undefined,
      };

      const validatedData = ApexAcademySchema.parse(dataToValidate);
      setErrors({});
      console.log("Form submitted successfully:", validatedData);
      toast.success("Registration successful!");
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors = {};
        error.errors.forEach((err) => {
          newErrors[err.path[0]] = err.message;
        });
        setErrors(newErrors);
        console.log("Validation errors:", newErrors);
      }
    }
  };

  return (
    <div className="max-w-246.5 mx-auto flex flex-col">
     <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
  
  <p className="w-fit flex items-center gap-4 text-main-900 text-base md:text-lg leading-normal font-semibold">
    <span className="w-6 h-6 rounded-full bg-BrandPrimary flex items-center justify-center">
      <Achievement className="w-4 h-auto text-white" />
    </span>
    Apex Academy
  </p>

  
  <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
    <Button className="bg-BrandPrimary hover:bg-BrandPrimary text-white w-full sm:w-auto">
      <LayoutDashboard /> Dashboard
    </Button>
    <Button className="bg-BrandPrimary hover:bg-BrandPrimary text-white w-full sm:w-auto">
      <AiOutlineEdit /> Edit Application
    </Button>
  </div>
</div>


      <div className="flex w-full cardShadow my-6 border border-soft-200 rounded-[12px] p-4 md:p-6">
        <div className="flex w-full flex-col">
          <div className="flex flex-col items-center text-center gap-1">
            <h1 className="font-semibold text-main-900 text-[40px] leading-tight ">
              Apex Academy
            </h1>
            <p className="font-medium text-lg text-main-900 leading-normal">
              The one day seminar to prepare for your assignment board
            </p>
            <span className="font-normal text-sm leading-relaxed text-main-900">
              Participate is mandatory for all applicants
            </span>
          </div>
          <div className="mt-3">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-6">
                <h2 className="text-main-900 font-bold text-base  leading-tight">
                  Apex Online Academy
                </h2>
                <p className="text-sm text-main-900">
                  The Apex Online Academy is designed to prepare you for your role as an Apex Care Professional in the U.S. It combines structured online learning with interactive live workshops, giving you the tools, knowledge, and confidence you need to thrive abroad. <strong className="font-bold">The Academy consists of two parts: Online Training and Academy Day</strong> Together, they provide both the foundational knowledge and the hands-on practice you’ll need to succeed. Through this blend of self-paced courses and engaging live sessions, you’ll gain practical skills, connect with other Care Professionals from around the world, and receive expert guidance from the Apex Care & Development Team.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-main-900 font-bold text-base  leading-snug">
                  Online Training
                </h3>
                <p className="text-sm text-main-900">
                  Your journey begins with the Apex Academy’s online training program, completed in the Apex Community Portal. This self-paced learning path is essential to build a strong foundation for your time abroad. It consists of two key courses:
                </p>
                <ul className="text-sm text-main-900 list-disc pl-5 space-y-1">
                  <li>
                    Apex Orientation Training (approx. 3 hours) – Must be completed before attending your Academy Day workshop.
                  </li>
                  <li>
                    Child Development & Safety Training Course (approx. 32 hours) – A comprehensive, interactive course designed to equip you with the skills needed to care for children safely and effectively. This must be completed no later than two weeks before your departure.
                  </li>
                </ul>
                <div className="text-sm text-main-900">
                  <p className="font-medium underline mb-1">Important details to keep in mind:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>All training must be completed at least <span className="font-bold">two weeks before departure </span> (required by the U.S. Department of State).</li>
                    <li>Courses follow a set schedule — <span className="font-bold">no fast-tracking,</span> so plan your time well.</li>
                    <li>Each lesson has a quiz or homework; you need <span className="font-bold">90% or higher </span> to move forward (with chances to retry).</li>
                    <li>Stay dedicated, motivated, and open-minded for the best results.</li>
                  </ul>
                  <p className="mt-6">
                    You will receive<span className="font-bold"> exclusive access to the Online Training</span> in the Apex Community Portal once your Training Fees have been paid. After that, simply log in with your usual email and password to get started.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <h3 className="text-main-900 font-bold text-base leading-snug">
                  Academy Day
                </h3>
                <p className="text-sm text-main-900">
                  Once your online training is underway, you’ll participate in <span className="font-bold"> Academy Day</span>, a dynamic, interactive workshop designed to bring your learning to life. This includes two live 3-hour Zoom sessions with the Apex Care & Development Team and fellow Care Professionals from around the globe.
                </p>
                <div className="text-sm text-main-900">
                  <p className="font-medium underline mb-1">Academy Day is your opportunity to:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Deepen your understanding of Apex’s vision, mission, and program expectations.</li>
                    <li>Learn practical childcare techniques, safety protocols, and conflict resolution strategies.</li>
                    <li>Share your experiences, ask questions, and actively participate in discussions.</li>
                    <li>Demonstrate your skills and build confidence in your role.</li>
                  </ul>
                  
                </div>
              </div>
              <img src={CoreImage} className="md:max-w-71.5 w-60 h-80 md:max-h-101 mx-auto" alt=""/>
              <div className="text-sm text-main-900">
                  <p className="font-medium underline mb-1">What to expect:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Keep your video on during sessions to foster connection and collaboration.</li>
                    <li>Complete your pre-assignment before the workshop: [Pre-Assignment Form].</li>
                    <li>Engage fully in activities, as active participation is key to your success.</li>
                    
                  </ul>
                  
                  <p className="mt-6">
                    Academy Day ensures you are not only prepared but also supported as you transition into your new role. With expert guidance, mentorship, and the chance to connect with your peers, you’ll begin your journey abroad with confidence and excitement.
                  </p>
                  <p className="mt-5">
                    ✨ Your adventure as an Apex Care Professional starts here. The Apex Online Academy is your first step - embrace it, learn as much as you can, and get ready for an unforgettable experience!
                  </p>
                </div>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default ApexAcademyContent;
