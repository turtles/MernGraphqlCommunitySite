import React, { Component } from 'react';

class NotificationError extends Component {
  render() {
    if (!this.props.errors || this.props.errors.length===0) {
      return null;
    }
    return (
      <ul>
        {this.props.errors.map(error => (<li key={error}>{error}</li>))}
      </ul>
    );
  }
}

export default NotificationError;
