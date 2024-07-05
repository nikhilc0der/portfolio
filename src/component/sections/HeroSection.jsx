import React from "react";

function HeroSection() {
  return (
    <section className="hero-section page-section scroll-to-page" id="home">
      <div className="custom-container">
        <div className="hero-content content-width">
          <div className="section-header">
            <h4
              className="subtitle scroll-animation"
              data-animation="fade_from_bottom"
            >
              <i className="las la-home" /> Introduce
            </h4>
            <h1 className="scroll-animation" data-animation="fade_from_bottom">
              Say Hi from <span>Nikhil</span>, Full Stack Developer
            </h1>
          </div>
          <p className="scroll-animation" data-animation="fade_from_bottom">
            Give someone a program; you frustrate them for a day; teach them how
            to program, and you frustrate them for a lifetime
          </p>
          {/* <a
            href="#portfolio"
            className="go-to-project-btn scroll-to scroll-animation"
            data-animation="rotate_up"
          >
            <img src="assets/images/round-text.png" alt="Rounded Text" />
            <i className="las la-arrow-down" />
          </a> */}
          <div className="facts d-flex">
            <div
              className="left scroll-animation"
              data-animation="fade_from_left"
            >
              <h1>2+</h1>
              <p>
                Years of <br />
                Experience
              </p>
            </div>
            <div
              className="right scroll-animation"
              data-animation="fade_from_right"
            >
              <h1>12+</h1>
              <p>projects completed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
