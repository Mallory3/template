import React from "react"
//IMPORT ORGANISMS
import Button from "../atoms/Button"
import Header from "../atoms/Header"
import Paragraph from "../atoms/Paragraph"

const Featured = () => {
  
  return (
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
  )
};

export default Featured;