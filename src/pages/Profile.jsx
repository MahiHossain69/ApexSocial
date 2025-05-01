import ProfileMainContent from '@/components/ProfileMainContent/ProfileMainContent'
import ProfileSideBar from '@/components/ProfileSidebar/ProfileSideBar'
import { useState } from "react"

const Profile = () => {
    const [activeTab, setActiveTab] = useState("profile")
  return (
    <>
     <div className="container mx-auto px-4 py-6">
     <div className="flex flex-col md:flex-row flex-1">
        <ProfileSideBar />
        <ProfileMainContent activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
     </div>
    </>
  )
}

export default Profile
