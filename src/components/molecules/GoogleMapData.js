import { useState, useEffect } from "react"
import sanityClient from "../../client"
// IMPORT ATOMS
import Map from "../atoms/Map"

export default function GoogleMap() {
  
  const [contactData, setContact] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "contact"] {
        mapEmbedded
      }`)
      .then((data) => setContact(data))
      .catch(console.error)
  }, [])

  return (
    <>
      {contactData && contactData.map((contact, index) => 
        <Map key={index} mapEmbedded={contact.mapEmbedded} />
      )}
    </>
  )
}
