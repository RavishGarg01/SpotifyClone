import React from 'react'

const UserDataPage = () => {
  let loggedUser=localStorage.getItem("loggedUser");
  loggedUser=JSON.parse(loggedUser)
  console.log(loggedUser)
  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",width:"100%"}}>
        <div className="center-box" style={{height:"80%", width:"50%",backgroundColor:"gray",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",marginTop:"10vh"}}>
            <h1>User Profile</h1>
            <div className="profileImg" style={{backgroundColor:"black",height:"10rem",width:"10rem",borderRadius:"50%",margin:"20px",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:"5rem"}}><i class="fa-solid fa-user"></i></div>
           <h4>Name:{loggedUser.name}</h4>
           <h4>Email:{loggedUser.email}</h4>
           <h4>Phone:{loggedUser.phone}</h4>
           
           
      </div>
    </div>
  )
}

export default UserDataPage
