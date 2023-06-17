import React from 'react'
import './Login.css'
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
//import Signup from '../Signup/Signup';
import axios from 'axios';
import { useSignIn } from 'react-auth-kit';

function Login() {
    const [twittername, setName] =useState('');
    const [email , setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate= useNavigate();
    const signIn = useSignIn()

    const handleSignup=()=>{
     navigate('/signup')
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        axios({
            method: "post",
            url : "http://localhost:5000/login",
            data:{
                username: twittername,
                password: password,
                email:email
            }
        })
        .then((res)=>{
            console.log("Working");
            if(res.data){
                console.log("Response",res.data);
                signIn({
                    token : res.data.token,
                    expiresIn: 3600,
                    tokenType: "Bearer",
                    authState: {email: email},
                })
                navigate('/')
            }else{
                console.log("Invalid username or password");
                alert("Invalid username or password")
            }
        })
    }
  return (
    <div>
       <div className="signup">
             <div className='container '>
           <form onSubmit={handleSubmit}>
           <div className='login-section'>
           <div className="top-section">
           <i class="fa-brands fa-twitter"></i>

           <h5>Login to Twitter</h5>
           </div>
           <input type="text" value={twittername} placeholder='Name' onChange={(e)=>setName(e.target.value) } />
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
