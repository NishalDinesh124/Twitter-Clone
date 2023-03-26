import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Signup.css';

function Signup() {
    const [name, setName] =useState('');
    const [userName, setUserName] =useState('');
    const [email , setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [month,setMonth] = useState('');
    const [day,setDay] =useState('');
    const [year,setYear] =useState('');
    const navigate = useNavigate();

    const handleLogin=()=>{
        navigate('/login')

    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        var date= month + - + day + - +year;
        console.log(date);
        axios({
            method : "post",
            url : "http://localhost:5000/signup",
           
            data : {
                twittername :userName,
                username: name ,
                email :email,
                password: password,
                dob : date
            }
        }).then((response)=>{
            if(response.data){
                alert("Email already exist")
            }else{
                alert("User added")
                navigate('/')
            }
        })
    }
        
    return (
        <div className="signup">
             <div className='container '>
           <form action="" onSubmit={handleSubmit}>
           <div className='signup-section'>
           <div className="top-section">
           <i class="fa-brands fa-twitter"></i>

           <h5>Join Twitter Today</h5>
           </div>
          

           
               <input type="text" value={name} placeholder='Name' onChange={(e)=>setName(e.target.value) } />
               <input type="text" value={userName} placeholder='Username' onChange={(e)=>setUserName(e.target.value) } />
               <input type="text" placeholder='Phone or Email' onChange={(e)=>setEmail(e.target.value) } />
               <input type="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value) } />
               <div className="term-sec">
               <h6>Date of birth</h6>
               <p>This will not be shown publicly. Confirn your own age, even if this <br /> account if for a business, a pet, or something else</p>
               </div>
               
               <div className="dob">
               <select name="Month" id="" onChange={(e)=>setMonth(e.target.value) }>
                   <option value=''>Month</option>
                   <option value="1">January</option>
                   <option value="2">February</option>
                   <option value="3">March</option>
                   <option value="4">April</option>
                   <option value="5">May</option>
                   <option value="6">June</option>
                   <option value="7">July</option>
                   <option value="8">August</option>
                   <option value="9">September</option>
                   <option value="10">October</option>
                   <option value="11">November</option>
                   <option value="12">December</option>

               </select>
               <select name="Day" id="" onChange={(e)=>setDay(e.target.value) }>
               <option value="">Day</option>
                   <option value="1">1</option>
                   <option value="2">2</option>
                   <option value="3">3</option>
                   <option value="4">4</option>
                   <option value="5">5</option>
                   <option value="6">6</option>
                   <option value="7">7</option>
                   <option value="8">8</option>
                   <option value="9">9</option>
                   <option value="10">10</option>
                   <option value="11">11</option>
                   <option value="12">12</option>
                   <option value="13">13</option>
                   <option value="14">14</option>
                   <option value="15">15</option>
                   <option value="16">16</option>
                   <option value="17">17</option>
                   <option value="18">18</option>
                   <option value="19">19</option>
                   <option value="20">20</option>
                   <option value="21">21</option>
                   <option value="22">22</option>
                   <option value="23">23</option>
                   <option value="24">24</option>
                   <option value="25">25</option>
                   <option value="26">26</option>
                   <option value="27">27</option>
                   <option value="28">28</option>
                   <option value="29">29</option>
                   <option value="30">30</option>
                   <option value="31">31</option>

               </select>
               
               <select name="Year" id="" onChange={(e)=>setYear(e.target.value) }>
               <option value="">Year</option>
                   <option value="2006">2006</option>
                   <option value="2007">2007</option>
                   <option value="2008">2008</option>
                   <option value="2009">2009</option>
                   <option value="2010">2010</option>
                   <option value="2011">2011</option>
                   <option value="2012">2012</option>
                   <option value="2013">2013</option>
                   <option value="2014">2014</option>
                   <option value="2015">2015</option>
                   <option value="2016">2016</option>
                   <option value="2017">2017</option>
                   <option value="2018">2018</option>

               </select>
               </div>
               
               <button type='submit' className='btn' >Signup</button>
               <span onClick={handleLogin}>Already have an account?</span>
              
           </div>
           </form>
       </div>
        </div>
       

    )}

export default Signup;
