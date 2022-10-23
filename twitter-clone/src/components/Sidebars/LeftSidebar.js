import React from 'react'
import './LeftSidebar.css'
function LeftSidebar() {
  return (
    <div className='left-section'>
      <div className="twitter-icon">
        <i class="fa-brands fa-twitter"></i>
      </div>
      <div className="panel">
    
        <div className="home home-1">
          <i class="fa-solid fa-house-chimney-window"></i>
          <div className="inner-home">
          <a href="#"> Home </a>
          </div>

        </div>
        <div className="home explore">
          <div>
          <i class="fa-solid fa-hashtag"></i>
   
          </div>
                   <div className="inner-home">
          <a href="#"> Explore </a>
          </div>
          
        </div>
        <div className="home notifications">
          <i class="fa-regular fa-bell"></i>
          <div className="inner-home">
          <a href="#"> Notifications </a>
          </div>
        </div>
        <div className="home messages">
          <i class="fa-regular fa-envelope"></i>
          <div className="inner-home">
          <a href="#"> Messages </a>
          </div>
        </div>
        <div className="home bookmarks">
          <i class="fa-regular fa-bookmark"></i>
          <div className="inner-home">
          <a href="#"> Bookmarks </a>
          </div>
        </div>
        <div className="home lists">
          <i class="fa-solid fa-list-ul"></i>
          <div className="inner-home">
          <a href="#"> Lists </a>
          </div>
        </div>
        <div className="home profile">
          <i class="fa-regular fa-user"></i>
          <div className="inner-home">
          <a href="#"> Profile </a>
          </div>
        </div>
        <div className="home more">
          <i class="fa-regular fa-comment-dots"></i>
          <div className="inner-home">
          <a href="#"> More </a>
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

