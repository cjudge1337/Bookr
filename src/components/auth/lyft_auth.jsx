import React from 'react';
import qs from 'query-string';
import { hashHistory } from 'react-router';

class LyftAuth extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let creds = qs.parse(this.props.params.lyftCreds);
    this.props.receiveLyftCreds(creds);
  }

  componentDidUpdate() {
    sessionStorage.session = JSON.stringify(this.props.session);
    hashHistory.push('/search');
  }

  render() {
    return <div id='loading' className="requesting animated infinite pulse">Authorizing...</div>;
  }
}

export default LyftAuth;
