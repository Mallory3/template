import React, { useState, useEffect } from "react"
import sanityClient from "../client"
import { FaRegPaperPlane } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { MdAlternateEmail } from "react-icons/md";
import { GoMention } from "react-icons/go";
import { GoDeviceMobile } from "react-icons/go";
import Header from "./atomic/Header"
import Button from "./atomic/Button"
import Paragraph from "./atomic/Paragraph"
import ParallaxImg from "./atomic/Parallax"
import Map from "./atomic/Map"
import Grid from "./atomic/Grid"

export default function Contact() {

  const [contactData, setContact] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "contact"] {
        mapEmbedded,
        email
      }`)
      .then((data) => setContact(data))
      .catch(console.error)
  }, [])

  return (
    <div className="py-6">
      <div className="mb-6 flex flex-col justify-center items-center m-auto">
        <Header text="Contact Us" size="2" />
        <span className="mt-2">
          <Button text="Book Online" type="primaryBtn" />
        </span>
      </div>
      <hr className="m-4"></hr>
      {contactData && contactData.map((contact, index) => (
       <div>
         <div className="grid mb-6 grid-cols-3 gap-8 justify-items-center content-center">
            <div className="flex flex-col justify-center items-center m-auto">
              <Header text="Email Us" size="4" />
              <button class="contactButton rounded-full py-3 px-3">
                  <MdAlternateEmail className="contactIcon" />
              </button>
              <p>hi@hotmail.com</p>
            </div>
            <div className="flex flex-col justify-center items-center m-auto">
            <Header text="Call Us" size="4" />
              <button class="contactButton rounded-full py-3 px-3">
                  <MdOutlinePhoneInTalk className="contactIcon" />
              </button>
              <p>(403) 818-4164</p>
            </div>
            <div className="flex flex-col justify-center items-center m-auto">
              <Header text="Text Us" size="4" />
              <button class="contactButton rounded-full py-3 px-3">
                  <GoDeviceMobile className="contactIcon" />
              </button>
              <p>(403) 818-4164</p>
            </div>
         </div>
         <hr className="m-4"></hr>
         <div className="flex flex-col justify-center items-center m-auto">
            <Header text="Visit Us" size="3" />
            <p>130 Country Village Rd NE Calgary, AB T3K 6B8</p>
          </div>
         <div>
          <Map mapEmbedded={contact.mapEmbedded} />
         </div>
       </div>
        
      ))}
    </div>
    

  )
}