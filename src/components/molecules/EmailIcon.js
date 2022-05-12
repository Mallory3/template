import { useState, useEffect } from "react"
import sanityClient from "../../client"
import { MdAlternateEmail } from "react-icons/md";
import Email from "../atoms/Email"
import Header from "../atoms/Header"

export default function EmailIcon() {
  // TODO:REMOVE DATA FETCH AND ADD TO PARENT
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
      <Header text="Email Us" size="4" color="white" />
      {/* TO DO: Create/Modify button atom to accept an icon as children */}
      <button className="contactButton rounded-full py-3 px-3">
          <MdAlternateEmail className="contactIcon" />
      </button>
      {contactData && contactData.map((contact, index) => 
        <Email key={index} email={contact.email}/>
      )}
    </>
  )
}
