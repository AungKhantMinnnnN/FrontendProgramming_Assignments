import React, { useState, useEffect } from "react";
import AnimalCard from "./AnimalCard";
import axios from "axios";

const AdoptionComponent = () => {

    const [animals, setAnimals] = useState([]);

    const animalsUrl = "http://127.0.0.1:5000/api/pets";

    const fetchAnimals = async () =>{
      try{
        const response = await axios.get(animalsUrl);
        if(response.data.length > 3){
          setAnimals(response.data.slice(0, 3));
        }
      }catch (exception){
        console.log("Error while trying to get data.", exception.message);
      }
    };

    useEffect(() => {
        fetchAnimals();
    }, []);
    {/* Animal json to be replaced with backend request */}
    // const animals = [
    //     {
    //         name: "Bella",
    //         breed: "Golden Retriever",
    //         age: "2 years",
    //         sex: "Female",
    //         image: "/src/public/hero-cat-img.jpg"
    //     },
    //     {
    //         name: "Blacky",
    //         breed: "Labrador",
    //         age: "3 years",
    //         sex: "Male",
    //         image: "/src/public/hero-cat-img.jpg"
    //     },
    //     {
    //         name: "OatMeal",
    //         breed: "Chihuahua",
    //         age: "3 years",
    //         sex: "Male",
    //         image: "/src/public/hero-cat-img.jpg"
    //     }
    // ]

    return (
      <section className="bg-white items-center justify-center pt-50">
        <div className="flex flex-col items-center justify-center p-6">
          <h1 className="text-4xl font-bold text-center mb-6">
            Animal available for adoption near your location
          </h1>

          <div className="flex flex-wrap justify-center gap-6">
            {animals.map((animal, index) => (
              <AnimalCard key={index} animal={animal} />
            ))}
          </div>
        </div>
      </section>
    );
}

export default AdoptionComponent;