import "../global.css";
import "../styleguide.css";
import React from "react";
import ReactDOM from "react-dom";
import { LandingPage } from "./screens/LandingPage";

const app = document.getElementById("app");
const root = ReactDOM.createRoot(app);
root.render(<LandingPage />);
