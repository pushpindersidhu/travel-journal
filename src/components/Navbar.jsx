import React from "react";
import globe from "../images/globe.png";

function Navbar() {
  return (
    <nav>
      <img src={globe} alt="" />
      <span>Travel Journal</span>
    </nav>
  );
}

export default Navbar;
