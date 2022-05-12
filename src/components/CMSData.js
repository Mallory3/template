import React, { useState, useEffect } from "react"
import sanityClient from "../client"

export default function getSanityData() {

  // return sanityClient.fetch(`
  //   *[_type == "contact"] {
  //     mapEmbedded,
  //     email
  //   }
  // `)

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
}

