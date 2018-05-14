import React from 'react';
import PropTypes from 'prop-types';
import FormatDate from '../../library/FormatDate';

const DatePosted = ({created, lastModified}) => {
  console.log(created);
  console.log(lastModified);

  if (lastModified && created !== lastModified) {
    return (
      <div>Last editted on {FormatDate.dateAndTime(lastModified)}</div>
    );
  }
  return (<span>Posted on {created}</span>);
}

DatePosted.propTypes = {
  created: PropTypes.stirng,
  lastModified: PropTypes.stirng
}

export default DatePosted;