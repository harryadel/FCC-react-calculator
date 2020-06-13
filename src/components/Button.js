import React from 'react';

const Button = (props) => {
  return (
    <button
      key={props.label}
      onClick={props.handleClick}
      className={props.className}
      id={props.id}
    >
      {props.label}
    </button>
  );
};

export default Button;