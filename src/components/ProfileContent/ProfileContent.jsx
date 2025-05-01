import React from 'react'
import Pro1 from "../../assets/pro1.png"
import Pro2 from "../../assets/pro2.png"
import Pro3 from "../../assets/pro3.png"
import Pro4 from "../../assets/pro4.png"
import Pro5 from "../../assets/pro5.png"
import { InfoIcon } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { GoVideo } from "react-icons/go";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'

const ProfileContent = () => {
  return (
    <div className=''>
      <Card className="border rounded-lg p-6">
      <div className="mb-6">
        <h3 className="text-[#525866] font-inter font-medium bg-[#F6F8FA] pl-[17px] pt-[8px] rounded-lg w-[413px] h-[36px] text-[14px] mb-4">Dad's Family from Sometown, FL, United States (ID #345010)</h3>
      </div>

      <div className="flex flex-col md:flex-row items-start gap-6 mt-[-25px] mb-8">
      
      {/* Left Side - Image & Thumbnails */}
      <div className="w-full md:w-[200px]">
        <img
          src={Pro1}
          alt="Profile"
          className="w-full h-auto max-w-[180px] rounded-lg object-cover"
        />

        <div className="flex gap-2 mt-4">
          {[Pro2, Pro3, Pro4, Pro5].map((img, idx) => (
            <div key={idx} className="w-9 h-9 rounded-md overflow-hidden">
              <img
                src={img}
                alt={`Thumbnail ${idx}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Right Side - Text */}
      <div className="flex-1 mx-auto">
        <h2 className="text-[18px] sm:text-[20px] font-inter font-bold text-[#0A0D14] mb-4">
          Dr. Hartman Personality Analysis{" "}
          <span className="font-normal font-inter text-[20px]">(The Color Code)</span>
        </h2>

        <div className="space-y-4 mb-6">
          <div className="flex items-center gap-4">
            <span className="min-w-[110px] text-[#0A0D14] font-inter text-[14px]  font-medium">Primary Color :</span>
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-blue-600"></span>
              <span className='font-inter font-normal text-[14px] text-[#0A0D14]'>Blue</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="min-w-[110px] text-[#0A0D14] font-inter text-[14px]  font-medium">Secondary Color :</span>
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-yellow-500"></span>
              <span className='font-inter font-normal text-[14px] text-[#0A0D14]'>Yellow (Motivated by Fun)</span>
            </div>
          </div>
        </div>

        <Button className="bg-teal-500 hover:bg-teal-600 font-inter font-medium text-[14px] text-white px-4 py-2 rounded-md">
          <GoVideo className="h-4 text-white w-4 mr-2" />
          View Video
        </Button>
      </div>
    </div>

      <div className="grid mt-[-15px] grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <InfoIcon className="h-5 w-5 text-teal-500" />
            <h3 className="text-[20px] font-inter text-[#0A0D14] font-semibold">Family Information</h3>
          </div>

          <div className="bg-gray-50 w-[222px] h-[34px] p-3 rounded-md mb-4">
            <div className="flex gap-[5px] mt-[-5px]">
              <span className="text-[14px] text-[#525866] font-inter font-normal ">Start:</span>
              <span className="text-[14px] font-medium font-inter text-[#0A0D14]">Mar 2025</span>
            </div>
          </div>

          <ul className="space-y-2 text-[#525866] font-inter font-normal text-[16px] list-disc pl-6">
            <li>From FL, United States</li>
            <li>Married</li>
            <li>Speaks English and German</li>
            <li>3 Children</li>
            <li>Age of kids: 23 years</li>
            <li>Both parents working from home</li>
          </ul>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-4">
            <InfoIcon className="h-5 w-5 text-teal-500" />
            <h3 className="text-[20px] font-inter text-[#0A0D14] font-semibold">Care Professional Criteria</h3>
          </div>

          <ul className="space-y-2 text-[#525866] font-inter font-normal text-[16px] list-disc pl-6">
            <li>Female or Male candidates</li>
            <li>Desired languages English</li>
            <li>Swimming skills required</li>
            <li>Smokers accepted</li>
            <li>Driving license not needed</li>
          </ul>
        </div>
      </div>


      <div className="">

      <Accordion type="single" collapsible className="mt-8">
                <AccordionItem value="family-letters" className="border mb-[10px] rounded-md px-2">
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-2">
                      <div className="bg-teal-100 rounded-full p-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-500">
                          <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"/>
                          <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10"/>
                        </svg>
                      </div>
                      Family Letters
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4">
                    Family letters content goes here
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="parents-info" className="border mb-[10px] rounded-md px-2">
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-2">
                      <div className="bg-teal-100 rounded-full p-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-500">
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                          <circle cx="9" cy="7" r="4"/>
                          <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                        </svg>
                      </div>
                      Parents Information
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4">
                    Parents information content goes here
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="children-info" className="border mb-[10px] rounded-md px-2">
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-2">
                      <div className="bg-teal-100 rounded-full p-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-500">
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
                        </svg>
                      </div>
                      Children Information
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4">
                    Children information content goes here
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="host-family" className="border mb-[10px] rounded-md px-2">
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-2">
                      <div className="bg-teal-100 rounded-full p-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-500">
                          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                          <polyline points="9 22 9 12 15 12 15 22"/>
                        </svg>
                      </div>
                      Host Family Background
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <p className="text-sm text-gray-600">Languages</p>
                        <p>English and German</p>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm text-gray-600">Hobbies</p>
                        <p>Animals</p>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm text-gray-600">Dietary Restrictions</p>
                        <p>None</p>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm text-gray-600">Kind of Pets</p>
                        <p>Cats</p>
                      </div>
                      <div className="col-span-2 space-y-2">
                        <p className="text-sm text-gray-600">Current/Past Childcare arrangements</p>
                        <p>Pregnant, Grandparents</p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="childcare-needs" className="border mb-[10px] rounded-md px-2">
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-2">
                      <div className="bg-teal-100 rounded-full p-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-500">
                          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>
                        </svg>
                      </div>
                      Childcare Needs
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4">
                    Childcare needs content goes here
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="selection-criteria" className="border mb-[10px] rounded-md px-2">
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-2">
                      <div className="bg-teal-100 rounded-full p-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-500">
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                          <circle cx="9" cy="7" r="4"/>
                          <line x1="19" x2="19" y1="8" y2="14"/>
                          <line x1="22" x2="16" y1="11" y2="11"/>
                        </svg>
                      </div>
                      Care Professional Selection Criteria
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4">
                    Selection criteria content goes here
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="future-care" className="border last:border-b-1  mb-[10px] rounded-md px-2">
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-2">
                      <div className="bg-teal-100 rounded-full p-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-500">
                          <circle cx="12" cy="12" r="10"/>
                          <path d="M12 16v-4"/>
                          <path d="M12 8h.01"/>
                        </svg>
                      </div>
                      About the Future Care Professional
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4">
                    Future care professional content goes here
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
      </div>
    </Card>
    </div>
  )
}

export default ProfileContent
