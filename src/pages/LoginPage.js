import React, { useEffect, useState } from 'react'
import Img from "../assets/spotifyLogo-removebg-preview.png"
import "../styles/Login.css"
import {Link, useNavigate} from "react-router-dom"

const LoginPage = () => {
  
  const userList=JSON.parse(localStorage.getItem("users"));



  const navigate=useNavigate();

  const[token,setToken]=useState("")
  const[loggedUser,setLoggedUser]=useState({});

  useEffect(()=>{
      localStorage.setItem("token",token);
  },[token])

  useEffect(()=>{
    localStorage.setItem("loggedUser",JSON.stringify(loggedUser))
  },[loggedUser])

  const[res,setRes]=useState({
    email:"",
    password:""
  })

  const handleInput=(e)=>{
    const{name,value}=e.target;
    setRes({...res,[name]:value})
  }

  const handleSubmit=(e)=>{
    
    e.preventDefault();
    

    if(res.email==="" || res.password===""){
      alert("Put the credentials properly");
      return;
    }
  //  console.log(userList)
    let user=userList?.find(user=>user.email===res.email);
    if(user?user.password==res.password:alert("Signup to login the website")){
      let gentoken="Ravish"
      setToken(gentoken);
      setLoggedUser(user);
      console.log(gentoken)    
      window.location.reload();
    }
    else{
    alert("Invalid Username or Password");
    return;
  }
    
     
  }

  return (
    <div className="form-wrapper">
        <div className="left">
        <h1 style={{color:"white", fontSize:"2.5rem"}}>Spotify</h1>

            <img src={Img} alt="" />
        </div>
        <div className="right">
        <h1 style={{color:"white", margin:"30px 0"}}>Login Here</h1>
      <form onSubmit={handleSubmit}>
        
        <label htmlFor="email">Email:</label>
        <br />
        <input type="email" id="email" name="email" onChange={handleInput} value={res.email} placeholder="Enter Your Email"  />
        <br />
        
        <label htmlFor="password">Password:</label>
        <br />
        <input type="password" id="password" name="password"  onChange={handleInput} value={res.password} placeholder="Enter Your Password"  />
        <br />
        <div className="center">
         <button type='submit'>Login</button>

        <p style={{color:"white"}}>Do Not Have Account?<Link className="link" to="/signup" style={{ cursor:"pointer"}}> SignUp Here </Link> </p>
        </div>

        
      </form>
      </div>
    </div>
  )
}

export default LoginPage
