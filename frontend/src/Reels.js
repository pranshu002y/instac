import React,{useState,useEffect} from "react";
import "./Search.css"
import "./reels.css"
import Navbar from "./Navbar";

const Reels = ()=>{
    
  const [isPlayed, setIsPlayed] = useState(false);
   ;
    const [reels, setReels] = useState();
  // const cookieData = Cookies.get("userID");
  // console.log("pranshu",cookieData);
  const { REACT_APP_API_PORT } = process.env;
  useEffect(() => {
    fetch(`${REACT_APP_API_PORT}/post/getReel`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        setReels(data);

        console.log("stdata",data);
        
      })
      .catch((error) => {
        console.error(error);
      });
      
  }, []);
  
    
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
<div className="homepage-box-container">
                <div>
                    <div className="homepage-navbar">
                        <Navbar/>
                    </div>
                </div>
        </div>
      


  <div className="lets">
    
 <div className="app__videos">
    
 {reels && reels.map((e) => (
 <main key={e.id}>
    <div className="card-2">
      <video autoPlay loop  onClick={handleVideoClick} src={e.videoUrl}/>
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

  

  
 

 {/* {reels && reels.map((e) => (
  <main key={e.id}>
    <div className="card-2">
      <img src={e.urls.raw} alt="" />
      <div className="card-content">
        <h2>{e.user.instagram_username}</h2>
       <p> hell</p> 
        <a href="#">
          {e.alt_description}
          <br />
          <span className="material-symbols-outlined">
            Likes: {e.likes}
          </span>
        </a>
      </div>
    </div>
  </main>
))} */}

    
  </div>
 </div>

  </div>
  

        
    )
}
export default Reels;

