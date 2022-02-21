import React from "react"
import Header from "./atomic/Header"
import Button from "./atomic/Button"
import Paragraph from "./atomic/Paragraph"
import ParallaxImg from "./atomic/Parallax"
import Map from "./atomic/Map"
import Grid from "./atomic/Grid"

export default function Home() {
  return (
    // Text will be coming from CMS, Size could be too?
    <div className="container mx-auto">
        <Header text="I am a h1 Header" size="1" />
        <Header text="I am a h2 Header" size="2" />
        <Header text="I am a h3 Header" size="3" />
        <Header text="I am a h4 Header" size="4" />
        <Header text="I am a h5 Header" size="5" />
        <Header text="I am a h6 Header" size="6" />
        <span className="m-2">
          <Button text="Primary" type="primaryBtn" />
        </span>
        <span className="m-2">
          <Button text="Secondary" type="secondaryBtn" />
        </span>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 justify-items-center content-center">
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
        <ParallaxImg />
        <Map/>
        <Paragraph text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." />
    </div>
  )
}