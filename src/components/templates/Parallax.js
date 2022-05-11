import React, { useEffect } from 'react';
import Header from "../atoms/Header"
import Button from "../atoms/Button"

const ParallaxImg = () => {

  return (
    <div
      className="flex items-center justify-center h-screen m-auto mb-20 bg-cover bg-center-top bg-fixed custom-img"
    >
      <div className="flex flex-col justify-center items-center m-auto p-5 bg-white bg-opacity-30 rounded-xl">
        <Header text="Parallax Section" size="1" />
        <Header text="Add some content here as a sub-header!" size="3" />
        <div className="m-2">
          <Button text="Learn More" type="secondaryBtn" />
        </div>
      </div>
    </div>
  )
};

export default ParallaxImg;
