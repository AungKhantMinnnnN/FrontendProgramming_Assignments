import { useState, useEffect } from "react";
import CommonHero from "../components/CommonHero";
import NewsLetterSubscriptionComponent from "../components/NewsletterSubscriptionComponent";
import AnimalCard from "../components/AnimalCard";
import axios from "axios";
import AdoptInstructions from "../components/AdoptInstructions";

// ToDo: Create a backend api to display some pets information.... 

const Adopt = () => {

    
    const [state, setState] = useState([]);

    const petUrl = "http://127.0.0.1:5000/api/pets";

    const getData = async () => {
        try{
            const response = await axios.get(petUrl);
            setState(response.data);

        }catch (exception){
            console.log("Error while trying to get data.", exception.message);
        }
    };

    useEffect(() => {
        getData();
    }, []);


    return (
      <section className="mt-19">
        <CommonHero
          header="Adopt a pet"
          paragraph="Here are our adorable furry friends that are waiting for you to
            take back home."
        />

        <div className="container mx-auto p-6">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Animal Gallery
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {
              state.map((pet) => <AnimalCard animal={pet} />)
            }
          </div>
        </div>

        <AdoptInstructions />
        <NewsLetterSubscriptionComponent />
      </section>
    );
}

export default Adopt;