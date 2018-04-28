import React from 'react';

const ViewCounter = ({views}) => (
  <span>{views} {views === 1 ? "view" : "views"}</span>
);

export default ViewCounter;
