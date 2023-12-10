import React,{useState,useEffect} from "react";
import "./Search.css"
const Reels = ()=>{
    const [reels,setReels] = useState();
    const [entry, setentry] = useState();
    
    useEffect(()=>{ 
        fetch(`https://jsonplaceholder.typicode.com/users/${entry}`)
        .then(r =>r.json())
        .then(post =>setReels(post))
        console.log(reels)
    },[])
    

    return(
        <div className="search">
            <div></div>
            <h1>
            Reels
            
            {/* {reels && reels.map((e)=>{
            return <div> */}
               <p>{reels && reels.name}</p>
                {/* </div>})} */}
               <input type="numer" onChange={(e)=>{setentry(e.target.value)}}/>

            </h1>
           
        </div>
    )
}
export default Reels;

// https://jsonplaceholder.typicode.com/posts