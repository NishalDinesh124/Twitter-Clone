import React from 'react'
import './Login.css'
import { useState } from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import Signup from '../Signup/Signup';
import axios from 'axios';

function Login() {
    const [name, setName] =useState('');
    const [email , setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate= useNavigate();

    const handleSignup=()=>{
     navigate('/signup')
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        axios({
            method: "post",
            url : "http://localhost:5000/login",
            data:{
                username: name,
                password: password,
                email:email
            }
        })
        .then((response)=>{
            if(response.data){
                navigate('/')
            }else{
                console.log("Inavlid email or password");
                alert("Invalid email or password")
            }
        })
    }
  return (
    <div>
       <div className="signup">
             <div className='container '>
           <form action="" onSubmit={handleSubmit}>
           <div className='login-section'>
           <div className="top-section">
           <i class="fa-brands fa-twitter"></i>

           <h5>Login to Twitter</h5>
           </div>
          

           
               <input type="text" value={name} placeholder='Name' onChange={(e)=>setName(e.target.value) } />
               <input type="text" placeholder='Email' onChange={(e)=>setEmail(e.target.value) } />
               <input type="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value) } />
             
               
               
               
               <button type='submit' className='btn' >Signup</button>
               <span onClick={handleSignup}>Dont have an account?</span>
              
           </div>
           </form>
       </div>
        </div>
    </div>
  )
}

export default Login
