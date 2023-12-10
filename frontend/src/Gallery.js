import React,{useState} from "react";
import "./Gallery.css"
const Gallery = () => {
    const [modalActive, setModalActive] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const images = [
    'https://res.cloudinary.com/dpiatasuq/image/upload/v1686292319/1683460340018_y3ha0u.jpg',
    'https://res.cloudinary.com/dpiatasuq/image/upload/v1686292681/imarohikhajuria-20230609-0001_vqp9a9.jpg',
    'https://res.cloudinary.com/dpiatasuq/image/upload/v1686292681/imarohikhajuria-20230609-0001_hjvbo5.jpg',
    'https://res.cloudinary.com/dpiatasuq/image/upload/v1686292681/imarohikhajuria-20230609-0001_hjvbo5.jpg',
    'https://res.cloudinary.com/dpiatasuq/image/upload/v1686292681/imarohikhajuria-20230609-0002_r1ak2k.jpg',
    'https://res.cloudinary.com/dpiatasuq/image/upload/v1686292682/imarohikhajuria-20230609-0002_uackd5.jpg',
    'https://res.cloudinary.com/dpiatasuq/image/upload/v1686292683/Snapchat-1113367730_uwviav.jpg',
    'https://res.cloudinary.com/dpiatasuq/image/upload/v1686292683/imarohikhajuria-20230609-0003_iu5jjw.jpg',
    'https://res.cloudinary.com/dpiatasuq/image/upload/v1686292690/Snapchat-1909245334_np4qvt.jpg',
  ];

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setModalActive(true);
  };

  const closeModal = () => {
    setModalActive(false);
  };

  
  return (
   
    <div className="lets">
      <div  onClick={closeModal} className={`modal ${modalActive ? 'active' : ''}`}>
        {/* <button className="btn" ></button> */}
        {selectedImage && <img src={selectedImage} alt="Selected" className="selected" />}
      </div>
      <section className="main">
        <div className="grid">
          {images.map((imageSrc, index) => (
            <img
              key={index}
              src={imageSrc}
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
