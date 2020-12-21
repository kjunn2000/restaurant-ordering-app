import React, { useState } from "react";
import ImageUploader from "react-images-upload";

const Home = () => {
  const [images, setImages] = useState([]);

  const handleChange = (picture) => {
    setImages(picture);
    console.log(images);
  };

  
 
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Home Page</h1>
      <ImageUploader onChange={handleChange} withPreview={true} />
    </div>
  );
};

export default Home;
