import React from "react";

const Button = (props) => {
  return (
    <button
      type={props.type}
      href={props.href}
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
};
export default Button;
