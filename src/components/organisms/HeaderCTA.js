import React from 'react';
// IMPORT MOLECULES
import Button from "../atoms/Button"
import Header from "../atoms/Header"

class HeaderCTA extends React.Component {
  render() {
    return (
      <div className="flex flex-col justify-center items-center m-auto p-5 bg-white bg-opacity-30 rounded-xl">
        <Header text="Parallax Section" size="1" />
        <Header text="Add some content here as a sub-header!" size="3" />
        <div className="m-2">
          <Button text="Learn More" type="secondaryBtn" />
        </div>
      </div>
    )
  }
};

export default HeaderCTA;