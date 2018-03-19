import React from 'react';

const ContentCard = (props)=> (
  <div>
    <h3>{props.title}</h3>
    <p>{props.children}</p>
  </div>
)

export default ContentCard;
