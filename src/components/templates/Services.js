import { useState, useEffect } from "react"
import sanityClient from "../../client"
//IMPORT ORGANISMS
import SectionHeader from "../organisms/SectionHeader"
import Collapsable from "../organisms/Collapsable"

export default function Services() {
   
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
    <section id="service" className="container mx-auto sm:max-w-7xl">
      <SectionHeader text="Services & Pricing" />
      {serviceData && serviceData.map((service, index) => (
          <Collapsable 
            index={index} 
            title={service.title} 
            price={`$ ${service.price} CAD`} 
            description={service.description} 
          />
      ))}
    </section>
  )
};
