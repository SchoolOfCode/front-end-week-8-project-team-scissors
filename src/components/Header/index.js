import React from "react";
import logo from "./WMCA_logo_Digital.png";

function Header({ grid }) {
  return (
    <div className={grid}>
      <img src={logo} alt="WMCA logo" style={{ maxHeight: "110px" }} />
    </div>
  );
}

export default Header;
