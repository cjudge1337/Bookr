import React from 'react';

class UberAuth extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestUberToken(this.props.params.uberAuthCode);
  }

  render() {
    return (
      <div className="auth-actions jawbone">
        <h1>test page</h1>
      </div>
    );
  }
}

export default UberAuth;
