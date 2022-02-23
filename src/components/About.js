import React, { useState, useEffect } from "react"
import sanityClient from "../client"
import Header from "./atomic/Header"
import Services from "./Services"



export default function About() {

  //set a state and use state and set new state for data
    const [headerData, setHeader] = useState(null);

    useEffect(() => {
      sanityClient
        .fetch(`*[_type == "header"] {
          text,
          size
        }`)
        .then((data) => setHeader(data))
        .catch(console.error)
    }, [])
  return (
    <main>
      {headerData && headerData.map((header, index) => (
          <Header key={index} text={header.text} size={header.size}/ >
      ))}
      <div className="container mx-auto mt-20">
        <Services />
      </div>
    </main>
  )
}