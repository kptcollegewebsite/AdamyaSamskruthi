import React from "react";
import Mission from "./Mission";
import OurStory from "./OurStory";
import CoreBeliefs from "./CoreBeliefs";
import OurTeam from "./OurTeam";
import Accomplishments from "./Accomplishments";
import Volunteers from "./Volunteers";
import CallToAction from "./CallToAction";

const About = () => {
  return (
    <div>
      <Mission />
      <OurStory />
      <CoreBeliefs />
      <OurTeam />
      <Accomplishments />
      <CallToAction />
      <Volunteers />
      {/* <Mission />
      <TreeMission />
      <MissionPage />
      <ShaktiPage />
      <OurTeam /> */}
    </div>
  );
};

export default About;
