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
    }
    else {
      setNavbar(false)
    }
  }
  useEffect(() => {
    changeBackground()
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground)
  })

  return (
    <header className={`fixed w-full z-50 ${navbar ? "navBar navFooter" : "navBar"}`}>
      <div className="mx-auto flex justify-between">
        <nav className="flex">
          <NavLink 
            to="/"
            className="inline-flex items-center py-3 px-3 mr-4 text-4xl logoWrapper"
          >
            <img className="logo" alt="logo" src="./Sitelify.png"></img>
          </NavLink>
          {/* SAMPLE NAVLINK */}
          {/* <NavLink 
            to="/about"
            className="inline-flex items-center py-3 px-3 my-3"
          >
            About
          </NavLink> */}
        </nav>
        <div className="inline-flex py-3 px-3 my-3">
          <SocialIcon url="https://www.facebook.com/mallory.zlomanchuk" className="mr-4" target="_blank" fgColor="#fff" style={{ height:35, width:35}} />
        </div>
      </div>
    </header>
  )
}