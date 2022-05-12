import React, { useState, useEffect, useRef } from "react"
import sanityClient from "../../client"
import imageUrlBuilder from '@sanity/image-url'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Keyboard, Grid} from "swiper";


function GalleryData() {
    //set a state and use state and set new state for data
    const [galleryData, setGallery] = useState(null);

      useEffect(() => {
        sanityClient
          .fetch(`*[_type == "gallery"] {
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
          .then((data) => setGallery(data))
          .catch(console.error)
      }, [])

      const builder = imageUrlBuilder(sanityClient)

      function urlFor(source) {
        return builder.image(source)
      }

      return (
        <Swiper
          cssMode={true}
          slidesPerView={3}
          spaceBetween={40}
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          navigation={true}
          keyboard={true}
          modules={[Navigation, Pagination, Keyboard, Grid]}
          className="mySwiper"
        >
          {galleryData && galleryData.map((gallery, index) => (
            <SwiperSlide>
              <img
                src={urlFor(gallery.image.url).url()}
                alt={gallery.alt}
                key={index}
                className="z-0 sm:rounded mx-auto w-full h-96 hover:md:opacity-30 hover:shadow-2xl"
              />
            </SwiperSlide>     
          ))}
        </Swiper>
      )
}

export default GalleryData;

