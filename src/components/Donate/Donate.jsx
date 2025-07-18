import React from "react";
import DonateBanner from "./DonateBanner";
import DonationMethods from "./DonationMethods";
import VolunteerOpportunities from "./VolunteerOpportunities";
import Testimonials from "./Testimonials";

const Donate = () => {
  return (
    <div>
      <DonateBanner />
      <DonationMethods />
      <VolunteerOpportunities />
      <Testimonials />{" "}
    </div>
  );
};

export default Donate;
