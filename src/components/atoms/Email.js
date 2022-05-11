import React, { useState, useEffect } from "react"
import sanityClient from "../../client"

export default function Email() {
  
  //Get CMS Data
  const [contactData, setContact] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "contact"] {
        email
      }`)
      .then((data) => setContact(data))
      .catch(console.error)
  }, [])

  return (
    <>
      {contactData && contactData.map((contact, index) => 
        <p key={index}>{contact.email}</p>
      )}
    </>
  )
}