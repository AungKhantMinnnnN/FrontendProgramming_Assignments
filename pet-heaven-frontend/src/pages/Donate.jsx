import CommonHero from "../components/CommonHero";
import DonateComponent from "../components/DonateComponent";
import NewsLetterSubscriptionComponent from "../components/NewsletterSubscriptionComponent";
import DonationOptions from "../components/DonationOptions";

const Donate = () => {
    return(
        <section className="mt-19">
            <CommonHero header="Donate" paragraph="Support our cause by donating to save the lives of homeless animals" /> 
            <DonateComponent />
            <DonationOptions />
            <NewsLetterSubscriptionComponent />
        </section>
    );
}

export default Donate;