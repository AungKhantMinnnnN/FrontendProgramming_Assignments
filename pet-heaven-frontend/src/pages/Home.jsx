import React from "react";
import Hero from "../components/Hero";
import AdoptionComponent from "../components/AdoptionComponent";
import ContactusComponent from "../components/ContactUsComponent";
import DonateComponent from "../components/DonateComponent"
import NewsLetterSubscriptionComponent from "../components/NewsletterSubscriptionComponent";

const Home = () => {
    return (
      <section className="mt-19 bg-amber-100">
        <Hero />
        <AdoptionComponent />
        <ContactusComponent />
        <DonateComponent />
        <NewsLetterSubscriptionComponent />
      </section>
    );
}

export default Home;