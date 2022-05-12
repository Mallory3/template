const Section = ({ children, id, textColor = 'black' }) => {
  return (
    <section id={id} classNames={`w-full h-screen text-${textColor} pt-8`}>
      {children}
    </section>
  )
};

export default Section;