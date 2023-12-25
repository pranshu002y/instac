import React,{useState,useEffect} from "react";
import "./Search.css"
import "./reels.css"
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
const Storylayout = ()=>{
    const navigate = useNavigate();    
  const [isPlayed, setIsPlayed] = useState(false);
   ;
    const [story, setstory] = useState();
  // const cookieData = Cookies.get("userID");
  // console.log("pranshu",cookieData);
  const { REACT_APP_API_PORT } = process.env;
  useEffect(()=>{
    fetch(`${REACT_APP_API_PORT}/post/getstory`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then(data => {
  
      setstory(data)
     
      // console.log("stdata",data);
      
    })
    .catch(error => {
     
      console.error(error);
     
    });
  },[]
  )
    
const handleVideoClick = (event) => {
  const video = event.target;
  if (video.paused) {
    video.play();setIsPlayed(false);
  } else {
    video.pause();setIsPlayed(true);
  }
};

return (
    <div>
        
 <div className="le" onClick={()=>navigate("/homepage")}>
         
<div className="app__videos-1" >
    
    {story && story.map((e) => (
    <main key={e.id}>
       <div className="card-2">
         <img src={e.storyUrl}/>
         <div className="card-content">
           <h2></h2>
          <p> {e.caption}</p> 
           <a href="#">
             
             <br />
             <span className="material-symbols-outlined">
               Likes: {e.postedBy}
             </span>
             <br></br>
             <span className="material-symbols-outlined">
               Comments: {e._id}
             </span>
           </a>
         </div>
       </div>
     </main>
    ))}
   

     </div>
  </div>

    </div>
    
  

        
    )
}
export default Storylayout;

