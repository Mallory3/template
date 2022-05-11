import React from "react"
import { SocialIcon } from "react-social-icons";
// IMPORT ORGANISMS
import Header from "../atoms/Header"
import Paragraph from "../atoms/Paragraph"

const Info = () => {
  
  return (
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
  )
};

export default Info;