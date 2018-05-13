import React from 'react';
import PropTypes from 'prop-types';
import FormatDate from '../../library/FormatDate';

import { Table } from 'reactstrap';

const UserDetails = (
  {
    joined,
    numArticles
  }
) => {
  return (
    <Table striped>
      <tbody>
        <tr>
          <td>Joined on</td>
          <td>{FormatDate(joined)}</td>
        </tr>
      </tbody>
    </Table>
  );
}

UserDetails.propTypes = {
  numArticles: PropTypes.string
}

export default UserDetails;
