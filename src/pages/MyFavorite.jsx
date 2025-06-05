import ProfileSideBar from '@/components/ProfileSidebar/ProfileSideBar'
import MyFavoriteContent from '@/components/MyFav/MyFavoriteContent'
import React from 'react'

const MyFavorite = () => {
  return (
    <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row  md:gap-2">
          <div className="w-full md:w-72 lg:w-80">
            <ProfileSideBar />
          </div>
          <div className="flex-1">
            <MyFavoriteContent  />
          </div>
        </div>
      </div>
  )
}

export default MyFavorite
