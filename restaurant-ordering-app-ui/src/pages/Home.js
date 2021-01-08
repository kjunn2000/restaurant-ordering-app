import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";


const Home = () => {
  const [images, setImages] = useState([]);
  const [role, setRole] = useState([]);

  const store = useSelector((state) => state.auth.role);
  
  useEffect(()=>{
    setRole(store);
  })

  const handleChange = (picture) => {
    setImages(picture);
    console.log(images);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1 className="text-white">Home Page</h1>
      <h2 className="text-white">{role}</h2>
     
    </div>
  );
};

export default Home;
