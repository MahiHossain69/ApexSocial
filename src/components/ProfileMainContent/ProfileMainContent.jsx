import React from 'react'
import { IoEyeSharp } from "react-icons/io5";
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import ProfileContent from '../ProfileContent/ProfileContent'

const ProfileMainContent = ({ activeTab, setActiveTab }) => {
  return (
    
         <div className="flex-1 p-4 md:p-6">
      <div className="mb-6 border-b-2 mt-[-24px] p-4 flex items-center">
        
        <div className="flex ml-[-15px] gap-[10px] items-center">
            <div className="bg-[#45B5AA] w-[24px] h-[24px] rounded-full">
            <IoEyeSharp className="h-4 w-4 text-center mt-[4px] ml-[4px] text-white" />
            </div>
            <h1 className='font-inter font-semibold text-[18px]'>View My Profile</h1>

        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="border-b-amber-300 xs:gap-4 bg-transparent justify-start  mb-6 gap-8">
          <TabsTrigger
            value="profile"
            className=" cursor-pointer font-medium text-[14px] font-inter data-[state=active]:text-[#0A0D14] text-[#525866] data-[state=active]:border-b-[#375DFB] border-2 rounded-none pb-2"
          >
            Profile
          </TabsTrigger>
          <TabsTrigger
            value="contact"
            className="cursor-pointer font-medium text-[14px]  font-inter data-[state=active]:border-b-2 text-[#525866] data-[state=active]:border-b-[#375DFB] border-2 data-[state=active]:text-[#0A0D14] rounded-none pb-2"
          >
            Contact Information
          </TabsTrigger>
          <TabsTrigger
            value="documents"
            className="cursor-pointer font-inter text-[14px] font-medium data-[state=active]:border-b-2 text-[#525866] data-[state=active]:border-b-[#375DFB] border-2 data-[state=active]:text-[#0A0D14] rounded-none pb-2"
          >
            Documents
          </TabsTrigger>
        </TabsList>

        <TabsContent  value="profile">
          <ProfileContent />
        </TabsContent>
        <TabsContent value="contact">
          <div className="p-4 text-center text-gray-500">Contact Information Content</div>
        </TabsContent>
        <TabsContent value="documents">
          <div className="p-4 text-center text-gray-500">Documents Content</div>
        </TabsContent>
      </Tabs>
    </div>
  
  
  )
}

export default ProfileMainContent
