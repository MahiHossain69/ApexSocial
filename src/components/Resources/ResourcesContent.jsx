import React from 'react'
import { HiLightBulb } from 'react-icons/hi2'
import { Card, CardContent } from '../ui/card'

import { RiFileList2Fill } from 'react-icons/ri'

const ResourcesContent = () => {
  return (
    <div>
      <div className="mb-6 border-b-2 mt-[-24px] p-4 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
              <div className="flex ml-0 xs:mt-[15px] md:mt-0 sm:ml-[-15px] gap-2 sm:gap-[10px] items-center">
                <div className="bg-[#45B5AA]  w-[24px] h-[24px] rounded-full flex items-center justify-center">
                  <HiLightBulb className="h-4 w-4 text-white" />
                </div>
                <h1 className="font-inter font-semibold text-[18px]">
                  Resources
                </h1>
              </div>
            </div>


             <Card className="border border-gray-200 rounded-lg">
          <CardContent className="p-8">
            {/* Main Title */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold font-inter text-[20px] text-[#0A0D14] mb-2">Apex Social Group</h2>
              <h3 className="text-xl font-semibold font-inter text-[20px] text-[#0A0D14]">Household Management Toolkit</h3>
            </div>

            {/* Apex Social Matching Guide */}
            <div className="mb-6">
              <h4 className="text-teal-500  font-inter  mb-3 cursor-pointer font-semibold text-[16px] underline">
                Apex Social Matching Guide
              </h4>
              <p className="text-[#525866] font-inter font-normal text-[16px]  leading-relaxed">
                Download the Apex Matching Guide which includes guidance on navigating scheduling across time zones, how
                to use the color code personality test when evaluating candidates, plus helpful lists of interviewing
                questions to help you get to know candidates and identify which candidate will be the best fit for your
                childcare needs, family culture and lifestyle.
              </p>
            </div>

            {/* Apex Social Household Guide */}
            <div className="mb-6">
              <h4 className="text-teal-500  mb-3 cursor-pointer underline font-inter font-semibold text-[16px] ">
                Apex Social Household Guide
              </h4>
              <p className="text-[#525866] font-inter font-normal text-[16px]  leading-relaxed">
                We recommend you personalize this fillable Household Guide and prepare to share it with your Care
                Professional after you have matched and before he or she arrives at your home. This will be a great tool
                to onboard your Care Professional about all the key information regarding your family, your home, and
                your expectations. We also recommend you share a copy with your Apex Care & Development Manager (ACD)
                who will be your key advisor in onboarding and helping you have a successful placement.
              </p>
            </div>

            {/* Host Family Handbook */}
            <div className="mb-6">
              <h4 className="text-teal-500  mb-3 cursor-pointer underline font-inter font-semibold text-[16px] ">Host Family Handbook</h4>
              <p className="text-[#525866] font-inter font-normal text-[16px]  leading-relaxed">
                The Host Family Handbook is a comprehensive overview of how to be a great Host Parent, onboarding,
                setting expectations, and retaining your caregiver for as long as possible. Our Apex Team has been
                supporting live-in care placements for many years and we have put together this guide to support you.
                Use it as a reference for topics such as communication, how to get a social security number, opening a
                bank account, driving, etc. We hope you will bookmark this tool and find it useful as you strive to be a
                great household employer!
              </p>
            </div>

            {/* GPS - Grow, Perform, Succeed Plan (First Instance) */}
            <div className="mb-6">
              <h4 className="text-teal-500  mb-3 cursor-pointer underline font-inter font-semibold text-[16px] ">
                GPS - Grow, Perform, Succeed Plan
              </h4>
              <p className="text-[#525866] font-inter font-normal text-[16px]  leading-relaxed">
                In today's workplace, it is important to define what success looks like from the start in order to
                achieve better outcomes. Apex's GPS provides a clear communication plan that allows you to set clear
                expectations from the start and identify what success looks like for your Care Professional. It then
                provides you with a consistent feedback loop to offer your Care Professional the chance to give you
                feedback on how engaged and happy they are in their job and anything you can do to increase their "job
                joy". Your ACD will assist you in outlining the keys to success before your Care Professional's arrival
                and then you will have a review schedule with your Care Professional. We recommend, in addition to your
                Weekly 30-minute meeting, a GPS review check-in at 6 weeks, 3 months, 6 months, and 9 months to give and
                receive feedback on performance. But, you can opt to set a different schedule.
              </p>
            </div>

            {/* GPS - Grow, Perform, Succeed Plan (Second Instance) */}
            <div className="mb-6">
              <h4 className="text-teal-500  mb-3 cursor-pointer underline font-inter font-semibold text-[16px] ">
                GPS - Grow, Perform, Succeed Plan
              </h4>
              <p className="text-[#525866] font-inter font-normal text-[16px]  leading-relaxed">
                In today's workplace, it is important to define what success looks like from the start in order to
                achieve better outcomes. Apex's GPS provides a clear communication plan that allows you to set clear
                expectations from the start and identify what success looks like for your Care Professional. It then
                provides you with a consistent feedback loop to offer your Care Professional the chance to give you
                feedback on how engaged and happy they are in their job and anything you can do to increase their "job
                joy". Your ACD will assist you in outlining the keys to success before your Care Professional's arrival
                and then you will have a review schedule with your Care Professional. We recommend, in addition to your
                Weekly 30-minute meeting, a GPS review check-in at 6 weeks, 3 months, 6 months, and 9 months to give and
                receive feedback on performance. But, you can opt to set a different schedule.
              </p>
            </div>

            {/* GPS - Grow, Perform, Succeed Plan (Third Instance) */}
            <div className="mb-6">
              <h4 className="text-teal-500  mb-3 cursor-pointer underline font-inter font-semibold text-[16px] ">
                GPS - Grow, Perform, Succeed Plan
              </h4>
              <p className="text-[#525866] font-inter font-normal text-[16px]  leading-relaxed">
                In today's workplace, it is important to define what success looks like from the start in order to
                achieve better outcomes. Apex's GPS provides a clear communication plan that allows you to set clear
                expectations from the start and identify what success looks like for your Care Professional. It then
                provides you with a consistent feedback loop to offer your Care Professional the chance to give you
                feedback on how engaged and happy they are in their job and anything you can do to increase their "job
                joy". Your ACD will assist you in outlining the keys to success before your Care Professional's arrival
                and then you will have a review schedule with your Care Professional. We recommend, in addition to your
                Weekly 30-minute meeting, a GPS review check-in at 6 weeks, 3 months, 6 months, and 9 months to give and
                receive feedback on performance. But, you can opt to set a different schedule.
              </p>
            </div>

            {/* Weekly Meeting Guide */}
            <div className="mb-6">
              <h4 className="text-teal-500  mb-3 cursor-pointer underline font-inter font-semibold text-[16px] ">Weekly Meeting Guide</h4>
              <p className="text-[#525866] font-inter font-normal text-[16px]  leading-relaxed">
                Experienced host families agree - setting aside 30 minutes each week at the same time to meet with your
                Care Professional is a big key to a successful long-term placement. We all think we will communicate
                since we live in the same house - but that is not always easy! Download this weekly meeting guide and
                use it to set a rhythm of weekly communication that will keep your relationship with your Care
                Professional open and keep you all on the same page!
              </p>
            </div>

            {/* Communication Best Practices */}
            <div className="mb-8">
              <h4 className="text-teal-500  mb-3 cursor-pointer underline font-inter font-semibold text-[16px] ">
                Communication Best Practices
              </h4>
              <p className="text-[#525866] font-inter font-normal text-[16px]  leading-relaxed">
                Great communication is vital to ensuring a happy household and building a strong team together. It is
                important that you communicate regularly. When misunderstandings or problems arise, talk about them
                right away. That way, you can spend more time finding a solution rather than letting the tension build.
                Download some of our best practices for communicating.
              </p>
            </div>

            {/* PDF Documents */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <RiFileList2Fill className="lg:w-5 lg:h-5 w-8 h-8 text-red-500" />
                <a href='#'>
                  <span className="text-[#008BD3] font-medium cursor-pointer ">
                  Department of State Exchange Visitors' Program Welcome Brochure
                </span>
                </a>
              </div>
              <div className="flex items-center gap-3">
                <RiFileList2Fill className="lg:w-5 lg:h-5 w-8 h-8 text-red-500" />
                <a href='#'>
                  <span className="text-[#008BD3] font-medium cursor-pointer ">
                  Department of State Exchange Visitors' Program Welcome Brochure
                </span>
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      
    </div>
  )
}

export default ResourcesContent
