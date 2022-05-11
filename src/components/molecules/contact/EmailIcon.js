import React, { useState, useEffect } from "react"
import { MdAlternateEmail } from "react-icons/md";
// IMPORT ATOMS
import Email from "../../atoms/Email"
import Header from "../../atoms/Header"

export default function EmailIcon() {
  
  return (
    <>
      <Header text="Email Us" size="4" color="white" />
      <button className="contactButton rounded-full py-3 px-3">
          <MdAlternateEmail className="contactIcon" />
      </button>
      <Email />
    </>
  )
}