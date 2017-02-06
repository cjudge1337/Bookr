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

    let driverGeo = {
      lat: this.props.location.latitude,
      lng: this.props.location.longitude
    };

    let destinationGeo = {
      lat: this.props.destination.latitude,
      lng: this.props.destination.longitude
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

    const driverMarker = new google.maps.Marker({
      position: driverGeo,
      map: this.map,
      title: 'Driver location'
    });

    const destinationMarker = new google.maps.Marker({
      position: destinationGeo,
      map: this.map,
      title: 'Destination location'
    });
// debugger
    // let currCenter = this.map.getCenter();
    // google.maps.event.trigger(this.map, 'resize');
    // this.map.setCenter(currCenter);
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
