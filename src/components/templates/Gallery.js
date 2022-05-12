import React from "react"
import GalleryData from "../organisms/GalleryData"
import SectionHeader from "../organisms/SectionHeader"


export default function Gallery() {
  // TODO: fecth CMS data and add to components as props to pass down to children
  return (
    <section className="w-full galleryBg pt-16">
      <div className="container m-auto overflow-hidden sm:max-w-7xl">
      <SectionHeader text="Gallery" color="white" />
        <div className="">
          <GalleryData />
        </div>
      </div>
    </section>
  )
};
