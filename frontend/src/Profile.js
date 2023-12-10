import React, { useEffect, useState } from "react";
import "./Profile.css";
import saru from "../src/photos/saru.jpg"
import Gallery from "../src/Gallery";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';

// import Sidebar from '../../Components/Sidebar/Sidebar'
// import SettingIcon from "../src/Icons/Settingslogo.png"
// import Explorepost from '../../Components/ExplorePost/Explorepost'
// import { PostExplore } from '../../Components/data'
export default function Profile() {
  const [profiledata,setprofiledata] = useState();
  const cookieData = Cookies.get('userID');
  // console.log("pranshu",cookieData);
  useEffect(()=>{
    fetch(`http://localhost:5000/api/users/getuser/${cookieData}`)
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
  console.log("stdata",profiledata);

  const navigate = useNavigate();
  return (
    <div>
      <div>
        <div className="homesubcontainer">
          <div className="Profilerightbar">
            <div className="subProfilerightbar">
              <div>
                <img
                  src={profiledata && profiledata.ppLink}
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                    borderRadius: "50%",
                  }}
                  alt=""
                />
              </div>
              <div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <p style={{ marginLeft: 100 }}>{profiledata && profiledata.userName}</p>
                  <button
                    style={{
                      paddingLeft: 10,
                      marginLeft: 20,
                      paddingRight: 20,
                      paddingTop: 8,
                      paddingBottom: 8,
                      borderRadius: 10,
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    Edit profile
                  </button>
                  <img src={"https://i.pinimg.com/originals/4d/e3/b0/4de3b0d729c8740204f76a2bfe1d5d7a.png"} style={{marginLeft:20 , cursor:"pointer", width:"50px"}} alt="" onClick={()=>navigate("/homepage/more")}/>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <p style={{ marginLeft: 100 }}>{profiledata && profiledata.posts.length || "1"}</p>
                  <p style={{ marginLeft: 40 }}>200k Followers</p>
                  <p style={{ marginLeft: 40 }}>10k Following</p>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <p style={{ marginLeft: 100, marginTop: 10 }}>
                {profiledata && profiledata.bio}
                  </p>
                </div>
              </div>
            </div>

           
          </div>
        </div>
      </div>
      <div className='postContainerForProfile'>
                  <Gallery/>
              </div>
    </div>
  );
}
