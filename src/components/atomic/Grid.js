import React from 'react';

class Grid extends React.Component {
  render() {
    const GridCols = this.props.cols;
    const GridGap = this.props.gap;
    let HeaderStyles = "";
      
    return (
      <div
        className={`grid grid-cols-1 md:grid-cols-${GridCols} md:gap-${GridGap}`}
      >
      </div>
    )
  }
};

export default Grid;