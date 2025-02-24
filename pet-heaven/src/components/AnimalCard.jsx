import { useState } from "react";
import { motion } from "framer-motion";
import AdoptionFormPopup from "./AdoptionFormPopup";

const AnimalCard = ({animal}) => {

  const [showAdoptDialog, setShowAdoptDialog] = useState(false);



    return (
      <div className="bg-amber-100 flex justify-center p-4 rounded-2xl" onClick={() => setShowAdoptDialog(true)}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-64 rounded-2xl shadow-lg bg-white overflow-hidden p-4 text-center w-64 rounded-2xl shadow-lg overflow-hidden bg-amber-100 hover:bg-gray-600 hover:text-white"
        >
          <div className="bg-peach-100 flex justify-center p-4">
            <img
              src={animal.image}
              alt={animal.name}
              className="w-40 h-40 object-cover rounded-lg"
            />
          </div>
          <div className="p-4 text-center hover:text-white">
            <h2 className="text-lg font-semibold">Name : {animal.name}</h2>
            <p className="text-sm">Breed : {animal.breed}</p>
            <p className="text-sm">Age: {animal.age}</p>
            <p className="text-sm">Sex: {animal.sex}</p>
          </div>
        </motion.div>

        {showAdoptDialog && <AdoptionFormPopup pet={animal} onClose={() => setShowAdoptDialog(false)} />}
      </div>
    );
}

export default AnimalCard;