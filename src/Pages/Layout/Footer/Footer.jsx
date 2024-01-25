import React from "react";
import "./Footer.css";
import { Facebook, Instagram, Pinterest, Twitter } from "@mui/icons-material";

const iStyle = {
  fontSize: "24px",
  cursor: "pointer",
};

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-items">
        <div className="footer-col">
          <h1 className="h1">Stay connected</h1>
          <div style={{ display: "flex", gap: "15px" }}>
            <Facebook style={iStyle} />
            <Twitter style={iStyle}  />
            <Pinterest style={iStyle}  />
            <Instagram style={iStyle}  />
          </div>
        </div>
        <div className="footer-col contact">
          <h1 className="h1">be our friend</h1>
          <input placeholder="Enter your email here'"></input>
          <button className="custom-button">Subscribe Now</button>
        </div>
        <div className="footer-col">
          <h1 className="h1">need assistance?</h1>
          <h2 className="h2">123-456-7890</h2>
          <h2 className="h2">info@mysite.com</h2>
        </div>
      </div>
      <p className="copyright">© 2023 by Sourav</p>
    </div>
  );
}
