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
              <h2>Full Stack Developer</h2>
              <p>Callsmaster Services LLP ( april 2023 - present )</p>
              <h2>Web Developer</h2>
              <p>Callsmaster Services LLP ( september 2022 - april 2023 )</p>
            </div>
            <div
              className="item scroll-animation"
              data-animation="fade_from_right"
            >
              <span className="date">2019 - 2022</span>
              <h2>Bachelor&apos;s in Computer Application ( 65% )</h2>
              <p>Maharaja Agrasen University Uttarakhand</p>
            </div>

            <div
              className="item scroll-animation"
              data-animation="fade_from_right"
            >
              <span className="date">2019</span>
              <h2>12th Pass Out ( 62% )</h2>
              <p>CBSE, New Delhi</p>
            </div>
            <div
              className="item scroll-animation"
              data-animation="fade_from_right"
            >
              <span className="date">2017</span>
              <h2>10th Pass Out ( 62.7% )</h2>
              <p>CBSE, New Delhi</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResumeSection;
