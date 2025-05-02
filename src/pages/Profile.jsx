import ProfileMainContent from '@/components/ProfileMainContent/ProfileMainContent'
import ProfileSideBar from '@/components/ProfileSidebar/ProfileSideBar'
import { useState } from "react"

const Profile = () => {
  const [activeTab, setActiveTab] = useState("profile")

  return (
    <>
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row  md:gap-2">
          <div className="w-full md:w-72 lg:w-80">
            <ProfileSideBar />
          </div>
          <div className="flex-1">
            <ProfileMainContent activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
