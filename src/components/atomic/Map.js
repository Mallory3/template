import React from 'react';

class Map extends React.Component {
  render() {
    return (
      <div className="m-6">
        <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.1647248545!2d-114.01539619497817!3d50.922220103582156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537176554fc7272d%3A0x6a2a89ba1f8ccd50!2s13%20Deer%20Lane%20Rd%20SE%2C%20Calgary%2C%20AB%20T2J%205S9!5e0!3m2!1sen!2sca!4v1645433589955!5m2!1sen!2sca" loading="lazy"></iframe>
      </div>
    )
  }
};

export default Map;