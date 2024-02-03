import React from "react";
import { Login } from "../../components/Login";
import { SignUp } from "../../components/SignUp";
import "./style.css";

export const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="div-2">
        <img
          className="ocean"
          alt="Ocean"
          src="https://cdn.animaapp.com/projects/65be84115510f942a3eclecb/releases/65be842567261a5f1a58228/ima/ocean.png"
        />
        <div className="overlap-group">
          <div className="text-wrapper-2">already have an account?</div>
          <div className="frame">
            <Login className="login-instance" />
          </div>
          <div className="sign-up-wrapper">
            <Signup className="sign-up-instance" />
          </div>
        </div>
      </div>
    </div>
  );
};
