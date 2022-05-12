import CTAParagraph from "../molecules/CTAParagraph"
import Grid from "../atoms/Grid"
import Section from "../atoms/Section"

const Featured = () => {
  // TODO: Create Featured schema for sanity and pull in data. Define CTAParagraph props.
  return (
    <Section id="featured">
      <Grid>
        <div className="flex items-center justify-center m-auto mb-20 mt-20 bg-center bg-cover grid-img">
        </div>
        <CTAParagraph />
      </Grid>
    </Section>
  )
};

export default Featured;