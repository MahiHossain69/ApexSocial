import Candidate from '@/components/Candidate/Candidate'
import MobPagination from '@/components/MobPagi/MobPagination'
import SideBar from '@/components/SideBar/SideBar'
import React from 'react'

const Home = () => {
  return (
    <>
     <div className="container mx-auto px-4 py-6">
     <div className="flex flex-col md:flex-row gap-6">
     <div className="w-full md:w-72 lg:w-80">
          <SideBar />
        </div>
        <div className="flex-1">
        <div className="md:hidden mb-6">
            <MobPagination
              totalItems={67}
              itemsPerPage={7}
              currentPage={1}
              onPageChange={() => {}}
              onItemsPerPageChange={() => {}}
            />
          </div>
          <Candidate />
        </div>
     </div>
     </div>
    </>
  )
}

export default Home
