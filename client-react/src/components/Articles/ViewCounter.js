import React from 'react';

const ViewCounter = ({views}) => (
  <div>
    <p>{views} {views == 1 ? "view" : "views"}</p>
  </div>
);

export default ViewCounter;
