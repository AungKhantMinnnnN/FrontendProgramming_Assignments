import React from "react";
import AnimalCard from "./AnimalCard";

const AdoptionSection = () => {

    {/* Animal json to be replaced with backend request */}
    const animals = [
        {
            name: "Bella",
            breed: "Golden Retriever",
            age: "2 years",
            sex: "Female",
            image: "/src/public/hero-cat-img.jpg"
        },
        {
            name: "Blacky",
            breed: "Labrador",
            age: "3 years",
            sex: "Male",
            image: "/src/public/hero-cat-img.jpg"
        },
        {
            name: "OatMeal",
            breed: "Chihuahua",
            age: "3 years",
            sex: "Male",
            image: "/src/public/hero-cat-img.jpg"
        }
    ]

    return (
        <section className="bg-white items-center justify-center">
            <div className="flex flex-col items-center justify-center min-h-screen p-6">
                <h1 className="text-4xl font-bold text-center mb-6">Animal available for adoption near your location</h1>

                <div className="flex flex-wrap justify-center gap-6">
                    {animals.map((animal, index) => (
                        <AnimalCard key={index} animal={animal} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default AdoptionSection;