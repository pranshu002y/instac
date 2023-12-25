// eslint-disable-next-line no-unused-vars
import React, {useRef,useState,useEffect} from 'react';
import right from "./photos/right.png"
import left from "./photos/left.png"
import test_pp_icon from "./photos/1.jpg"
import kalra from "../src/photos/kalra.jpg"
import ap from "../src/photos/ap.jpg"
import bsdka from "../src/photos/bsdka.jpg"
import Cookies from 'js-cookie';
import StoryElement from "./StoryElement";


function StoryArea() {
    const { REACT_APP_API_PORT } = process.env;
    const [profiledata,setprofiledata] = useState();
    const [story,setstory] = useState();
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
       

        
      })
      .catch(error => {
       
        console.error(error);
       
      });
    },[]
    )


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


    const scrollRef = useRef();

    const scrollRight = () => {
        const element = scrollRef.current;
        element.scrollTo({
            left: element.scrollLeft + 325,
            behavior: 'smooth'
        });
    };
    const scrollLeft = () => {
        const element = scrollRef.current;
        element.scrollTo({
            left: element.scrollLeft - 325,
            behavior: 'smooth'
        });
    };

    return (
        <div>
            <div>
                <div className="story-left-button" onClick={scrollLeft}><img src={left} alt="left"/></div>
                <div className="story-area-box" ref={scrollRef}>

                <StoryElement profilePicture=  {profiledata && profiledata.ppLink}>
                       {profiledata && profiledata.userName}
                    </StoryElement>

                    {story && story.map((e)=>{
                        return(
                    <StoryElement profilePicture={e.storyUrl}>
                       {e.caption}
                    </StoryElement>)})}
                    
                   
                    

                </div>
                <div className="story-right-button" onClick={scrollRight}><img src={right} alt="right"/></div>
            </div>

        </div>
    );
}

export default StoryArea;
