import React, { useState, useEffect } from "react"
import sanityClient from "../client"
import useCollapse from 'react-collapsed'
import Collapsable from "./atomic/Collapsable"
import Header from "./atomic/Header"
import { IoIosArrowDown } from "react-icons/io";


const Services = () => {

  //set a state and use state and set new state for data
    const [serviceData, setService] = useState(null);

    useEffect(() => {
      sanityClient
        .fetch(`*[_type == "service"] {
          title,
          price,
          description
        }`)
        .then((data) => setService(data))
        .catch(console.error)
    }, [])
  return (
    <div className="container mx-auto">
      <div className="mb-6 flex flex-col justify-center items-center m-auto">
        <Header text="Services & Pricing" size="2" />
      </div>
      {serviceData && serviceData.map((service, index) => (
          <Collapsable 
            index={index} 
            title={service.title} 
            price={`$ ${service.price} CAD`} 
            description={service.description} 
          />
      ))}
    </div>
  )
};

export default Services;