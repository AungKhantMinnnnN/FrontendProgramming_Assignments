import CommonHero from "../components/CommonHero"
import NewsLetterSubscriptionComponent from "../components/NewsletterSubscriptionComponent";
import ReleaseForm from "../components/ReleaseForm";

const Release = () => {
    return(
        <section className="mt-19">
            <CommonHero header="Release" paragraph="Don't abandon your furry friends. Relase them to us and we'll find a new home for them." />
            <div className="mt-5">
                <ReleaseForm />
            </div>
            <NewsLetterSubscriptionComponent />
        </section>
    )
}

export default Release;