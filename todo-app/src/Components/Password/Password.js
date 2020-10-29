import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  PASSWORD_ERROR,
} from "../../Reducers/ErrorReducers/constants";
import "../Input/Input.css";

const Password = (props) => {
  const [error, setError] = useState();
  const dispatch = useDispatch();

  const onChangeHandler = (event) => {
    const password = event.target.value;
    if (password.length < 8) {
      setError("Password Too Short");
      dispatch({ type: PASSWORD_ERROR });
    } else if (password.length >= 8) {
      setError(null);
      props.updateError(password)
    }
  };

  return (
    <React.Fragment>
      <div className="input">
        <input
          className="inputBox"
          type="password"
          placeholder={props.placeholder}
          minLength={props.minLength}
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

export default Password;
