import React from 'react';

class Map extends React.Component {
  render() {
    return (
      <div className="m-6 p-6 border bg-gray-100">
        <iframe className="map" src={this.props.mapEmbedded} loading="lazy"></iframe>
      </div>
    )
  }
};

export default Map;