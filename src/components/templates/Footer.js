import Contact from "./Contact"
import Section from "../atoms/Section"


export default function Footer() {
  // TODO: Fetch data from CMS and add as props to Contact
  return (
    <Section id="footer">
      {/* TODO: Use Grid component (make columns dynamic?) */}
      <div className="grid grid-cols-1 gap-2 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* TO DO: REPLACE WITH FOOTER MENU */}
        <Contact />
        {/* TO DO: REPLACE WITH .. ? */}
        <Contact />
        <Contact />
      </div>
    </Section>
  )
};
