import { Capitalize } from "../helper"

const Paragraph = ({ text }) => {
  return (
    <p className="firstLetterTransform">
      {Capitalize(text)}
    </p>
  )
};

export default Paragraph;
