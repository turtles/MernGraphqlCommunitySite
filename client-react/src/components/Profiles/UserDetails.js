import React from 'react';
import PropTypes from 'prop-types';

import { Table } from 'reactstrap';

const UserDetails = (
  {
    numArticles
  }
) => {
  return (
    <Table>
      <tbody>
        <tr>
          <td>Submissions</td>
          <td>{numArticles}</td>
        </tr>
        <tr>
          <td>Meow</td>
          <td>no</td>
        </tr>
      </tbody>
    </Table>
  );
}

UserDetails.propTypes = {
  numArticles: PropTypes.string
}

export default UserDetails;
