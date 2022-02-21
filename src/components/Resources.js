import React from "react"
import Header from "./atomic/Header"

export default function Resources() {
  return (
    // Text will be coming from CMS, Size could be too?
    <>
      <Header text="I am a h1 Header" size="1" />
      <Header text="I am a h2 Header" size="2" />
      <Header text="I am a h3 Header" size="3" />
      <Header text="I am a h4 Header" size="4" />
      <Header text="I am a h5 Header" size="5" />
      <Header text="I am a h6 Header" size="6" />
    </>

  )
}