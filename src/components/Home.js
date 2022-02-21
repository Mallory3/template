import React from "react"
import Header from "./atomic/Header"
import Button from "./atomic/Button"
import Paragraph from "./atomic/Paragraph"


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
        <Paragraph text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." />
    </div>
  )
}