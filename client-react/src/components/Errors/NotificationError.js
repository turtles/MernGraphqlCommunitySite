import React, { Component } from 'react';

class NotificationError extends Component {
  render() {
    if (this.props.error) {
      return (<li>{this.props.error}</li>);
    }
    if (!this.props.errors || this.props.errors.length===0) {
      return <div/>;
    }
    return (
      <ul>
        {this.props.errors.map(error => (<li key={error}>{error}</li>))}
      </ul>
    );
  }
}

export default NotificationError;
