import LeftSidebar from "@/component/LeftSidebar";
import ScrollNav from "@/component/ScrollNav";
import SideMenu from "@/component/SideMenu";
import AboutSection from "@/component/sections/AboutSection";
import ContactSection from "@/component/sections/ContactSection";
import HeroSection from "@/component/sections/HeroSection";
import ResumeSection from "@/component/sections/ResumeSection";
import ServicesSection from "@/component/sections/ServicesSection";
import SkillsSection from "@/component/sections/SkillsSection";

export default function Home() {
  return (
    <div>
      {/* <div className="page-loader">
        <div className="bounceball" />
      </div> */}
      <span className="icon-menu">
        <span className="bar" />
        <span className="bar" />
      </span>
      <SideMenu />
      <ScrollNav />
      <LeftSidebar />
      <main className="drake-main">
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <LeftSidebar />
            <HeroSection />
            <AboutSection />
            <ResumeSection />
            <ServicesSection />
            <SkillsSection />
            {/* <PortfolioSection /> */}
            {/* <TestimonialSection /> */}
            <ContactSection />
          </div>
        </div>
      </main>
    </div>
  );
}
