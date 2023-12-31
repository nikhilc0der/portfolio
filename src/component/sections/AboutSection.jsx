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
            2 years ago, An adept developer proficient in HTML, CSS, JavaScript,
            React.js, Next.js, React Native, Node.js, Express.js, and MongoDB.
            Excels in building responsive websites and dynamic mobile apps,
            seamlessly integrating front-end elegance with sturdy back-end
            systems. Thrives on creating engaging digital experiences that
            transcend platforms, focusing on user-centric design and
            functionality. Passionate about leveraging a diverse skill set to
            craft innovative solutions that captivate audiences and elevate the
            digital landscape with intuitive interfaces and scalable
            architectures.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
