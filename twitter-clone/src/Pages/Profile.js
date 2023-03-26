import React from 'react'
import Profile from '../components/Profile/Profile'
import LeftSidebar from '../components/Sidebars/LeftSidebar'
import RightSidebar from '../components/Sidebars/RightSidebar'
import '../Pages/Home.css'
function ProfilePage() {
  return (
    <div>
        <div className='container'>
        <LeftSidebar/>
      <Profile/>
      <RightSidebar/>
      
        </div>
       
    </div>
  )
}

export default ProfilePage
