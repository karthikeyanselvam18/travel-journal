import React from "react";
import earth from "./images/earth.png";

export default function Navbar() {
  return (
    <div className="navbar">
      <img src={earth} />
      <span>My Travel Journal</span>
    </div>
  );
}
