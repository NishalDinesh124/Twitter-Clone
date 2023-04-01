import React from 'react'
import './Profile.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState('');
  useEffect(() => {
    axios.get('http://localhost:5000/profile')
      .then((res) => {
        if (res.data) {
          setUser(res.data)
        }
        else {
          console.log("Error");
          navigate('/login')
        }
      })
  }, [])

  const handleChange = (e) => {
    let files = e.target.files
    if (files) {
      console.log("Image is there");
      const formData = new FormData();
      for (var x = 0; x < files.length; x++) {
        formData.append('files', files[x])
      }
      axios({
        method: "post",
        url: "http://localhost:5000/updateProfilePic",
        data: formData
      })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => console.log(err, "An error has occurred"))
    } else {
      console.log("Failed!!!!!!");
    }
  }
  return (
    <div>
      <div className='main-div'>
        <div className="profile-nav">
          <div className='back-arrow'>
            <i class="fa-solid fa-arrow-left"></i>
          </div>
          <div className='user'>
            <h5>{user.username}</h5>
            <p>0 tweets</p>
          </div>
        </div>
        <div className='banner'>
        </div>
        <div className="profile-pic" >
          <label>
            <input hidden
              type="file" id="file"
              onChange={handleChange}
            />
            <i class="fa-solid fa-plus"></i>
          </label>
        </div>
        <div className='info'>
          <div className='edit-btn'>
            <button className='btn'>Edit profile</button>
          </div>
          <div className="user-info">
            <h5>{user.username}</h5>
            <p>@{user.twittername}</p>
            <div className='acc-info'>
              <p><i class="fa-regular fa-calendar-days"></i> Joined June 2021</p>
              <div className="follow">
                <p><span>100</span> Followers</p>
                <p><span>12</span> Following</p>
              </div>
            </div>
          </div>
          <div className='acc-info'>
          </div>
        </div>
        <div className="suggestions">
        </div>
      </div>
    </div>
  )
}




export default Profile
