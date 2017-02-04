import React from 'react';
import qs from 'query-string';

class LyftAuth extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let creds = qs.parse(this.props.params.lyftCreds);
    this.props.receiveLyftCreds(creds);
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
