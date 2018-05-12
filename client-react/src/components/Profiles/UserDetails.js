import React from 'react';
import PropTypes from 'prop-types';

import { Table } from 'reactstrap';

const UserDetails = (
  {
    joined,
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
          <td>Joined on</td>
          <td>{joined}</td>
        </tr>
      </tbody>
    </Table>
  );
}

UserDetails.propTypes = {
  numArticles: PropTypes.string
}

export default UserDetails;
