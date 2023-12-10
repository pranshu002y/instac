// import React, { useEffect, useRef, useState } from 'react';
// import $ from 'jquery';
// import 'flickity'; // Import the Flickity CSS file
// import './Slider.css'; // Import the Slider CSS file

// const Slider = () => {
//   const sliderRef = useRef(null);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const images = [
//     'https://source.unsplash.com/300x700/?mountains?sig=947',
//     'https://source.unsplash.com/300x700/?nature?sig=993',
//     'https://source.unsplash.com/300x700/?kitten?sig=776',
//     'https://source.unsplash.com/300x700/?switzerland?sig=562',
//   ];

//   useEffect(() => {
//     const time = 5;
//     let isPause, tick, percentTime;

//     $(document).ready(() => {
//       const $slider = $(sliderRef.current);

//       $slider.flickity({
//         wrapAround: true,
//         prevNextButtons: true, // Show the previous and next buttons
//         autoPlay: time * 1000, // Set the autoplay duration in milliseconds
//         pauseAutoPlayOnHover: false, // Disable pause on hover
//         draggable: true, // Enable dragging the slider
//       });

//       const $bar = $(".slider-progress .progress");

//       $slider.on('mouseleave', () => {
//         isPause = false;
//       });

//       function startProgressbar() {
//         resetProgressbar();
//         percentTime = 0;
//         isPause = false;
//         tick = setInterval(interval, 10);
//       }

//       function interval() {
//         if (isPause === false) {
//           percentTime += 1 / (time + 0.1);
//           $bar.css({
//             width: percentTime + "%"
//           });
//           if (percentTime >= 100) {
//             $slider.flickity("next", true);
//             startProgressbar();
//           }
//         }
//       }

//       function resetProgressbar() {
//         $bar.css({
//           width: 0 + "%"
//         });
//         clearTimeout(tick);
//       }

//       startProgressbar();
//     });
//   }, []);

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     $(sliderRef.current).flickity('next');
//   };

//   return (
//     <div className="story-container" ref={sliderRef}>
//       {images.map((image, index) => (
//         <div className="story-item" key={index}>
//           <div className="indicator">
//             {images.map((_, dotIndex) => (
//               <div
//                 key={dotIndex}
//                 className={`indicator-dot ${dotIndex === currentIndex ? 'active' : ''}`}
//                 onClick={() => {
//                   setCurrentIndex(dotIndex);
//                   $(sliderRef.current).flickity('select', dotIndex);
//                 }}
//               ></div>
//             ))}
//           </div>
//           <div className="slider-progress">
//             <div className="progress"></div>
//           </div>
//           <img src={image} alt="Story" />
//         </div>
//       ))}
//       <button className="prev-button" onClick={() => $(sliderRef.current).flickity('previous')}>
//         Previous
//       </button>
//       <button className="next-button" onClick={handleNext}>
//         Next
//       </button>
//     </div>
//   );
// };

// export default Slider;
