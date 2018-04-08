import React, { Component } from 'react';

class NotificationError extends Component {
  render() {
    if (!this.props.errors || this.props.errors.length===0) {
      return;
    }
    return (
      <div>
        {this.props.errors.map(error => (<div key={error}>{error}</div>))}
      </div>
    );
  }
}
