import React from "react";
import { IoEyeSharp } from "react-icons/io5";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProfileContent from "../ProfileContent/ProfileContent";
import ContactInformation from "../ContactContent/ContactInformation ";
import DocumentContent from "../DocumentContent/DocumentContent";

const ProfileMainContent = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex-1 pt-4 ">
  <div className="mb-6 border-b-2 mt-[-24px] p-4 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
    <div className="flex ml-0 xs:mt-[15px] md:mt-0 sm:ml-[-15px] gap-2 sm:gap-[10px] items-center">
      <div className="bg-[#45B5AA]  w-[24px] h-[24px] rounded-full flex items-center justify-center">
        <IoEyeSharp className="h-4 w-4 text-white" />
      </div>
      <h1 className="font-inter font-semibold text-[18px]">
        View My Profile
      </h1>
    </div>
  </div>

  <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
  <TabsList className="flex  sm:flex-row gap-2 sm:gap-8 bg-transparent justify-start mb-6">
  <TabsTrigger
    value="profile"
    className="cursor-pointer font-medium text-[14px] font-inter data-[state=active]:text-[#0A0D14] text-[#525866] data-[state=active]:border-b-[#375DFB] border-2 rounded-none pb-2"
  >
    Profile
  </TabsTrigger>
  <TabsTrigger
    value="contact"
    className="cursor-pointer font-medium text-[14px] font-inter data-[state=active]:border-b-2 text-[#525866] data-[state=active]:border-b-[#375DFB] border-2 data-[state=active]:text-[#0A0D14] rounded-none pb-2"
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


    <TabsContent value="profile">
      <ProfileContent />
    </TabsContent>
    <TabsContent value="contact">
      <h1 className="p-3 font-inter text-[16px] font-semibold text-[#0A0D14]">Contact Information</h1>
      <ContactInformation/>
    </TabsContent>
    <TabsContent value="documents">
    <h1 className="p-3 font-inter text-[16px] font-semibold text-[#0A0D14]">Documents</h1>
    <DocumentContent/>
    </TabsContent>
  </Tabs>
</div>

  );
};

export default ProfileMainContent;
