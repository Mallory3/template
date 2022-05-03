import React from "react"
import TeamData from "./CMSData/TeamData"
import SectionHeader from "./atoms/SectionHeader"

const Team = () => {
  
  return (
    <section className="teamSection container mx-auto overflow-hidden max-w-sm sm:max-w-7xl">
      <SectionHeader text="Stylists" />
      {/* <div className="grid grid-cols-1 gap-10 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"> */}
          <TeamData />
      {/* </div> */}
    </section>
  )
};

export default Team;