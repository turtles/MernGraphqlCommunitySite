import React, { Component } from 'react';
import axios from 'axios';

class GetHello extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text:'loading greeting...'
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3001/hello')
      .then(
        response=>
        this.setState({
          text:response.data.message
        })
      );
  }

  render() {
    return (
      <p>{this.state.text}</p>
    );
  }
}

export default GetHello
