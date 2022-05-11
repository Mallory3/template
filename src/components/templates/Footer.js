import React from "react"
import Contact from "./Contact"


const Footer = () => {
  
  return (
    <section className="navFooter w-full h-screen text-white pt-8">
      <div className="grid grid-cols-1 gap-2 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* TO DO: REPLACE WITH FOOTER MENU */}
        <Contact />
        {/* TO DO: REPLACE WITH .. ? */}
        <Contact />
        <Contact />
      </div>
    </section>
  )
};

export default Footer;