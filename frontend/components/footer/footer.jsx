import React from "react";

const Footer = () => (
  <footer id="footer">
    <span className="footer-text">
      Potty Time app created by Dennis Hu and Elvis Yuan
      <i className="footer-subtitle">
        {" 2019"}
        <i className="far fa-copyright"></i>
      </i>
    </span>

    <aside className="footer-social-links">
      <a
        className="footer-link-item"
        href="https://github.com/Hubear41/PottyTime"
        target="_blank"
      >
        <i className="fab fa-github"></i>
      </a>
    </aside>
  </footer>
);

export default Footer;
