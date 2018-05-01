import React from 'react';

import Tag from './Tag';

export default ({ tags }) => {
  if (!tags || tags.length===0) {
    return null;
  }
  return (
    <div className='tag-group-readonly'>
    {
      tags.map((tag, i) => (
        <Tag key={i} name={tag} />
      ))
    }
    </div>
  )
};
