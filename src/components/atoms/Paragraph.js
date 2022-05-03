import React from 'react';
import { Capitalize } from "../helper"

class Paragraph extends React.Component {
  render() {
    return (
      <p className="firstLetterTransform">
        {Capitalize(this.props.text)}
      </p>
    )
  }
};

export default Paragraph;