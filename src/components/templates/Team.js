import React from "react"
import TeamData from "../CMSData/TeamData"
import SectionHeader from "../organisms/SectionHeader"

const Team = () => {
  
  return (
    <section className="teamSection container mx-auto overflow-hidden max-w-sm sm:max-w-7xl">
      <SectionHeader text="Stylists" color="black"/>
      <TeamData />
    </section>
  )
};

export default Team;