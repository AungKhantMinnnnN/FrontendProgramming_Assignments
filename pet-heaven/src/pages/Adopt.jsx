import { useState, useEffect } from "react";
import CommonHero from "../components/CommonHero";
import NewsLetterSubscriptionComponent from "../components/NewsletterSubscriptionComponent";
import AnimalCard from "../components/AnimalCard";
import axios from "axios";
import AdoptInstructions from "../components/AdoptInstructions";

// ToDo: Create a backend api to display some pets information.... 

const Adopt = () => {

    const initialState = {
        catResult : [],
        dogResult : [],
        error: null
    }

    const [state, setState] = useState(initialState);

    const catUrl =
      "https://api.thecatapi.com/v1/images/search/?limit=15&page=100&order=DESC";

    const dogUrl =
      "https://api.thedogapi.com/v1/images/search/?limit=15&page=100&order=DESC";

    const getData = async () => {
        try{
            const catResult = await axios.get(catUrl);
            const dogResult = await axios.get(dogUrl);

            console.log("Cat result", catResult);
            console.log("Dog result", dogResult);

            const newData = {
                catResult : catResult.data,
                dogResult : dogResult.data,
                error : null
            };

            setState(newData);

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
            {state.catResult ? (
              state.catResult.map((cat) => <AnimalCard animal={cat} />)
            ) : (
              <p className="text-gray-900">Loading</p>
            )}

            {state.dogResult ? (
              state.dogResult.map((dog) => <AnimalCard animal={dog} />)
            ) : (
              <p className="text-gray-900">Loading</p>
            )}
          </div>
        </div>

        <AdoptInstructions />
        <NewsLetterSubscriptionComponent />
      </section>
    );
}

export default Adopt;