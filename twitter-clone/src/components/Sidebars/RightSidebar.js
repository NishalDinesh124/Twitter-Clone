import React, { useState } from 'react'
import './RightSidebar.css'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
function RightSidebar() {

  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/users')
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
        
       

      </div>
    </div>
  )
}

export default RightSidebar
