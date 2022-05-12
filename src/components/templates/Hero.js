import React from 'react';
import HeaderCTA from "../organisms/HeaderCTA"

const Hero = () => {

  return (
    <section id="hero">
      <div className="flex items-center justify-center h-screen m-auto bg-cover bg-center-top bg-fixed custom-img">
        <HeaderCTA />
      </div>
    </section>
  )
};

export default Hero;
