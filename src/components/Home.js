import React from "react"
import Contact from "./Contact"
import Header from "./atomic/Header"
import Button from "./atomic/Button"
import Paragraph from "./atomic/Paragraph"
import ParallaxImg from "./atomic/Parallax"
import Map from "./atomic/Map"
import Grid from "./atomic/Grid"
import Services from "./Services"

export default function Home() {
  return (
    // Text will be coming from CMS, Size could be too?
    <div className="">
        <ParallaxImg />
        <Services />
      
     
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 justify-items-center content-center container mx-auto">
          <div className="flex items-center justify-center m-auto mb-20 mt-20 bg-center bg-cover grid-img">
          </div>
          <div className="flex flex-col justify-center items-center m-auto">
            <Header text="I am a h3 Header" size="3" />
            <div className="mt-4 pl-8 pr-8">
              <Paragraph 
                text="Say something about a promotion or featured item. Say something about a promotion or featured item. Say something about a promotion or featured item." 
              />
            </div>
            <div className="mt-4">
              <span className="mr-2">
                <Button text="Primary" type="primaryBtn" />
              </span>
              <span className="ml-2">
                <Button text="Secondary" type="secondaryBtn" />
              </span>
            </div>
          </div>
        </div>
        <Contact/>
    </div>
  )
}