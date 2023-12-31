import React from "react";

function ResumeSection() {
  return (
    <section className="resume-area page-section scroll-to-page" id="resume">
      <div className="custom-container">
        <div className="resume-content content-width">
          <div className="section-header">
            <h4
              className="subtitle scroll-animation"
              data-animation="fade_from_bottom"
            >
              <i className="las la-briefcase" /> Resume
            </h4>
            <h1 className="scroll-animation" data-animation="fade_from_bottom">
              Education &amp; <span>Experience</span>
            </h1>
          </div>
          <div className="resume-timeline">
            <div
              className="item scroll-animation"
              data-animation="fade_from_right"
            >
              <span className="date">Sept 2022 - Present</span>
              <h2>App Developer</h2>
              <p>Callsmaster Services LLP</p>
              <h2>Web Developer</h2>
              <p>Callsmaster Services LLP</p>
            </div>
            <div
              className="item scroll-animation"
              data-animation="fade_from_right"
            >
              <span className="date">2023 - 2025</span>
              <h2>Bachelor&apos;s in Computer Application</h2>
              <p>New Delhi</p>
            </div>
            <div
              className="item scroll-animation"
              data-animation="fade_from_right"
            >
              <span className="date">2020 - 2022</span>
              <h2>Web Development</h2>
              <p>Arena Animation, Rajouri Garden, New Delhi</p>
            </div>
            <div
              className="item scroll-animation"
              data-animation="fade_from_right"
            >
              <span className="date">2019</span>
              <h2>12th Pass Out</h2>
              <p>CBSE, New Delhi</p>
            </div>
            <div
              className="item scroll-animation"
              data-animation="fade_from_right"
            >
              <span className="date">2017</span>
              <h2>10th Pass Out</h2>
              <p>CBSE, New Delhi</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResumeSection;
