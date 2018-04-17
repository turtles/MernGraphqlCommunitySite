import React, { Component } from 'react';
import { Alert } from 'reactstrap';

const RequiresLogin = ({message}) => (
  <div>
    <Alert color="info">{message}</Alert>
  </div>
);

export default RequiresLogin;
