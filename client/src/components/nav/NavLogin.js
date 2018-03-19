import React from 'react';
import {Button} from 'reactstrap';
import {Link} from 'react-router-dom';

export default class NavLogin extends React.Component {

  render() {
    return (
      <div>
        <Link to={`/login`}>
          <Button outline color="primary">Login</Button>
        </Link>{' '}
        <Link to={`/register`}>
          <Button outline color="primary">Signup</Button>
        </Link>

      </div>
    );
  }

}
