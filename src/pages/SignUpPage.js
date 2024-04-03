import React,{useEffect, useState} from "react";
import "../styles/Login.css"
import Img from "../assets/spotifyLogo-removebg-preview.png"
import { Link, useNavigate } from "react-router-dom";



const getLocalItems=()=>{
  let list=localStorage.getItem("users")
  if(list){
      return JSON.parse(list);
  }

  return [];
}
const SignUpPage = () => {

   const navigate=useNavigate();

  const [arr, setarr] = useState(getLocalItems)
  const[record,setRecord]=useState({
    id:"",
    name:"",
    email:"",
    phone:"",
    password:"",
    confirm:"",
  

  })

 

  const inputHandler=(e)=>{
    const{name,value}=e.target;
    setRecord({...record,id:arr.length+1,[name]:value})
    
  }

  console.log(record)

  const SubmitHandler=(e)=>{
    e.preventDefault();
     if(record.password!==record.confirm){
      alert("Password and Confirm Password did not match");
      return;
     }

     if(record.phone.length!==10){
       alert("Enter Correct phone Number")
       return;
     }
    
    
     
    setarr([...arr,record])
    

  
   
   
    setRecord({
      name:"",
      email:"",
      phone:"",
      password:"",
      confirm:""
    })

    // navigate("/")
     
  }

  useEffect(()=>{
    console.log(arr);
    localStorage.setItem("users",JSON.stringify(arr))
    
 },[arr])


  //  let userList=localStorage.getItem("users");
  //  if(userList){
  //  navigate("/");
  //  }


  

 

  return (
    <div className="form-wrapper">
        <div className="left">
        <h1 style={{color:"white", fontSize:"2.5rem"}}>Spotify</h1>

            <img src={Img} alt="" />
        </div>
        <div className="right">
        <h2 style={{color:"white", margin:"20px 0"}}>SignUp Here</h2>
      <form  onSubmit={SubmitHandler}>
        <label htmlFor="fname">First name:</label>
        <br />
        <input type="text" id="name"  name="name" value={record.name} onChange={inputHandler} placeholder="Enter Your  Name" required />
        <br />
        <label htmlFor="lname">Email:</label>
        <br />
        <input type="text" id="lname" name="email" value={record.email} onChange={inputHandler} placeholder="Enter Your Email" required  />
        <br />
        <label htmlFor="lname">Phone:</label>
        <br />
        <input type="text" id="lname" name="phone" value={record.phone} onChange={inputHandler} placeholder="Enter Your Phone Number" required  />
        <br />
        <label htmlFor="lname">Password:</label>
        <br />
        <input type="text" id="lname" name="password" value={record.password} onChange={inputHandler} placeholder="Enter Your Password"  />
        <br/>
        <label htmlFor="lname">Confirm Password:</label>
        <br />
        <input type="text" id="lname" name="confirm"  value={record.confirm} onChange={inputHandler} placeholder="Enter Password again" required />
        <br />
        

        <div className="center">
        <button>Sign Up</button>

        <p  style={{color:"white"}}><Link className="link" to="/" style={{ cursor:"pointer"}}>Go Back to Login </Link> </p>
        </div>

      </form>
      </div>
    </div>
  );
};

export default SignUpPage;

