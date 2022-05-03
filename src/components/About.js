import React, { useState, useEffect } from "react"
import sanityClient from "../client"
import Header from "./atoms/Header"
import Services from "./Services"
import MyLogo from "./MyLogo"



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
      <div className="container mx-auto">
      </div>
    </main>
  )
}