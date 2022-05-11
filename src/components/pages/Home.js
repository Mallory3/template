import React from "react"
import Header from "../atoms/Header"
import InfoBanner from "../CMSData/InfoBanner"
import PromoBanner from "../templates/promoBanner"
import Button from "../atoms/Button"
import Paragraph from "../atoms/Paragraph"
import ParallaxImg from "../templates/Parallax"
import Services from "../templates/Services"
import Gallery from "../templates/Gallery"
import Team from "../templates/Team"
import Footer from "../templates/Footer"
import { SocialIcon } from "react-social-icons";


export default function Home() {
  return (
    // Text will be coming from CMS, Size could be too?
    <div className="">
        <ParallaxImg />
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 justify-items-center content-center container mx-auto sm:max-w-7xl">
          <div className="flex flex-col justify-between m-auto h-4/6">
            <Header text="I am a h3 Header" size="3" />
            <div className="mt-4">
              <Paragraph 
                className="firstLetterTransform" text="say something about a promotion or featured item. Say something about a promotion or featured item. Say something about a promotion or featured item. Say something about a promotion or featured item. Say something about a promotion or featured item. Say something about a promotion or featured item.Say something about a promotion or featured item. Say something about a promotion or featured item. Say something about a promotion or featured item." 
              />
            </div>
            <div className="mt-4">
              <SocialIcon url="https://www.facebook.com/mallory.zlomanchuk" className="mr-4" target="_blank" fgColor="#fff" style={{ height:35, width:35}} />
              <SocialIcon url="https://www.instagram.com/mallory.zlomanchuk" className="mr-4" target="_blank" fgColor="#fff" style={{ height:35, width:35}} />
              <SocialIcon url="https://www.twitter.com/mallory.zlomanchuk" target="_blank" fgColor="#fff" style={{ height:35, width:35}} />
            </div>
          </div>
          <div className="flex items-center justify-center m-auto mb-20 mt-20 bg-center bg-cover grid-img2 rounded h-full">
          </div>
        </div>
        <Team />
        <Services />
        <PromoBanner />
        <InfoBanner />
        <Gallery />
        {/* quote carasal */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 justify-items-center content-center container mx-auto sm:max-w-7xl ">
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
        <Footer />
    </div>
  )
}