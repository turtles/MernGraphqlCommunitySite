import React from 'react';
import PropTypes from 'prop-types';
import FormatDate from '../../library/FormatDate';

import { Table } from 'reactstrap';

const UserDetails = (
  {
    joined
  }
) => {
  return (
    <Table striped>
      <tbody>
        <tr>
          <td>Joined on</td>
          <td>{FormatDate.date(joined)}</td>
        </tr>
      </tbody>
    </Table>
  );
}

UserDetails.propTypes = {
  joined: PropTypes.string
}

export default UserDetails;
