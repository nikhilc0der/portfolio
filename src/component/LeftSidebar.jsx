"use client";
import React from "react";

function LeftSidebar() {
  function downloadCV() {
    var link = document.createElement("a");
    link.href = "/assets/Nikhil-Resume.pdf";
    link.download = "Nikhil-Resume.pdf";
    link.click();
    link.remove();
  }
  return (
    <div className="left-sidebar">
      <div className="sidebar-header " style={{ textAlign: "center" }}>
        {/* <img src="assets/images/logo.png" alt="Logo" /> */}
        <span className="designation">Full Stack &amp; Developer</span>
      </div>
      <img className="me" src="../../assets/me.jpg" alt="Me" />
      <h2 className="email">nikhilkumar20192038@gmail.com</h2>
      <h2 className="address">Uttam Nager , New Delhi</h2>
      <p className="copyright">© 2023 Nikhil. All Rights Reserved</p>
      <ul className="social-profile d-flex align-items-center flex-wrap justify-content-center">
        <li>
          <a href="#">
            <i className="lab la-twitter" />
          </a>
        </li>
        <li>
          <a href="#">
            <i className="lab la-dribbble" />
          </a>
        </li>
        <li>
          <a href="#">
            <i className="lab la-instagram" />
          </a>
        </li>
        <li>
          <a href="#" title="Github">
            <i className="lab la-github" />
          </a>
        </li>
        <li>
          <a href="#" onClick={() => downloadCV()}>
            ↓
          </a>
        </li>
      </ul>
      <a href="#contact" className="theme-btn">
        <i className="las la-envelope" /> Hire Me!
      </a>
    </div>
  );
}

export default LeftSidebar;
