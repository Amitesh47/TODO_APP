import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  VALID_PHN_NO_ERROR,
  PHONE_NO_LENGTH_ERROR,
} from "../../Reducers/ErrorReducers/constants";
import "./Input.css";

const Input = (props) => {
  const [error, setError] = useState();
  const dispatch = useDispatch();

  const onChangeHandler = (event) => {
    if (props.type === "number") {
      const value = event.target.value;
      const valueLength = value.toString().length;
      if (valueLength === 10) {
        setError(null);
        props.updateError(value);
      } else if (valueLength > 10) {
        setError("Phone No cannot be greater than 10");
        dispatch({ type: PHONE_NO_LENGTH_ERROR });
        const validNumber = value.toString().substring(0, 10);
        event.target.value = validNumber;
      } else if (valueLength < 10) {
        setError("Enter a Valid Phone No");
        dispatch({ type: VALID_PHN_NO_ERROR });
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
          onChange={(e) => onChangeHandler(e)}
        />
        {error ? (
          <div className="error">
            <span>{error}</span>
          </div>
        ) : null}
      </div>
    </React.Fragment>
  );
};

export default Input;
