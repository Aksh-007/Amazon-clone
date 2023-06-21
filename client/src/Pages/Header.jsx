import React from "react";
import { NavLink, Link } from "react-router-dom";
import { GrAmazon } from "react-icons/gr";
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={{ height: "10vh" }}>
      <div className="container-fluid">
        <Link to="/" className="navbar-brand" style={{ color: "#000000" }}>
          <GrAmazon /> Ecommerce App
        </Link>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul
            className="navbar-nav ml-auto "
            style={{ display: "flex", gap: "30px" }}
          >
            {" "}
            <li className="nav-item">
              <NavLink
                to="/"
                className="nav-link "
                aria-current="page"
                style={{ color: "#000000" }}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/category"
                className="nav-link"
                style={{ color: "#000000" }}
              >
                Category
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/register"
                className="nav-link"
                style={{ color: "#000000" }}
              >
                Register
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/login"
                className="nav-link"
                style={{ color: "#000000" }}
              >
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/cart"
                className="nav-link"
                style={{ color: "#000000" }}
              >
                Cart(0)
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
