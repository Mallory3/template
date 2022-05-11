import React from "react"
//IMPORT TEMPLATES
import Featured from "../templates/Featured"
import Footer from "../templates/Footer"
import Gallery from "../templates/Gallery"
import Hero from "../templates/Hero"
import Info from "../templates/Info"
import ParallaxBanner from "../templates/ParallaxBanner"
import PromoBanner from "../templates/promoBanner"
import Services from "../templates/Services"
import Team from "../templates/Team"


export default function Home() {
  return (
    <div>
      <Hero />
      <Info />
      <Team />
      <Services />
      <PromoBanner />
      <ParallaxBanner />
      <Gallery />
      <Featured />
      <Footer />
    </div>
  )
}