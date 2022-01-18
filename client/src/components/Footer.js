import React from "react";
import "../App.css";
import logo from "../assets/mit-logo.png";
function Footer() {
  return (
    <div className="footer">
      <div className="logo">
        <img src={logo} />
      </div>

      <div className="icons">
        <i className="fa fa-instagram fa-2x"></i>
        <i className="fa fa-facebook fa-2x"></i>
        <i className="fa fa-google fa-2x"></i>
      </div>
      <p>Made by Web Dev & System Admin, Revels '22</p>
    </div>
  );
}

export default Footer;
