import React from 'react';

// Imput: liked: boolean
// Output: onClick

const Like = ({ onClick, liked }) => {
  let classes = 'fa fa-heart';
  classes += liked ? '' : '-o';
  return (
    <i
      onClick={onClick}
      style={{ cursor: 'pointer' }}
      className={classes}
      aria-hidden="true"
    ></i>
  );
};

export default Like;
