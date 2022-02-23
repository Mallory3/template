import React, { useState, useEffect } from "react"
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {

  //navbar scroll when active state
  const [navbar, setNavbar] = useState(false)


  //navbar scroll changeBackground function
  const changeBackground = () => {
    if (window.scrollY >= 0.1) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }
  useEffect(() => {
    changeBackground()
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground)
  })

  return (
    <header className={`fixed w-full ${navbar ? "navBar navBarScroll shadow-xl" : "navBar"}`}>
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink 
            to="/"
            className="inline-flex items-center py-6 px-3 mr-4 text-4xl"
          >
            Home
          </NavLink>
          <NavLink 
            to="/about"
            className="inline-flex items-center py-3 px-3 my-6"
          >
            About
          </NavLink>
          <NavLink 
            to="/contact"
            className="inline-flex items-center py-3 px-3 my-6"
          >
            Contact
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon url="https://www.facebook.com/mallory.zlomanchuk" className="mr-4" target="_blank" fgColor="#fff" style={{ height:35, width:35}} />
        </div>
      </div>
    </header>
  )
}