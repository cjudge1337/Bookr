import React from 'react';

class EnrouteMap extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.map = new google.maps.Map(this.refs.map, {
      center: {
        lat: this.props.pickup.latitude,
        lng: this.props.pickup.longitude
      },
      zoom: 13
    });

    let currCenter = this.map.getCenter();
    google.maps.event.trigger(this.map, 'resize');
    this.map.setCenter(currCenter);
  }

  render() {
    return (
      <div className="enroute-map-container">
        <div ref="map" className="map"></div>
      </div>
    );
  }
}
export default EnrouteMap;
