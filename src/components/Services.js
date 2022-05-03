import React, { useState, useEffect } from "react"
import SectionHeader from "./atoms/SectionHeader"
import ServiceData from "./CMSData/ServiceData"

const Services = () => {
  
  return (
    <section className="container mx-auto sm:max-w-7xl">
      <SectionHeader text="Services & Pricing" />
      <ServiceData />
    </section>
  )
};

export default Services;