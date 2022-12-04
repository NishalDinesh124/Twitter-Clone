import React from 'react'
import RightSidebar from '../components/Sidebars/RightSidebar';
import LeftSidebar from '../components/Sidebars/LeftSidebar';
import Homepage from '../components/Homepage/Homepage';
import './Home.css'

function Home(props) {
  return (
    <div className='container'>
    <LeftSidebar/>
    <Homepage/>
    <RightSidebar/>
    </div>
  )
}

export default Home;

