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
        <a href="https://www.instagram.com/revelsmit">
        <i className="fa fa-instagram fa-2x"></i>
        </a>
        
        <a href="https://www.facebook.com/mitrevels">
        <i className="fa fa-facebook fa-2x"></i>
        </a>
        <i className="fa fa-google fa-2x"></i>
      </div>
      <p>Made by System Admin, Revels '22</p>
    </div>
  );
}

export default Footer;
