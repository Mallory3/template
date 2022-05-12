import React from "react"
import TeamData from "../organisms/TeamData"
import SectionHeader from "../organisms/SectionHeader"

const Team = () => {
  
  return (
    <section id="team" className="teamSection container mx-auto overflow-hidden max-w-sm sm:max-w-7xl">
      <SectionHeader text="Stylists" color="black"/>
      <TeamData />
    </section>
  )
};

export default Team;