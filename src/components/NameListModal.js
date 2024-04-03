import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function NameListModal(props) {
  
  let fetchedPlaylist=localStorage.getItem("playlist")
  fetchedPlaylist=JSON.parse(fetchedPlaylist);

  console.log(fetchedPlaylist,"fetchplaylist")

  let loggedUser=localStorage.getItem("loggedUser");
  loggedUser=JSON.parse(loggedUser);
  console.log(loggedUser,"loggedussr")

  let filterfetchedPlayList=fetchedPlaylist.filter(e=>e.userId===loggedUser.id)

  console.log(filterfetchedPlayList,"fetchhhhh")
  
  let user=localStorage.getItem("loggedUser");
  user=JSON.parse(user);
  // console.log(user,"1234")

  const[playListName,setPlayListName]=useState({
    name:"",
    songs:[],
    userId:0

  })
  




  const inputHandler=(e)=>{
   
   setPlayListName({
         id:Math.floor(Math.random()*1000),
         name:e.target.value,
         songs:[],
         userId:user.id
   });
  }
  console.log(playListName,"playlissssssssssssssssssssssssss");

  const SubmitHandler=()=>{

    if(fetchedPlaylist){
    localStorage.setItem("playlist",JSON.stringify([...fetchedPlaylist,playListName]))
    props.Songset([...filterfetchedPlayList,playListName])

    }else{
      localStorage.setItem("playlist",JSON.stringify([playListName]))
      props.Songset([...filterfetchedPlayList,playListName])
    }
    props.onHide();
  }



  return (
    <div>
       <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
     >
      <Modal.Header closeButton className='bg-dark text-white'>
        <Modal.Title id="contained-modal-title-vcenter" >
         Create PlayList
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='bg-dark text-white'>
        <h4>Give a name to your Playlist</h4>
        <input onChange={inputHandler} style={{width:"80%",padding:"10px"}}/>
      </Modal.Body>
      <Modal.Footer className='bg-dark text-white'>
        <Button onClick={SubmitHandler} >Create</Button>
        <Button onClick={props.onHide} className='btn-danger'>Close</Button>
      </Modal.Footer>
    </Modal>
    </div>
  )
}
