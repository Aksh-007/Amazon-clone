import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Footer.css";
const Footer = () => {
  return (
    // <div className="bg-dark text-light p-3 footer">
    <div className="footer" style={{ height: "12vh" }}>
      <h4 className="text-center">All Right Reserved &copy; 3brackets </h4>
      <p className="text-center mt-3 paragraph">
        <Link className="Link" to="/about">
          About
        </Link>
        |
        <Link className="Link" to="/contact">
          Contact
        </Link>
        |
        <Link className="Link" to="/privacy">
          Privacy Policy
        </Link>
      </p>
    </div>
  );
};

export default Footer;
