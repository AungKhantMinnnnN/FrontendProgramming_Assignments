import React from "react";
import DonationCard from "./DonationCard";

const DonationOptions = () => {

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="grid md:grid-cols-3 gap-8">
        <DonationCard amount="50SGD" />
        <DonationCard amount="100SGD" />
        <DonationCard amount="150SGD" />
      </div>
    </div>
  );
};

export default DonationOptions;
