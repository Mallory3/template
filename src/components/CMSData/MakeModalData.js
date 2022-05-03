import React, { useState, useEffect,  useRef } from "react"
import sanityClient from "../../client"
import Modal from "react-modal"
import imageUrlBuilder from '@sanity/image-url'
import Header from "../atoms/Header"
import ExpandText from "../atoms/ExpandText"
import Button from "../atoms/Button"
import { SocialIcon } from "react-social-icons";
// SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Keyboard } from "swiper";

function MakeModalData({ team }) {


  const [showModal, setShowModal] = useState(false);

      return (
        <div>
          <button
            style={{ marginBottom: 10 }}
            onClick={() => {
              setShowModal(true);
            }}
          >
            My Gallery {index}
          </button>
          <Modal onHide={() => setShowModal(false)} show={showModal}>
            {team.name}
          </Modal>
        </div>
      )
}

export default MakeModalData;

