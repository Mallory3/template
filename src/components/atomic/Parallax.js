import React, { useEffect } from 'react';
import Header from "./Header"
import Button from "./Button"

const parallaxImgPath = '../images/parallax.jpeg'

const ParallaxImg = () => {

  return (
    <section
      class="flex items-center justify-center h-screen m-auto mb-20 mt-20 bg-fixed bg-center bg-cover custom-img"
    >
    <div class="flex flex-col justify-center items-center m-auto p-5 bg-white bg-opacity-30 rounded-xl">
      <Header text="Parallax Section" size="2" />
      <Header text="Add some content here as a sub-header!" size="5" />
      <div className="m-2">
        <Button text="Learn More" type="secondaryBtn" />
      </div>
    </div>
  </section>
  )
};

export default ParallaxImg;