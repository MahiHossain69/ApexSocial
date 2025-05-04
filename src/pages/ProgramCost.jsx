import ProfileSideBar from '@/components/ProfileSidebar/ProfileSideBar'
import ProgramCostContent from '@/components/ProgramCost/ProgramCostContent'
import React, { useState } from 'react'

const ProgramCost = () => {
   
  return (
   <>
    <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row  md:gap-2">
          <div className="w-full md:w-72 lg:w-80">
            <ProfileSideBar />
          </div>
          <div className="flex-1">
            <ProgramCostContent  />
          </div>
        </div>
      </div>
   </>
  )
}

export default ProgramCost
