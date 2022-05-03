import React, { useState, useEffect } from "react"
import sanityClient from "../../client"
import Collapsable from "../atoms/Collapsable"


function ServiceData() {

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
        <div>
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
}

export default ServiceData;
