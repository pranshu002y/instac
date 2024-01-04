import React , {useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import kalra from "../src/photos/kalra.jpg"
// import bsdka from "../src/photos/bsdka.jpg"
import ap from "../src/photos/ap.jpg"
import saru from "../src/photos/saru.jpg"
import Cookies from 'js-cookie';
function AvatarArea() {

    const { REACT_APP_API_PORT } = process.env;
    const [profiledata,setprofiledata] = useState();
    const [allusers,setallusers] = useState();
    const cookieData = Cookies.get('userID');
    // console.log("pranshu",cookieData);
    useEffect(()=>{
      fetch(`${REACT_APP_API_PORT}/users/getuser/${cookieData}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then(data => {
    
        setprofiledata(data)
       
        // console.log("stdata",data);
        
      })
      .catch(error => {
       
        console.error(error);
       
      });
    },[]
    )

    // /getalluser

    useEffect(()=>{
        fetch(`${REACT_APP_API_PORT}/users/getalluser`)
        .then(response => {
          if (!response.ok) {
            throw new Error(response.statusText);
          }
          return response.json();
        })
        .then(allusers => {
      
          setallusers(allusers)
         
          console.log("allusers",allusers);
          
        })
        .catch(error => {
         
          console.error(error);
         
        });
      },[]
      )

    const navigate = useNavigate();
    return (

        <div>
            <div className="avatar-area-main-box">
                <img className="profile_photo_small" src={profiledata && profiledata.ppLink} alt="logo"/>
                <div className="avatar-name">
                    <div id="linked-username" onClick={()=> navigate("/homepage/profile")}>{profiledata && profiledata.userName}</div>
                    <div className='li-av' style={{color: "#8e8e8e"}}>{profiledata && profiledata.name}</div>
                </div>
                <div className="profile-switch-and-follow-button">
                    <p onClick={() => navigate("/homepage/LoginPage")}>Switch</p></div>
            </div>
            <div style={{margin: "12px 0 12px", display: "flex"}}>
                <div style={{color: "#8e8e8e"}}>Suggestions for you</div>
                <div style={{marginLeft: "120px"}} onClick={() => navigate("/homepage/search")}>See All</div>
            </div>
            
            {allusers && allusers.map((e)=>{
return(
           
            <div className="avatar-area-suggestions">
            <img className="profile_photo_small" src={e.ppLink} alt="logo"/>
                <div className="avatar-name">
                    <div id="linked-username">{e.userName}</div>
                    <div className='li-av' style={{color: "#8e8e8e"}}>{e.name}</div>
                </div>
                <div className="profile-switch-and-follow-button"><span>Follow</span></div>
            </div>
 )})}
            
            
            
            
            
            <div className="all-gray">
                <div className="basic-link-help" style={{marginTop: "30px"}}>
                    <div><a href="frontend/src#">About</a></div>
                    <div>Help</div>
                    <div>Press</div>
                    <div>API</div>
                    <div>Jobs</div>
                    <div>Privacy</div>
                    <div>Terms</div>
                    <div>Locations</div>
                    <div>Language</div>
                </div>
                <div style={{marginTop: "30px"}}>© 2023 INSTAGRAM FROM META</div>
            </div>
        </div>
    );
}

export default AvatarArea;