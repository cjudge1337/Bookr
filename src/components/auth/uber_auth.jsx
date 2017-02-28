import React from 'react';
import qs from 'query-string';
import { hashHistory } from 'react-router';

class UberAuth extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let creds = qs.parse(this.props.params.uberCreds);
    this.props.receiveUberCreds(creds);
  }

  componentDidUpdate() {
    sessionStorage.session = JSON.stringify(this.props.session);
    hashHistory.push('/search');
  }

  render() {
    return <div id='loading' className="requesting animated infinite pulse">Authorizing...</div>;
  }
}

export default UberAuth;
