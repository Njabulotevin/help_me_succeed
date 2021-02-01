import React from "react";

function NavBar(props) {
  return (
    <div className="nav_wrapper">
      <div className="logo_wrapper"></div>
      <div className="menu_wrapper">
        <ul>
          <li>ABOUT US</li>
          <li>APS CALCULATOR</li>
        </ul>
        <a href="/admin">{props.sign_in_out}</a>
      </div>
    </div>
  );
}

export default NavBar;
