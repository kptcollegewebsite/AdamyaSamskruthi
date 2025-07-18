import React from "react";
import HeroSections from "./HeroSections";
import QuickIntro from "./QuickIntro";
import Teaser from "./Teaser";
import GallerySnapshots from "./GallerySnapshots";
import Testimonials from "../Donate/Testimonials";
import Accomplishments from "../About/Accomplishments";
import Stats from "../About/Accomplishments";

const Home = () => {
  return (
    <div>
      <HeroSections />
      <Stats />
      <QuickIntro />
      <Teaser />
      <GallerySnapshots />
      <Testimonials />
    </div>
  );
};

export default Home;
