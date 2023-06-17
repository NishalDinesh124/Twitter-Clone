import React, { useState } from 'react'
import './RightSidebar.css'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
function RightSidebar() {

  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  const addFollow = (name)=>{
    console.log(name);
    axios({
      method: "post",
      url: "http://localhost:5000/follow",
      data: {
        name
      }
    })
    .then((res)=>{
      console.log(res.data)
    })
   }

  useEffect(() => {
    axios.post('http://localhost:5000/users')
      .then((res) => {
        if (res.data) {
          console.log(res.data);
          setUsers(res.data)
        }
        else {
          console.log("Error");
          navigate('/login')
        }
      })
  }, [])

  
 
  return (
    <div className='right-section'>
      <div className="search-bar">
        <div className="search-icon">
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        <input type="text" className='search-holder' placeholder='Search Twitter'>
        </input>
      </div>
      <div className="flw-suggestions">
      <div className="heading">
          <h4>You might like</h4>
        </div>
     
      
      {users.map((users)=>{
        return(

       
        <div className="acc-name">
          <div className="acc-img">
            <div className="round-img">

            </div>

          </div>
          <div className="acc-details">
            <p className='username'>{users.username}</p>
            <p className='twt-name'>@{users.twittername}</p>
          </div>
          <div className="flw-btn">
            <button className='btn' onClick={()=> addFollow(users.twittername)}>follow</button>
          </div>
        </div>
        )
      })}
       </div>
      
    </div>
  )
}

export default RightSidebar
