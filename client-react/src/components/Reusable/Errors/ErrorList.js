import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import styled from 'styled-components';

const ErrorListGroup = styled(ListGroup)`
  margin: 1rem 0;
`;

class ErrorList extends Component {
  render() {
    if (this.props.error) {
      return (
        <ErrorListGroup>
          <ListGroupItem color="danger">
            {this.props.error}
          </ListGroupItem>
        </ErrorListGroup>
      );
    }
    if (!this.props.errors || this.props.errors.length===0) {
      return null;
    }
    return (
      <ErrorListGroup>
        {
          this.props.errors.map(error => (
            <ListGroupItem color="danger" key={error}>
              {error}
            </ListGroupItem>
            )
          )
        }
      </ErrorListGroup>
    );
  }
}

export default ErrorList;
