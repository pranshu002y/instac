import React, { useEffect, useState } from "react";
import "./Profile.css";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import Navbar from "./Navbar";
import "./Gallery.css";

const Gallery = () => {
  const { REACT_APP_API_PORT } = process.env;
  const [profiledata, setprofiledata] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const cookieData = Cookies.get('userID');
  const navigate = useNavigate();
  const [modalActive, setModalActive] = useState(false);

  useEffect(() => {
    fetch(`${REACT_APP_API_PORT}/users/getuser/${cookieData}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then(data => {
        setprofiledata(data.posts); // Assuming data is an object with a 'posts' property
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc.image); // Assuming each item has an 'image' property
    setModalActive(true);
  };

  const closeModal = () => {
    setModalActive(false);
  };

  return (
    <div className="lets">
      <div onClick={closeModal} className={`modal ${modalActive ? 'active' : ''}`}>
        {selectedImage && <img src={selectedImage} alt="Selected" className="selected" />}
      </div>
      <section className="main">
        <div className="grid">
          {profiledata.map((imageSrc, index) => (
            <img
              key={index}
              src={imageSrc.image} // Assuming each item has an 'image' property
              alt={`Image ${index}`}
              onClick={() => openModal(imageSrc)}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
