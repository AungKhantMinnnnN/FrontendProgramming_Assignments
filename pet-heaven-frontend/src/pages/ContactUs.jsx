import CommonHero from "../components/CommonHero";
import NewsLetterSubscriptionComponent from "../components/NewsletterSubscriptionComponent";
import ContactInformation from "../components/ContactInformation";
import ContactUsForm from "../components/ContactUsForm";

const ContactUs = () => {

    return(
        <section className="mt-19">
            <CommonHero header="Contact Us" paragraph="If you want to donate to our cause or report a stray animal, please contact our 24/7 call center." />
            <ContactInformation />
            <ContactUsForm />
            <NewsLetterSubscriptionComponent />
        </section>
    )
}

export default ContactUs;