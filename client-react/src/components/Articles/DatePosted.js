import React from 'react';
import PropTypes from 'prop-types';
import FormatDate from '../../library/FormatDate';

const DatePosted = ({created, lastModified}) => {
  let text;
  if (lastModified && created !== lastModified) {
    text = `Last editted on ${FormatDate.dateAndTime(lastModified)}`;
  }
  else {
    text = `Posted on ${created}`;
  }

  return (<span>{text}</span>);
}

DatePosted.propTypes = {
  created: PropTypes.string,
  lastModified: PropTypes.string
}

export default DatePosted;