import React from 'react';

class EnrouteMap extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let pickupGeo = {
      lat: this.props.pickup.latitude,
      lng: this.props.pickup.longitude
    };

    this.map = new google.maps.Map(this.refs.map, {
      center: {
        lat: this.props.pickup.latitude,
        lng: this.props.pickup.longitude
      },
      zoom: 13
    });

    const pickupMarker = new google.maps.Marker({
      position: pickupGeo,
      map: this.map,
      title: 'Your location'
    });
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
