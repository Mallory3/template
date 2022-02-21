import React from 'react';

class Header extends React.Component {
  render() {
    const HeaderTag = `h${this.props.size}`;
    let HeaderStyles = "";

    if (HeaderTag === 'h1') {
      HeaderStyles ="text-3xl sm:text-4xl md:text-5xl"
    }
    if (HeaderTag === 'h2') {
      HeaderStyles ="text-2xl sm:text-3xl md:text-4xl"
    }
    if (HeaderTag === 'h3') {
      HeaderStyles ="text-xl sm:text-2xl md:text-3xl"
    }
    if (HeaderTag === 'h4') {
      HeaderStyles ="text-lg sm:text-xl md:text-2xl"
    }
    if (HeaderTag === 'h5') {
      HeaderStyles ="text-sm sm:text-base md:text-lg"
    }
    if (HeaderTag === 'h6') {
      HeaderStyles ="text-xs sm:text-sm md:text-base"
    }
      
    return (
      <HeaderTag
        className={`header ${HeaderStyles}`}
      >
        {this.props.text}
      </HeaderTag>
    )
  }
};

export default Header;