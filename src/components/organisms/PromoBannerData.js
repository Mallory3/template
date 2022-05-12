import React, { useState, useEffect } from "react"
import sanityClient from "../../client"
import imageUrlBuilder from '@sanity/image-url'


function PromoBannerData() {
    //set a state and use state and set new state for data
    const [promoBannerData, setPromoBanner] = useState(null);

      useEffect(() => {
        sanityClient
          .fetch(`*[_type == "promoBanner"] {
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
          .then((data) => setPromoBanner(data))
          .catch(console.error)
      }, [])

      const builder = imageUrlBuilder(sanityClient)

      function urlFor(source) {
        return builder.image(source)
      }

      return (
        <>
          {promoBannerData && promoBannerData.map((promoBanner, index) => (
              <div 
                alt={promoBanner.alt}
                className="w-full h-screen sm:h-80 bg-cover bg-center rounded"
                key={index}
                style={{backgroundImage: "url(" + urlFor(promoBanner.image.url).url() + ")"}}
              >
                <div className="flex flex-col items-center justify-center m-auto w-full h-full bg-purple-500 opacity-20">
                  <div>     
                    <h3 className="text-white">{promoBanner.header}</h3>
                  </div>
                  <div>
                    <h3 className="text-white">{promoBanner.subheader}</h3>
                  </div>
                  <div>
                    <p className="text-white">{promoBanner.text}</p>
                  </div>
                </div>
              </div>
          ))}
        </>
      )
}

export default PromoBannerData;

