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
    return (
      <div className="auth-actions jawbone">
        <h1>lyft test page</h1>
      </div>
    );
  }
}

export default LyftAuth;
