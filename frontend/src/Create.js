import React, { useState } from "react";
import "./Create.css";
import Homeicon from "../src/Icons/home.png";
import SearchIcon from "../src/Icons/Search.png";
import Exploreicon from "../src/Icons/Explore.png";
import Messages from "../src/Icons/Messenger.png";
import Notifications from "../src/Icons/Notifications.png";
import createicon from "../src/Icons/New post.png";
import Instragramicon from "../src/Icons/Instagram.png";
import More from "../src/Icons/Settings.png";
import Iconsfromcreatemodal from "../src/Icons/Icon to represent media such as images or videos.png";
import InstagramIcon from "../src/Icons/Instagramlogo.png";
import Modal from "react-modal";
import { Link } from "react-router-dom";
// import { Profiledata } from '../data';
export default function Create() {
  

 
  return (
    <div className="mainsidebar">l
      <Modal
        
        style={{ overlay: { backgroundColor: "#2e2b2bc7" } }}
        className={"modalclassNameforAPost"}
      >
        <div style={{ flex: 1, height: "70vh" }}>
         
            <div>
              <p
                style={{
                  display: "flex",
                  alignItems: "center",
                  margin: "auto",
                  justifyContent: "center",
                  fontWeight: 600,
                  marginTop: -10,
                }}
              >
                Create new post
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  margin: "auto",
                  justifyContent: "center",
                  marginTop: -10,
                }}
              >
                <div style={{ marginTop: 240, marginLeft: 100 }}>
                  <img
                    src={Iconsfromcreatemodal}
                    style={{ marginLeft: 30 }}
                    alt=""
                  />
                  <p
                    style={{
                      fontWeight: "600",
                      marginLeft: "-40px",
                      fontSize: 18,
                    }}
                  >
                    Drag photos and videos here
                  </p>
                  <label htmlFor="file">
                    <div
                      style={{
                        backgroundColor: "#0095F6",
                        paddingLeft: 25,
                        marginLeft: -20,
                        borderRadius: 4,
                      }}
                    >
                      <p style={{ paddingTop: "6px", paddingBottom: "7px" }}>
                        Select from computer
                      </p>
                    </div>
                    <input
                      type="file"
                      name="file"
                      id="file"
                      accept="image/*"
                      
                      style={{ display: "none" }}
                    />
                  </label>
                </div>
              </div>
            </div>
         
            <div>
              <div style={{ display: "flex" }}>
               
                <div style={{ marginLeft: 20, width: "40%" }}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQATOWAXKfh8Bt6g6wp2nobJIWLTX5PQqcp3Q&usqp=CAU"
                      style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                        objectFit: "cover",
                      }}
                      alt=""
                    />
                    <p
                      style={{ marginLeft: 10, fontWeight: 600, fontSize: 16 }}
                    >
                      madan khadka
                    </p>
                  </div>
                  <textarea
                    type="text"
                    name="text"
                    id="text"
                    placeholder="Write a status for post"
                    className="textinputforpost"
                  />
                  <button className="createpost">Post</button>
                </div>
              </div>
            </div>
        
        </div>
      </Modal>
    </div>
  );
}
