import React from 'react';
import Header from "./Header"
import { HiScissors } from "react-icons/hi";
import { HiOutlineMinus } from "react-icons/hi";

class SectionHeader extends React.Component {
  render() {
    return (
      <div className="mb-8">
        <h5 className={`text-${this.props.color}`}>
          <HiScissors fill={this.props.color} className="inline sectionHeaderIcon" />
          <HiOutlineMinus stroke={this.props.color} fill={this.props.color} className="inline sectionHeaderIcon" />
          <HiOutlineMinus stroke={this.props.color} fill={this.props.color} className="inline sectionHeaderIcon" />
          CHECK OUT OUR
        </h5>
        <Header
          text={this.props.text.toUpperCase()}
          size="2"
          color={this.props.color}
        />
      </div>
    )
  }
};

export default SectionHeader;