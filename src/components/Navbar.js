import React from "react";

function Navbar(props) {
  return (
    <nav className="bg-primary">
      <ul className="nav nav-fill">
        <li className="nav-item nav-link"><a href="/" className="text-white">Clicky Games!</a></li>
        <li className="nav-item nav-link">Click on an image to start</li>
        <li className="nav-item nav-link">Score: {props.score} | Top Score: {props.topscore}</li>
      </ul>
    </nav>
  );
}

export default Navbar;
