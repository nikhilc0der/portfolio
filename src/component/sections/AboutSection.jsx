import React from "react";

function AboutSection() {
  return (
    <section className="about-area page-section scroll-to-page" id="about">
      <div className="custom-container">
        <div className="about-content content-width">
          <div className="section-header">
            <h4
              className="subtitle scroll-animation"
              data-animation="fade_from_bottom"
            >
              <i className="lar la-user" /> About
            </h4>
            <h1 className="scroll-animation" data-animation="fade_from_bottom">
              About
              <span> Me</span>
            </h1>
          </div>
          <p
            className="scroll-animation"
            data-animation="fade_from_bottom"
            style={{ textAlign: "justify" }}
          >
            Since beginning my journey as a freelance front-end developer nearly
            2 years ago, As a dedicated and skilled full-stack developer with 2
            years of experience so far, I have a proven track record of
            designing, developing, and deploying web, app applications. My
            expertise spans both front-end and back-end technologies, and app
            applications enabling me to create seamless and efficient user
            experiences. I am proficient in various programming languages,
            frameworks, and tools, and I thrive in collaborative environments
            where innovation and problem-solving are key.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
