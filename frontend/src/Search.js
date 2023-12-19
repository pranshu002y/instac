import React,{useState,useEffect} from "react";
import Navbar from "./Navbar";

import "./Search.css"
const Search = ()=>{

  const [reels,setReels] = useState();
  useEffect(()=>{ 
      fetch("https://api.unsplash.com/photos/?client_id=lCRj-Mv0lFa6C2e5D1KntRtPIviTnTt1en2VCePfzU8")
      .then(r =>r.json())
      .then(post =>setReels(post))
      console.log(reels)
  },[])

    return(
        <div>
          <div className="homepage-box-container">
                <div>
                    <div className="homepage-navbar">
                        <Navbar/>
                    </div>
                </div>
        </div>
        <div></div>
        <div className="image-gallery">
            {reels && reels.map((e)=>{
                return(
  <div className="image-box">
    <img src={e.urls.regular} alt="img.jpg" />
    <div className="overlay"> 
      <div className="details">
        <h3 className="title">
          <a href="#" className="img-like">Likes:{e.likes}</a>
        </h3>
        <span className="Comments">
          <a href="#" >comments:3</a>
        </span>
      </div>
    </div>
  </div>)})}
  
</div>
    </div>
    )
}
export default Search;