import React, { useEffect, useState } from "react";
import Cookies from 'js-cookie';
import MessageSendBox from './MessageSendBox';
import MessageElement from "./MessageElement";
import Navbar from "./Navbar";
import MessagesPage from "./MessagesPage";

function MessageArea({children,userName,pp}) {
  const { REACT_APP_API_PORT } = process.env;
  const [profiledata,setprofiledata] = useState();

  const cookieData = Cookies.get('userID');


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
     
  
      
    })
    .catch(error => {
     
      console.error(error);
     
    });
  },[]
  )
  console.log("pranshu",profiledata);


    return (

      <div>
        <div className="homepage-box-container">
                <div>
                    <div className="homepage-navbar">
                        <Navbar/>
                    </div>
                </div>
        </div>
        <div className="message-page-message-area-container">
            <div className="message-page-message-area-upper-bar">
                <img className="message-page-message-area-pp" src={profiledata && profiledata.ppLink} alt="pp"/>
                <div>{profiledata && profiledata.userName}</div>
            </div>
            
     
            <div className="message-page-message-area-messaging-area">
                {children}
            </div>
           
            
     
        </div>
      </div>
      
       
    );
}

export default MessageArea;