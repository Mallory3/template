import React, { useState, useEffect } from "react"
import sanityClient from "../../client"
import imageUrlBuilder from '@sanity/image-url'

function InfoBanner() {
    //set a state and use state and set new state for data
    const [infoBannerData, setInfoBanner] = useState(null);

      useEffect(() => {
        sanityClient
          .fetch(`*[_type == "infoBanner"] {
          ...,
          "image": image.asset->{
            url,
            metadata {
              location,
              palette {
                dominant {
                  background,
                  foreground
                }
              }
            }
          }
          }`)
          .then((data) => setInfoBanner(data))
          .catch(console.error)
      }, [])

      const builder = imageUrlBuilder(sanityClient)

      function urlFor(source) {
        return builder.image(source)
      }

      return (
        <>
          {infoBannerData && infoBannerData.map((infoBanner, index) => (
              <div 
                alt={infoBanner.alt}
                className="w-full h-screen sm:h-96 bg-cover bg-top bg-fixed mt-24"
                key={index}
                style={{backgroundImage: "url(" + urlFor(infoBanner.image.url).url() + ")"}}
              >
                <div className="flex items-center justify-center m-auto w-full h-full bg-gradient-to-t from-black">
                  <h3 className="text-white">{infoBanner.header}</h3>
                  <h3 className="text-white">{infoBanner.subheader}</h3>
                </div>
              </div>
          ))}
        </>
      )
}

export default InfoBanner;
