import TeamData from "../organisms/TeamData"
import SectionHeader from "../organisms/SectionHeader"

export default function Team() {
  return (
    <section id="team" className="teamSection container mx-auto overflow-hidden max-w-sm sm:max-w-7xl">
      <SectionHeader text="Stylists" color="black"/>
      <TeamData />
    </section>
  )
};
