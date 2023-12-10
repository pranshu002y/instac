import React, { useState, useEffect } from "react";
import PostElement from "./PostElement";
import test_pp_icon from "./photos/1.jpg";
import kalra from "../src/photos/kalra.jpg";
import ap from "../src/photos/ap.jpg";
import bsdka from "../src/photos/bsdka.jpg";
import saru from "../src/photos/saru.jpg";
import test_post_video from "./posts/beautiful-nature-view-status-video-with-song-natureshort-shorts-854-ytshorts.savetube.me.mp4";
import Cookies from "js-cookie";

function PostArea() {
  const [profiledata, setprofiledata] = useState();
  const cookieData = Cookies.get("userID");
  // console.log("pranshu",cookieData);
  useEffect(() => {
    fetch(`http://localhost:5000/api/users/getuser/${cookieData}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        setprofiledata(data);

        // console.log("stdata",data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div>
      <PostElement
        media={bsdka}
        likeCount="10"
        profilePicture={bsdka}
        time="6s"
        username="pranshu"
        explanation="growing age..."
      />
      <PostElement
        media={ap}
        likeCount="10"
        profilePicture={ap}
        time="1hr"
        username="_arpita.rai"
        explanation="coming soon..."
      />
      <PostElement
        media={kalra}
        likeCount="10"
        profilePicture={kalra}
        time="15s"
        username="kalra"
        explanation="flaw..."
      />

      <PostElement
        media={saru}
        likeCount="100"
        profilePicture={saru}
        time="1s"
        username="akankshaaa_.04 "
        explanation="Aryan:❤💦"
      />

      <PostElement
        media={
          "https://media.licdn.com/dms/image/C4D03AQET4T3BYPfIhA/profile-displayphoto-shrink_400_400/0/1656661976834?e=1691625600&v=beta&t=ZiUHdgEd1n5gm7CP35Mjs78irju6EEkY1hap0bIaQAo"
        }
        likeCount="10"
        profilePicture={profiledata && profiledata.ppLink}
        time="15s"
        username="Eshika Singha "
        explanation="aaaashuuuuuu..💔."
      />

      <PostElement
        mediaType="video"
        media={test_post_video}
        likeCount="10"
        profilePicture={test_pp_icon}
        time="6s"
        username="akash_bsdka"
        explanation="awwww"
      />
    </div>
  );
}

export default PostArea;
