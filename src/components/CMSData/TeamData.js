import React, { useState, useEffect,  useRef } from "react"
import sanityClient from "../../client"
import imageUrlBuilder from '@sanity/image-url'
import Header from "../atoms/Header"
import ExpandText from "../organisms/ExpandText"
import Button from "../atoms/Button"
import GalleryData from "./GalleryData"
import Modal from "react-modal"
import { SocialIcon } from "react-social-icons";
// SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Keyboard } from "swiper";

function TeamData() {

    const [teamData, setTeam] = useState(null);

      useEffect(() => {
        sanityClient
          .fetch(`*[_type == "team"] {
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
          .then((data) => setTeam(data))
          .catch(console.error)
      }, [])

      const builder = imageUrlBuilder(sanityClient)


      function urlFor(source) {
        return builder.image(source)
      }

      // MODAL
      // let customStyles;
      const customStyles = {
        overlay: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(21, 21, 21, 0.75)'
        },
        content: {
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: '#fff',
          overflow: 'auto',
          WebkitOverflowScrolling: 'touch',
          borderRadius: '4px',
          outline: 'none',
          padding: '20px',
          backgroundColor: 'rgba(21, 21, 21, 0.9)',
          color: 'white',
        }
      }

      const [modalIsOpen, setIsOpen] = React.useState(false);

      function openModal(event) {
        console.log(event)
        // If button data-id = modal data-id setIsOpen to true
        const buttonDataId = event.target.getAttribute('data-id');
        console.log(buttonDataId)
        const modal = document.querySelectorAll(`.modal${buttonDataId}`);
        console.log(modal)
        const modalDataId = document.querySelector(`.modal${buttonDataId}`);
        console.log(modalDataId)

        if ( modalDataId ) {
          setIsOpen(true);
        }
          
      }

      function closeModal() {
        setIsOpen(false);
      }
      

      return (
          <Swiper
            cssMode={true}
            slidesPerView={1}
            spaceBetween={40}
            pagination={{
              dynamicBullets: true,
              clickable: true,
            }}
            navigation={true}
            keyboard={true}
            modules={[Navigation, Pagination, Keyboard]}
            className="mySwiper"
          >
          {teamData && teamData.map((team, index) => (
            <SwiperSlide>
              <div className="flex flex-col flex-nowrap p-3 lg:grayscale lg:hover:grayscale-0">
                <div className="flex items-center justify-center mx-auto h-60 w-full">
                  <div 
                      alt={team.alt}
                      className="w-60 h-60 rounded-full bg-cover bg-center"
                      key={index}
                      style={{backgroundImage: "url(" + urlFor(team.image.url).url() + ")"}}
                ></div>
                </div> 
                <div className="sm:w-full w-11/12 mx-auto">
                  <div className="flex items-center justify-between m-auto mt-1">
                    <Header className="subHeader" text={team.name} size="4" />
                    <Header className="subHeader" text={team.role.toUpperCase()} size="6" />

                    <div className="flex justify-between">
                        <button
                          key={index}
                          data-id={index}
                          className="button primaryBtn rounded-full py-2 px-4"
                          onClick={openModal}
                        >
                          My Gallery
                        </button>

                        <Modal 
                          key={index}
                          data-id={index}
                          contentLabel="Stylist Gallery"
                          portalClassName={`modal modal${index}`}
                          isOpen={modalIsOpen}
                          style={customStyles}
                        >
                            <button 
                              key={index}
                              data-id={index}
                              className="fixed right-6 border px-3 py-1 rounded-full block"
                              onClick={closeModal}>
                              X
                            </button>
                            <div className="flex items-end">
                              <div 
                                alt={team.alt}
                                className="w-32 h-32 m-3 rounded-full bg-cover bg-center"
                                key={index}
                                style={{backgroundImage: "url(" + urlFor(team.image.url).url() + ")"}}
                              ></div>
                              <div className="grow m-3">
                                <div>{team.name}</div>
                                <div>{team.role}</div>
                                {team.social && 
                                  <SocialIcon url={team.social} target="_blank" fgColor="#fff" style={{ height:30, width:30}} />
                                }
                              </div>
                            </div>
                            <hr className="mb-3"/>
                            <GalleryData />
                            <Button text="Book Now" type="secondaryBtn" />
                        </Modal>
                    </div>
                  </div>
                </div>
                <div className="sm:w-full w-11/12 mx-auto">
                  <ExpandText className="" content={team.bio} />
                </div>
              </div> 
            </SwiperSlide>     
          ))}
        </Swiper>
      )
}

export default TeamData;

