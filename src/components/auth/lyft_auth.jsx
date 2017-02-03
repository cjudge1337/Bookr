import React from 'react';

class LyftAuth extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestLyftToken(this.props.params.lyftAuthCode);
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
