import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const SignUp = ({ pressed = false, className }) => {
  return (
    <div className={`sign-up pressed-0-${pressed} ${className}`}>
      <div className="div">Sign Up</div>
    </div>
  );
};

SignUp.propTypes = {
  pressed: PropTypes.bool,
};
