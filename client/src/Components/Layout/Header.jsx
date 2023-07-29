import { useEffect, useRef, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { GrAmazon } from "react-icons/gr";
import "../Styles/Header.css";
const Header = () => {
  const lastScrollTop = useRef(0);

  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        var pageYOffset = window.scrollY;
        if (pageYOffset > lastScrollTop.current) {
          // downward scroll
          setIsNavbarVisible(false);
        } else if (pageYOffset < lastScrollTop.current) {
          // upward scroll
          setIsNavbarVisible(true);
        } // else was horizontal scroll
        lastScrollTop.current = pageYOffset <= 0 ? 0 : pageYOffset;
      },
      { passive: true }
    );
  }, []);
  return (
    <div className={`header ${isNavbarVisible ? "visible" : ""}`}>
      <nav
        className={`navbar navbar-expand-lg ${
          isNavbarVisible ? "visible" : ""
        }`}
        style={{ height: "10vh" }}
      >
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
    </div>
  );
};

export default Header;
