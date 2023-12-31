import React from "react";

function LeftSidebar() {
  return (
    <div className="left-sidebar">
      <div className="sidebar-header " style={{ textAlign: "center" }}>
        {/* <img src="assets/images/logo.png" alt="Logo" /> */}
        <span className="designation">Web and App &amp; Developer</span>
      </div>
      <img
        className="me"
        src="https://media.licdn.com/dms/image/D4D03AQGpnTGAt0cHKw/profile-displayphoto-shrink_800_800/0/1684912585213?e=1708560000&v=beta&t=ZaDk2kut0Uy-OHUY3bROam_zxFBqk7yw7uzDEJEB9D0"
        alt="Me"
      />
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
          <a href="#">
            <i className="lab la-github" />
          </a>
        </li>
      </ul>
      <a href="#" className="theme-btn">
        <i className="las la-envelope" /> Hire Me!
      </a>
    </div>
  );
}

export default LeftSidebar;
