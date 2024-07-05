/* eslint-disable @next/next/no-css-tags */
import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "Experienced Full-Stack Developer | Nikhil Kumar - Web Development Portfolio",
  description:
    "Explore the portfolio of Nikhil Kumar, a skilled full-stack developer with expertise in JavaScript, Node.js, React, and more. Discover my projects, including CRM dashboards, Chrome extensions, and web applications. Let's create something amazing together.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="assets/css/line-awesome.min.css" />
        <link href="assets/css/bootstrap.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="assets/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="assets/css/owl.theme.default.min.css" />
        <link rel="stylesheet" href="assets/css/animate.min.css" />
        <link rel="stylesheet" href="assets/css/smooth-scrollbar.css" />
        <link rel="stylesheet" href="assets/css/lightbox.min.css" />

        <link rel="stylesheet" href="assets/css/style.css" />
        <link rel="stylesheet" href="assets/css/responsive.css" />
      </head>
      <body className={inter.className}>
        {children}
        <Script src="assets/js/jquery.js"></Script>
        <Script src="assets/js/bootstrap.bundle.min.js"></Script>
        <Script src="assets/js/owl.carousel.js"></Script>
        <Script src="assets/js/gsap.min.js"></Script>
        <Script src="assets/js/ScrollTrigger.min.js"></Script>
        <Script src="assets/js/ScrollToPlugin.min.js"></Script>
        <Script src="assets/js/lightbox.min.js"></Script>

        <Script src="assets/js/main.js"></Script>
        <Script src="assets/js/ajax-form.js"></Script>
        <Script src="assets/js/color.js"></Script>
      </body>
    </html>
  );
}
