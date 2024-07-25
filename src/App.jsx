import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {

  // Return JSX
  /*
  return (
    <h1>This is JSX returned using XML syntax</h1>
  );
  */

  // Return React element 
  return React.createElement(
    "h1",
    {},
    "This is JSX returned using React.createElement"
  );
}

export default App;
