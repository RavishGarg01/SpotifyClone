import React from 'react'

const UserDataPage = () => {
  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",width:"100%"}}>
        <div className="center-box" style={{height:"80%", width:"50%",backgroundColor:"gray",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",marginTop:"10vh"}}>
            <h1>User Profile</h1>
            <div className="profileImg" style={{backgroundColor:"black",height:"10rem",width:"10rem",borderRadius:"50%",margin:"20px",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:"5rem"}}><i class="fa-solid fa-user"></i></div>
           <h4>Name:Ravish Kumar</h4>
           <h4>Email:Ravish123@gmail.com</h4>
           <h4>Phone:999988887654</h4>
           
           
      </div>
    </div>
  )
}

export default UserDataPage
