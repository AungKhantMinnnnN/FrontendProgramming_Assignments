import React from "react";
import { motion } from "framer-motion";

const AnimalCard = ({animal}) => {
    return (

        <div className="bg-amber-100 flex justify-center p-4">
            <motion.div
                initial={{ opacity: 0, y: 50 }} // Start position
                whileInView={{ opacity: 1, y: 0 }} // Animate when in view
                transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
                viewport={{ once: false }} // Ensures it animates only once
                className="w-64 rounded-2xl shadow-lg bg-white overflow-hidden p-4 text-center w-64 rounded-2xl shadow-lg overflow-hidden bg-amber-100">
                    <div className="bg-peach-100 flex justify-center p-4">
                        <img src={animal.image} alt={animal.name} className="w-40 h-40 object-cover rounded-lg" />
                    </div>
                    <div className="p-4 text-center">
                        <h2 className="text-lg font-semibold">Name : {animal.name}</h2>
                        <p className="text-sm text-gray-600">Breed : {animal.breed}</p>
                        <p className="text-sm text-gray-600">Age: {animal.age}</p>
                        <p className="text-sm text-gray-600">Sex: {animal.sex}</p>
                    </div>
            </motion.div>
        </div>
        
    )
}

export default AnimalCard;