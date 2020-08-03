import React from "react";

const Button = (props) => {
  return <input type={props.type} value={props.value} href={props.href} onClick={props.onClick}/>;
};
export default Button;
