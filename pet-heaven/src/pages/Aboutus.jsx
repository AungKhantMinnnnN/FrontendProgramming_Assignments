import React from "react";
import ContactUsComponent from "../components/ContactUsComponent";
import TeamComponent from "../components/TeamComponent";
import NewsLetterSubscriptionComponent from "../components/NewsletterSubscriptionComponent";
import CommonHero from "../components/CommonHero";

const AboutUs = () => {
    return (
      <div className="pt-10">
        <CommonHero
          header="About Us"
          paragraph="Our team at Pet Heaven are deticated to making this world
          a better place for helpless animals."
        />
        <ContactUsComponent />
        <TeamComponent />
        <NewsLetterSubscriptionComponent />
      </div>
    );
}

export default AboutUs;