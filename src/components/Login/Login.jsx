import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Login = ({ pressed = false, className }) => {
  return (
    <div className={`login pressed-${pressed} ${className}`}>
      <div className="text-wrapper">login</div>
    </div>
  );
};

Login.propTypes = {
  pressed: PropTypes.bool,
};
