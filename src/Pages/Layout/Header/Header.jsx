import * as React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const linkStyle = {
    textDecoration: "none",
    color: "#d3d3d3",
    fontFamily: "'Raleway', sans-serif",
  };
  return (
    <>
      <div className="loginbar container-fluid ">
        <div className="login-items ">
          <div className="search-container d-flex gap-2 align-items-center ">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Search..." />
          </div>
          <div className="login-links d-flex align-items-center gap-2 ">
            <i className="fa-solid fa-circle-user icon"></i>
            <Link to={"/login"} className="login-link flex-grow-1">
              <span className="text-nowrap">Log In</span>
            </Link>
            <a href="public\index.html" className="ml-auto">
              <i className="fa-solid fa-bag-shopping icon"></i>
            </a>
          </div>
        </div>
      </div>
      <nav
        className="navbar navbar-expand-lg navbar-dark px-3"
        style={{ backgroundColor: "rgb(83, 81, 81)" }}
      >
        <div
          className="container-fluid"
          style={{
            padding: "10px 0",
            maxWidth: "1000px",
            margin: " 0 auto",
            fontSize: "15px",
          }}
        >
          <Link className="navbar-brand" href="#" style={linkStyle}>
            <h1 className="logo">Pretty girl</h1>
          </Link>
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
              <Link
                to={"/home"}
                className="nav-link "
                aria-current="page"
                style={linkStyle}
              >
                <li className="nav-item px-lg-4 px-md-0 ">Home</li>
              </Link>
              <Link
                to={"/sale"}
                className="nav-link "
                aria-current="page"
                style={linkStyle}
              >
                <li className="nav-item px-lg-4 px-md-0 ">Sale</li>
              </Link>
              <Link
                to={"/shop"}
                className="nav-link "
                aria-current="page"
                style={linkStyle}
              >
                <li className="nav-item px-lg-4 px-sm-0">Shop</li>
              </Link>
              <Link
                to={"/about"}
                className="nav-link "
                aria-current="page"
                style={linkStyle}
              >
                <li className="nav-item px-lg-4 px-sm-0">About</li>
              </Link>
              <Link
                to={"/contact"}
                className="nav-link "
                aria-current="page"
                style={linkStyle}
              >
                <li className="nav-item px-lg-4 px-sm-0">Customer Care</li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
