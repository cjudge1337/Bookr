import React from 'react';

class TimeDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="time-display-container">
        <div className="pickup-container">
          Pickup time
        </div>
        <div className="dropoff-container">
          Dropoff time
        </div>
      </div>
    );
  }
}

export default TimeDisplay;
