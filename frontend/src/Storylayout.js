import React, { useState, useEffect } from "react";
import "./Search.css";
import "./reels.css";
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
const Storylayout = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const imageSrc  = location.state?.imageSrc ;

  const [story, setstory] = useState();

  const { REACT_APP_API_PORT } = process.env;
  useEffect(() => {
    fetch(`${REACT_APP_API_PORT}/post/getstory`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        setstory(data);

        console.log("story",story);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <div className="le" onClick={() => navigate("/homepage")}>
        <div className="app__videos-1">
         
              <main className="sti" key={"id"}>
                <div className="card-2">
                  <img src={imageSrc } />
                  <div className="card-content">
                    <h2></h2>
                    <p></p>
                    <a href="#">
                      <br />
                      <span className="material-symbols-outlined">
                     
                      </span>
                      <br></br>
                      <span className="material-symbols-outlined">
                      {"click anywhere to close"}
                      </span>
                    </a>
                  </div>
                </div>
              </main>
          
        </div>
      </div>
    </div>
  );
};
export default Storylayout;
