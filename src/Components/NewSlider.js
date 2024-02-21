import React, { useState, useEffect } from 'react';
import image01 from '../Assets/01.jpg';
import image02 from '../Assets/02.jpg';
import image03 from '../Assets/03.jpg';
import image04 from '../Assets/04.jpg';
import image05 from '../Assets/05.jpg';
import image06 from '../Assets/06.jpg';
import image07 from '../Assets/07.jpg';
import image08 from '../Assets/08.jpg';
import image09 from '../Assets/09.jpg';
import image10 from '../Assets/10.jpg';
import image11 from '../Assets/11.jpg';
import image12 from '../Assets/12.jpg';
import image13 from '../Assets/13.jpg';
// import image14 from '../Assets/14.jpeg';

const NewSlider = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [imageOpacity, setImageOpacity] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImageOpacity(0); 
      setTimeout(() => {
        setImageIndex((prevIndex) => (prevIndex + 1) % 10);
        setImageOpacity(1); 
      }, 1500);
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  const getImageName = (index) => {
    const images = [image09, image07, image11, image03, image04, image12, image01, image06, image05, image08, image10, image02, image13];
    return images[index];
  };

  const containerStyle = {
    width:"50%",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: '5vh'
  };

  const imageStyle = {
    width: 'auto', 
    height: 'auto',
    borderRadius: '10px', 
    transition: 'opacity 1s ease-in-out', 
    opacity: imageOpacity, 
  };

  return (
    <div style={containerStyle}>

      <img
        src={getImageName(imageIndex)}
        alt={`Image ${imageIndex}`}
        style={imageStyle}
      />
    </div>
  );
};

export default NewSlider;