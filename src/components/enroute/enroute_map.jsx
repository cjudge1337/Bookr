import React from 'react';

class EnrouteMap extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      width: 250,
      height: 250
    };
  }

  createMap() {

  }

  render() {
    return (
      <div className="enroute-map-container">
        <div id="map"></div>
        map
      </div>
    );
  }
}

export default EnrouteMap;
