import Link from "next/link";
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
              <h2>1. CRM Dashboard</h2>
              <p>
                &gt; Developed a CRM dashboard for efficient management of
                multiple websites.
                <br />
                &gt; Created a centralized control panel for streamlined website
                management. <br />
                &gt; Implemented employee access management with role-based
                permissions. <br />
                &gt; Integrated service workers to enable real-time
                notifications. <br />
                &gt; Technologies Used :- Node.js, React, Redux, Rest Api
                ,Service Workers, MongoDB.
              </p>
            </div>
            <div
              className="service-item scroll-animation"
              data-animation="fade_from_bottom"
            >
              <i className="las la-code" />
              <h2>2. Rishtey NCR</h2>
              <p>
                &gt; Purpose :- Matrimonial matchmaking platform
                <br />
                &gt; Key Features:- Verified user profiles, Multiple membership
                plans, Real-time notifications, Advanced search filters, Premium
                member interaction, Online and offline matchmaking events.
                <br />
                &gt; Integrated PayU as the payment gateway for secure and
                efficient online transactions. <br />
                &gt; Technologies Used:- Next.js, MySql, Redux, Rest Api
                ,Service Workers PayU.
              </p>
              <span className="projects">
                <Link href={"https://rishteyncr.com/"}>Link</Link>
              </span>
            </div>
            <div
              className="service-item scroll-animation"
              data-animation="fade_from_bottom"
            >
              <i className="las la-bezier-curve" />
              <h2>3. Video Downloader</h2>
              <p>
                &gt; Multi-Platform Support :- Enables video and audio downloads
                from YouTube, Spotify, Instagram, Twitter, etc.
                <br />
                &gt; Efficient Downloading :- Quick, hassle-free video and audio
                saving for offline viewing. <br />
                &gt; Developed app applications for multiple social media
                platform video and audio downloads. <br />
                &gt; Led the integration of Next.js, Fetch, Node.js,
                Npm-Package, API, and Tailwind CSS, Build up the development
                stack, boosting website speed by 40%, and elevating user
                experience.
              </p>
              <span className="projects">
                <Link href={"https://aiovideodownloader.com/"}>Link</Link>
              </span>
            </div>
            <div
              className="service-item scroll-animation"
              data-animation="fade_from_bottom"
            >
              <i className="las la-code" />
              <h2>4. What&apos;s New Dawg</h2>
              <p>
                &gt; Content Management System (CMS): Implemented a custom CMS
                for easy content creation, editing, and publishing.
                <br />
                &gt; User Authentication: Developed secure user registration and
                login functionalities with social media integration. <br />
                &gt; Responsive Design: Ensured the website is fully responsive,
                providing an optimal user experience on desktops, tablets, and
                mobile devices. <br />
                &gt; Search Functionality: Added an advanced search feature to
                help users find articles and content quickly.
              </p>
              <span className="projects">
                <Link href={"https://www.whatsnewdawg.com/"}>Link</Link>
              </span>
            </div>
            <div
              className="service-item scroll-animation"
              data-animation="fade_from_bottom"
            >
              <i className="las la-bezier-curve" />
              <h2>5. Car Rental</h2>
              <p>
                &gt; User Authentication: Implemented secure user registration
                and login functionalities with social media integration.
                <br /> &gt; Vehicle Search and Booking: Developed an advanced
                search and booking system allowing users to find and reserve
                vehicles based on various criteria such as location, date, and
                vehicle type.
                <br /> &gt; Responsive Design: Ensured the website is fully
                responsive, providing an optimal user experience on desktops,
                tablets, and mobile devices.
              </p>
              <span className="projects">
                <Link href={"https://carrental.rent/"}>Link</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* 
      ================================
      ===============================
      ========================== */}
      {/* <div className="custom-container">
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
      </div> */}
    </section>
  );
}

export default ServicesSection;
