import React, { useState } from "react";
import "./Input.css";

const Input = (props) => {
  const [error, setError] = useState(null);

  const onChangeHandler = (event) => {
    if (props.type === "number") {
      if (error) {
        setError(null);
      }
      const value = event.target.value;
      const valueLength = value.toString().length;
      if (valueLength > 10) {
        setError("Phone number cannot be greater than 10");
        event.target.value = error;
      }
    } else return;
  };

  return (
    <React.Fragment>
      <div className="input">
        <input
          className="inputBox"
          type={props.type}
          placeholder={props.placeholder}
          maxLength={props.max}
          onChange={(e) => onChangeHandler(e)}
        />
        {error ? (
          <div className='error'>
            <span>{error}</span>
          </div>
        ) : null}
      </div>
    </React.Fragment>
  );
};

export default Input;
