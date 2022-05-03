import React from "react"
import GalleryData from "./CMSData/GalleryData"
import SectionHeader from "./atoms/SectionHeader"

const Gallery = () => {
  
  return (
    <section className="w-full galleryBg pt-16">
      <div className="container m-auto overflow-hidden sm:max-w-7xl">
      <SectionHeader text="Gallery" color="white" />
        <div className="">
        </div>
      </div>
    </section>
  )
};

export default Gallery;