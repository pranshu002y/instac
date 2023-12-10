import React, { useEffect, useState } from "react";
import Cookies from 'js-cookie';
import MessageSendBox from './MessageSendBox';
import MessageElement from "./MessageElement";
function MessageArea({children,userName,pp}) {

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
  

    return (
      // <div className="lets-start">
 <div className="message-page-message-area-container">
            <div className="message-page-message-area-upper-bar">
                <img className="message-page-message-area-pp" src={pp} alt="pp"/>
                <div>{userName}</div>
            </div>
            <div className="message-page-message-area-messaging-area">
                {children}
               
            </div>
     
        </div>

      // </div>
       
    );
}

export default MessageArea;