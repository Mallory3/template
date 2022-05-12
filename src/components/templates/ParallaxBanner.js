import { useState, useEffect } from "react"
import sanityClient from "../../client"
import imageUrlBuilder from '@sanity/image-url'

function ParallaxBanner() {
    //set a state and use state and set new state for data
    const [ParallaxBannerData, setParallaxBanner] = useState(null);

      useEffect(() => {
        sanityClient
          .fetch(`*[_type == "parallaxBanner"] {
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
          .then((data) => setParallaxBanner(data))
          .catch(console.error)
      }, [])

      const builder = imageUrlBuilder(sanityClient)

      function urlFor(source) {
        return builder.image(source)
      }

      return (
        <section id="parallaxBanner">
          {ParallaxBannerData && ParallaxBannerData.map((ParallaxBanner, index) => (
              <div 
                alt={ParallaxBanner.alt}
                className="w-full h-screen sm:h-96 bg-cover bg-top bg-fixed mt-24"
                key={index}
                style={{backgroundImage: "url(" + urlFor(ParallaxBanner.image.url).url() + ")"}}
              >
                <div className="flex items-center justify-center m-auto w-full h-full bg-gradient-to-t from-black">
                  <h3 className="text-white">{ParallaxBanner.header}</h3>
                  <h3 className="text-white">{ParallaxBanner.subheader}</h3>
                </div>
              </div>
          ))}
        </section>
      )
}

export default ParallaxBanner;
