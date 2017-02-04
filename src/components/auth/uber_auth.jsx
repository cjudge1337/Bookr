import React from 'react';
import qs from 'query-string';

class UberAuth extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let creds = qs.parse(this.props.params.uberCreds);
    this.props.receiveUberCreds(creds);
  }

  render() {
    sessionStorage.session = JSON.stringify(this.props.session);
    return (
      <div className="auth-actions jawbone">
        <h1>uber test page</h1>
      </div>
    );
  }
}

export default UberAuth;
