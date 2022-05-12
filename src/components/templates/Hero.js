import HeaderCTA from "../organisms/HeaderCTA"

const Hero = () => {
  // TODO: fecth CMS data and add to components as props to pass down to children
  return (
    <section id="hero">
      <div className="flex items-center justify-center h-screen m-auto bg-cover bg-center-top bg-fixed custom-img">
        <HeaderCTA />
      </div>
    </section>
  )
};

export default Hero;
