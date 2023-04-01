import React from 'react'
import { useSignOut } from 'react-auth-kit';
import { useNavigate } from 'react-router-dom'
import './LeftSidebar.css'
function LeftSidebar() {
  const navigate = useNavigate();
  const signOut = useSignOut();

   // logout //
   const logout=()=>{
    signOut();
    navigate("/login")
  }
  const profile=()=>{
    navigate('/profile')
  }
  return (
    <div className='left-section'>
      <div className="twitter-icon">
        <i classname="fa-brands fa-twitter"></i>
      </div>
      <div className="panel">
    
        <div className="home home-1">
          <i class="fa-solid fa-house-chimney-window" onClick={navigate('/')}></i>
          <div className="inner-home">
          <span href="#"> Home </span>
          </div>

        </div>
        <div className="home explore">
          <div>
          <i class="fa-solid fa-hashtag"></i>
   
          </div>
                   <div className="inner-home">
          <span href="#"> Explore </span>
          </div>
          
        </div>
        <div className="home notifications">
          <i class="fa-regular fa-bell"></i>
          <div className="inner-home">
          <span href="#"> Notifications </span>
          </div>
        </div>
        <div className="home messages">
          <i class="fa-regular fa-envelope"></i>
          <div className="inner-home">
          <span href="#"> Messages </span>
          </div>
        </div>
        <div className="home bookmarks">
          <i class="fa-regular fa-bookmark"></i>
          <div className="inner-home">
          <span href="#"> Bookmarks </span>
          </div>
        </div>
        <div className="home lists">
          <i class="fa-solid fa-list-ul"></i>
          <div className="inner-home">
          <span href="#"> Lists </span>
          </div>
        </div>
        <div className="home profile">
          <i class="fa-regular fa-user"></i>
          <div className="inner-home">
          <span href="#" onClick={profile}> Profile </span>
          </div>
        </div>
        <div className="home more">
          <i class="fa-regular fa-comment-dots"></i>
          <div className="inner-home">
          <span href="#" onClick={logout}> More </span>
          </div>
        </div>



      </div>
      <div className="tweet">
       <button className='tweet-btn'>
        Tweet
       </button>
      </div>


      <div className="account">
        
      </div>

    </div>
  )
}

export default LeftSidebar

