import React from "react";

function ServicesSection() {
  return (
    <section
      className="services-area page-section scroll-to-page"
      id="services"
    >
      <div className="custom-container">
        <div className="services-content content-width">
          <div className="section-header">
            <h4
              className="subtitle scroll-animation"
              data-animation="fade_from_bottom"
            >
              <i className="las la-stream" /> Projects
            </h4>
            <h1 className="scroll-animation" data-animation="fade_from_bottom">
              My <span>Projects</span>
            </h1>
          </div>
          <div className="services-items">
            <div
              className="service-item scroll-animation"
              data-animation="fade_from_bottom"
            >
              <i className="las la-bezier-curve" />
              <h2>Website Design</h2>
              <p>
                I created digital products with unique ideas use Figma &amp;
                Framer
              </p>
              <span className="projects">24 Projects</span>
            </div>
            <div
              className="service-item scroll-animation"
              data-animation="fade_from_bottom"
            >
              <i className="las la-code" />
              <h2>Development</h2>
              <p>I build website go live with Framer, Webflow or WordPress</p>
              <span className="projects">126 Projects</span>
            </div>
            <div
              className="service-item scroll-animation"
              data-animation="fade_from_bottom"
            >
              <i className="las la-bezier-curve" />
              <h2>SEO/Marketing</h2>
              <p>Increase the traffic for your website with SEO optimized</p>
              <span className="projects">8 Projects</span>
            </div>
          </div>
        </div>
      </div>
      {/* 
      ================================
      ===============================
      ========================== */}
      <div className="custom-container">
        <div className="services-content content-width">
          <div className="section-header">
            <h1
              className="scroll-animation"
              data-animation="fade_from_bottom"
              style={{ marginBottom: "30px", marginTop: "30px" }}
            >
              My <span>Professional</span>
            </h1>
          </div>
          <div className="services-items">
            <div
              className="service-item scroll-animation"
              data-animation="fade_from_bottom"
            >
              <i className="las la-bezier-curve" />
              <h2>Website Design</h2>
              <p>
                I created digital products with unique ideas use Figma &amp;
                Framer
              </p>
              <span className="projects">24 Projects</span>
            </div>
            <div
              className="service-item scroll-animation"
              data-animation="fade_from_bottom"
            >
              <i className="las la-code" />
              <h2>Development</h2>
              <p>I build website go live with Framer, Webflow or WordPress</p>
              <span className="projects">126 Projects</span>
            </div>
            <div
              className="service-item scroll-animation"
              data-animation="fade_from_bottom"
            >
              <i className="las la-bezier-curve" />
              <h2>SEO/Marketing</h2>
              <p>Increase the traffic for your website with SEO optimized</p>
              <span className="projects">8 Projects</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
