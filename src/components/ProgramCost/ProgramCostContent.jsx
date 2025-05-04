import React from "react";
import { RiMoneyDollarBoxFill } from "react-icons/ri";
import { Card } from "@/components/ui/card";
import { MdDone  } from "react-icons/md";


const ProgramCostContent = () => {
  return (
    <div>
      <div className="mb-6 border-b-2 mt-[-24px] p-4 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
        <div className="flex ml-0 xs:mt-[15px] md:mt-0 sm:ml-[-15px] gap-2 sm:gap-[10px] items-center">
          <div className="bg-[#45B5AA]  w-[24px] h-[24px] rounded-full flex items-center justify-center">
            <RiMoneyDollarBoxFill className="h-4 w-4 text-white" />
          </div>
          <h1 className="font-inter font-semibold text-[18px]">
            Program Costs
          </h1>
        </div>
      </div>

      <div className="">
        <Card className="border rounded-lg p-6">
          <h1 className="font-inter font-normal text-[14px] text-[#525866] max-w-[936px]">
            <strong className="capitalize text-[#0A0D14] font-normal">
              Exploring Child Care Investment: A Guide for Parents As parents
            </strong>
            , child care is more than a monthly expense. It’s a big investment
            in our kids future and our well-being. There are four important
            aspects to think about when seeing child care as an investment.
          </h1>
          <div className="space-y-5">
            <h1 className="text-[#0A0D14] font-inter font-semibold text-[16px]">
              1. Mindset: Viewing Child Care as an investment.
            </h1>
            <ul className=" pl-5 list-disc text-[#525866] font-inter font-normal text-[16px]">
              <li className="">
                Child care is not just a cost, It’s an investment in our kids
                and our mental health
              </li>
              <li>
                Seeing in this way helps us understand the value of good child
                care, making us better at our jobs, family planning and self
                care.
              </li>
            </ul>
          </div>
          <div className="space-y-5">
            <h1 className="text-[#0A0D14] font-inter font-semibold text-[16px]">
              2. Investment of Time: Choosing the Right Hiring Method
            </h1>
            <ul className=" pl-5 list-disc text-[#525866] font-inter font-normal text-[16px]">
              <li className="">Two main approaches: DIY and full-service.</li>
              <li>
                DIY needs time to learn and manage child care, but it can be
                challenging.
              </li>
              <li>
                Full-service handles everything, saving time but costs more.
                Consider a free consultation for a better decision.
              </li>
            </ul>
          </div>
          <div className="space-y-5">
            <h1 className="text-[#0A0D14] font-inter font-semibold text-[16px]">
              3. Investment of Finances
            </h1>
            <ul className=" pl-5 list-disc text-[#525866] font-inter font-normal text-[16px]">
              <li className="">
                Financial considerations vary based on qualifications and
                location.
              </li>
              <li>
                Services like Apex Social offer professional recruiting,
                pre-screening, training, and support for retaining a caregiver.
                This also includes managing expenses like visas, healthcare, and
                travel for international candidates. Starting at $20/hour,
                adjusting based on needs and location.
              </li>
            </ul>
          </div>
          <div className="space-y-5">
            <h1 className="text-[#0A0D14] font-inter font-semibold text-[16px]">
              4. Investment of In-Kind Benefits
            </h1>
            <ul className=" pl-5 list-disc text-[#525866] font-inter font-normal text-[16px]">
              <li className="">
                {" "}
                Besides money, offering non-cash benefits (like a guest room or
                family car use) supports caregivers.{" "}
              </li>
            </ul>
            <h1 className="font-inter font-normal text-[16px] text-[#525866]">
              In conclusion, thinking about mindset, time, money, and in-kind
              benefits can help parents make an informed decision about child
              care. It not only benefits kids but also makes family life more
              harmonious and productive.Your Family Advisor can assist you in
              estimating the financial commitment for your family and then break
              it down on an hourly basis for full-time child care. We typically
              assume 40 hours a week to give you an estimate of what the "all
              in" hourly rate is, based on the most important factors such as:
            </h1>
            <ul className=" pl-5  list-disc text-[#525866] font-inter font-normal text-[16px]">
              <li className="mb-5">
                Your location and your local minimum wage.
              </li>
              <li className="mb-5"> How many children do you need care for.</li>
              <li className="mb-5">
                The responsibilities and duties of the position you are looking
                to fill and.
              </li>
              <li className="mb-5">
                The background and experience of your Care Professional
              </li>
            </ul>
            <h1 className="font-inter font-normal text-[16px] text-[#525866] border-b-1 pb-5">
              The average cost range for full-time Apex Social Group childcare
              starts around $20/hour for an Apex Care Professional, including
              the wages paid to your Live-in Care Professional, and fees paid to
              Apex including healthcare and other Care Professional Benefits.
              Ask your Family Advisor to share best practices and what the
              market rates typically are for our candidates in your local
              market. The Apex Care Professional childcare solution is more
              flexible than hiring a domestic nanny or babysitter due to the
              continuity and flexibility of care. Our Care Professionals commit
              to a full year, providing you with the consistency of having
              another adult helping you with your child. The International Care
              Professionals that come on a J1 exchange visitor visa are
              tax-exempt from FICA.
              <strong className="text-[#0A0D14] font-normal ">
                {" "}
                The host family and their Care Professional are free to agree to
                compensation higher than the legally applicable minimum.
              </strong>
            </h1>

            <h2 className="font-inter text-[#0A0D14] font-normal text-[16px]">
              For more information, please contact Apex Social Group at
              844-787-6566.
            </h2>

            <div className="overflow-hidden border-[#E2E4E9] border rounded-lg font-inter shadow-md text-[14px] text-[#0A0D14]">
              {/* Header */}
              <div className="cursor-pointer bg-[#CBF5E5] px-4 py-3 hover:no-underline">
                <h2 className="font-medium text-[#0A0D14] font-inter text-[14px]">
                Apex Social Group Fee Schedule - 12-Month Care Professional Service
                </h2>
              </div>

              {/* Content */}
              <div className="bg-[#EFFAF6] border-[#E2E4E9] border-t">
                <div className="grid xs:grid-cols-1 sm:grid-cols-2">
                  {/* Row 1 */}
                  <div className="sm:border-b border-[#E2E4E9] xs:border-b-0 text-[#0A0D14] font-inter text-[14px] border-r px-4 py-3 font-medium">
                  Application Fee
                  </div>
                  <div
                    
                    className="border-b border-[#E2E4E9] font-inter px-4 py-3 flex items-center gap-2 text-[14px]  font-normal text-[#0A0D14]">
                    $450 due upon application
                  </div>
                    
                  

                  {/* Row 2 */}
                  <div className="sm:border-b border-[#E2E4E9] xs:border-b-0 text-[#0A0D14] font-inter text-[14px] border-r px-4 py-3 font-medium">
                  Placement Fee
                  </div>
                  <div className="border-b border-[#E2E4E9] px-4 py-3 text-[14px] font-normal text-[#0A0D14]">
                  Due upon matching
                  </div>

                  {/* Row 3 */}
                  <h1 className="sm:border-b border-[#E2E4E9] xs:border-b-0 text-[#525866] font-inter text-[14px] border-r px-4 py-3 font-normal">
                  <strong className="text-[#0A0D14] font-medium text-[14px]">Weekly Compensation to Care Professional </strong>“compensation navigation is common based on locations, number of children, and care professional experience.
                  </h1>
                  <h1 className="border-b border-[#E2E4E9] px-4 py-3 text-[14px] font-normal text-[#525866]">
                  <strong className="text-[#0A0D14] font-medium text-[14px]">Weekly Compensation “paid directly to the Care Professional”</strong> “Most Families and Care Professional are free to negotiate the weekly stipend Compensation. Factors may include location, number of children, care professional experience, supply and demand for your area, difficulty of the job, and other factors. For more info talk to your Apex Family Advisor to better understand your competitive advantage to the hiring process.
                  </h1>
                </div>
              </div>
            </div>

            <div className="overflow-hidden border-[#E2E4E9] border rounded-lg font-inter shadow-md text-[14px] text-[#0A0D14]">
              {/* Header */}
              <div className="cursor-pointer bg-[#CBF5E5] px-4 py-3 hover:no-underline">
                <h2 className="font-medium text-[#0A0D14] font-inter text-[14px]">
                Other Cost to Consider
                </h2>
              </div>

              {/* Content */}
              <div className="bg-[#EFFAF6] border-[#E2E4E9] border-t">
                <div className="grid xs:grid-cols-1 sm:grid-cols-2">
                  {/* Row 1 */}
                  <div className="sm:border-b border-[#E2E4E9] xs:border-b-0 text-[#0A0D14] font-inter text-[14px] border-r px-4 py-3 font-medium">
                  Educational Allowance 
                  </div>
                  <div
                    
                    className="border-b border-[#E2E4E9] font-inter px-4 py-3 flex items-center gap-2 text-[14px]  font-normal text-[#0A0D14]">
                   $500 per year for your Care Professional to complete required US coursework (6 credits)
                  </div>
                    
                  

                  {/* Row 2 */}
                  <div className="sm:border-b border-[#E2E4E9] xs:border-b-0 text-[#0A0D14] font-inter text-[14px] border-r px-4 py-3 font-medium">
                  Placement Fee
                  </div>
                  <div className="border-b border-[#E2E4E9] px-4 py-3 text-[14px] font-normal text-[#0A0D14]">
                  Varies if your Care Professional will drive your family’s car
                  </div>

                  {/* Row 3 */}
                  <h1 className="sm:border-b border-[#E2E4E9] xs:border-b-0 text-[#0A0D14] font-inter text-[14px] border-r px-4 py-3 font-normal">
                  Room and Board
                  </h1>
                  <h1 className="border-b border-[#E2E4E9] px-4 py-3 text-[14px] font-normal text-[#0A0D14]">
                  Varies depending upon your lifecycle. 
                  </h1>
                </div>
              </div>
            </div>

            <div className="overflow-hidden border-[#E2E4E9] border rounded-lg font-inter shadow-md text-[14px] text-[#0A0D14]">
              {/* Header */}
              <div className="cursor-pointer bg-[#CBF5E5] px-4 py-3 hover:no-underline">
                <h2 className="font-medium text-[#0A0D14] font-inter text-[14px]">
                Your Fees Include
                </h2>
              </div>

              {/* Content */}
              <div className="bg-[#EFFAF6] border-[#E2E4E9] border-t">
                <div className="grid grid-cols-1">
                  {/* Row 1 */}
                  <div className="border-b border-[#E2E4E9] flex items-center gap-[10px] text-[#0A0D14] font-inter text-[14px] border-r px-4 py-3 font-normal">
                    <MdDone className="text-[#525866] w-4 h-4 min-w-[1rem] min-h-[1rem] "/>Background check and personal interviews
                  </div>
                 

                  {/* Row 2 */}
                  <div className="border-b border-[#E2E4E9] flex items-center gap-[10px] text-[#0A0D14] font-inter text-[14px] border-r px-4 py-3 font-normal">
                    <MdDone className="text-[#525866] w-4 h-4 min-w-[1rem] min-h-[1rem] "/>Color Code test, medical record and school transcript verification
                  </div>
                  

                  {/* Row 3 */}
                  <div className="border-b border-[#E2E4E9] flex items-center gap-[10px] text-[#0A0D14] font-inter text-[14px] border-r px-4 py-3 font-normal">
                    <MdDone className="text-[#525866] w-4 h-4 min-w-[1rem] min-h-[1rem] "/>Childcare and personal reference verification
                  </div>
                  <div className="border-b border-[#E2E4E9] flex items-center gap-[10px] text-[#0A0D14] font-inter text-[14px] border-r px-4 py-3 font-normal">
                    <MdDone className="text-[#525866] w-4 h-4 min-w-[1rem] min-h-[1rem] "/>31 visa documentation and support
                  </div>
                  <div className="border-b border-[#E2E4E9] flex items-center gap-[10px] text-[#0A0D14] font-inter text-[14px] border-r px-4 py-3 font-normal">
                    <MdDone className="text-[#525866] w-4 h-4 min-w-[1rem] min-h-[1rem] "/>Pre-arrival 38 hour Childcare & Cultural Exchange Training program
                  </div>
                  <div className="border-b border-[#E2E4E9] flex items-center gap-[10px] text-[#0A0D14] font-inter text-[14px] border-r px-4 py-3 font-normal">
                    <MdDone className="text-[#525866] w-4 h-4 min-w-[1rem] min-h-[1rem] "/>Round-trip international airfare
                  </div>
                  <div className="border-b border-[#E2E4E9] flex items-center gap-[10px] text-[#0A0D14] font-inter text-[14px] border-r px-4 py-3 font-normal">
                    <MdDone className="text-[#525866] w-4 h-4 min-w-[1rem] min-h-[1rem] "/>Health, travel and accident insurance
                  </div>
                  <div className="border-b border-[#E2E4E9] flex items-center gap-[10px] text-[#0A0D14] font-inter text-[14px] border-r px-4 py-3 font-normal">
                    <MdDone className="text-[#525866] w-4 h-4 min-w-[1rem] min-h-[1rem] "/>Pre-departure preparation and support
                  </div>
                  <div className="border-b border-[#E2E4E9] flex items-center gap-[10px] text-[#0A0D14] font-inter text-[14px] border-r px-4 py-3 font-normal">
                    <MdDone className="text-[#525866] w-4 h-4 min-w-[1rem] min-h-[1rem] "/>in-home host family interview and family reference verification
                  </div>
                  <div className="border-b border-[#E2E4E9] flex items-center gap-[10px] text-[#0A0D14] font-inter text-[14px] border-r px-4 py-3 font-normal">
                    <MdDone className="text-[#525866] w-4 h-4 min-w-[1rem] min-h-[1rem] "/>Personalized matching assistance
                  </div>
                  <div className="border-b border-[#E2E4E9] flex items-center gap-[10px] text-[#0A0D14] font-inter text-[14px] border-r px-4 py-3 font-normal">
                    <MdDone className="text-[#525866] w-4 h-4 min-w-[1rem] min-h-[1rem] "/>Two-week past arrival orientation
                  </div>
                  <div className="border-b border-[#E2E4E9] flex items-center gap-[10px] text-[#0A0D14] font-inter text-[14px] border-r px-4 py-3 font-normal">
                    <MdDone className="text-[#525866] w-4 h-4 min-w-[1rem] min-h-[1rem] "/>Local Apex Area Director support
                  </div>
                  <div className="border-b border-[#E2E4E9] flex items-center gap-[10px] text-[#0A0D14] font-inter text-[14px] border-r px-4 py-3 font-normal">
                    <MdDone className="text-[#525866] w-4 h-4 min-w-[1rem] min-h-[1rem] "/>24/7 Emergency support
                  </div>
                  <div className="border-b border-[#E2E4E9] flex items-center gap-[10px] text-[#0A0D14] font-inter text-[14px] border-r px-4 py-3 font-normal">
                    <MdDone className="text-[#525866] w-4 h-4 min-w-[1rem] min-h-[1rem] "/>Helpful resources and information
                  </div>
                  <div className="border-b border-[#E2E4E9] flex items-center gap-[10px] text-[#0A0D14] font-inter text-[14px] border-r px-4 py-3 font-normal">
                    <MdDone className="text-[#525866] w-4 h-4 min-w-[1rem] min-h-[1rem] "/>Satisfaction Guarantee-Free replacement at no additional cost for the first three months.
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ProgramCostContent;
