import React from "react";
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Anpai Technologies: Next-Gen Meeting Productivity" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <ArticlesSection sectionId="articles" heading="Latest articles" sources={['Blog']} />
        <AboutSection sectionId="about" heading="About Anpai" />
        <InterestsSection sectionId="details" heading="Why Anpai?" />
        <ProjectsSection sectionId="features" heading="Built-in features" />
        <ContactSection sectionId="github" heading="Get in touch" />
      </Page>
    </>
  );
}
