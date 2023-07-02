import React from "react";
import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer--pin">
      <p>Created by Jose ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
