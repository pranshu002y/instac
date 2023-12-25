import React, { useState, useEffect } from "react";
import PostElement from "./PostElement";
import test_pp_icon from "./photos/1.jpg";
import kalra from "../src/photos/kalra.jpg";
import ap from "../src/photos/ap.jpg";
import bsdka from "../src/photos/bsdka.jpg";
import saru from "../src/photos/saru.jpg";
import test_post_video from "./posts/beautiful-nature-view-status-video-with-song-natureshort-shorts-854-ytshorts.savetube.me.mp4";
import Cookies from "js-cookie";
import video1 from "./posts/qw1.mp4";
import video2 from "./posts/qw2.mp4";

function PostArea() {
  const [profiledata, setprofiledata] = useState();
  // const cookieData = Cookies.get("userID");
  // console.log("pranshu",cookieData);
  const { REACT_APP_API_PORT } = process.env;
  useEffect(() => {
    fetch(`${REACT_APP_API_PORT}/post/getpost`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        setprofiledata(data);

        console.log("stdata",data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);


  const [allusers,setallusers] = useState();
  // const cookieData = Cookies.get('userID');
  // console.log("pranshu",cookieData);
  useEffect(()=>{
    fetch(`${REACT_APP_API_PORT}/users/getalluser`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then(data => {
  
      setallusers(data)
     
      // console.log("stdata",data);
      
    })
    .catch(error => {
     
      console.error(error);
     
    });
  },[]
  )
  
  return (
    <div>
      
      {/* {allusers && allusers.map((e)=>{
        return(
      <PostElement
        mediaType="video"
        media={video1}
        likeCount="10"
        profilePicture={e.ppLink}
        time="6s"
        username={e.userName}
        explanation="awwww"
      /> ) })} */}

      {profiledata && profiledata.map((e)=>{
        return(
        
      <PostElement
        media={e.image}
        likeCount="10"
        profilePicture={bsdka}
        time="6s"
        username="pranshu"
        explanation={e.postedBy}
      />
 ) })}
      
      {/* <PostElement
        media={
          "https://media.licdn.com/dms/image/C4D03AQET4T3BYPfIhA/profile-displayphoto-shrink_400_400/0/1656661976834?e=1691625600&v=beta&t=ZiUHdgEd1n5gm7CP35Mjs78irju6EEkY1hap0bIaQAo"
        }
        likeCount="10"
        profilePicture={profiledata && profiledata.ppLink}
        time="15s"
        username="Eshika Singha "
        explanation="aaaashuuuuuu..💔."
      /> */}

      <PostElement
        mediaType="video"
        media={video2}
        likeCount="10"
        profilePicture={test_pp_icon}
        time="6s"
        username="meowsarchod"
        explanation="awwww"
      />
    </div>
  );
}

export default PostArea;
