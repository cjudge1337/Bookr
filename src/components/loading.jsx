import React from 'react';

class Loading extends React.Component {
  render() {
    return(
      <div className="loading">
        <i className="fa fa-spinner fa-pulse fa-3x fa-fw" aria-hidden="true"></i>
      </div>
    );
  }
}

export default Loading;
