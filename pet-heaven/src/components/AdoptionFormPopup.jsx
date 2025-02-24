import { useState } from "react";

const AdoptionFormPopup = ({pet, onClose}) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: ""
    });

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name] : event.target.value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onclose();
    }

    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-200 bg-opacity-20 z-50">
        <div
          className="bg-white p-6 rounded-lg shadow-lg w-96 animate-fade-in relative"
          onClick={(event) => event.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-xl"
          >
            &times;
          </button>

          <div className="text-center">
            <img
              src={pet.image}
              alt={pet.name}
              className="w-32 h-32 object-cover rounded-full mx-auto"
            />
            <h2 className="text-2xl font-bold text-gray-800 mt-3">
              {pet.name}
            </h2>
            <p className="text-gray-600">Breed: {pet.breed}</p>
            <p className="text-gray-600">Age: {pet.age}</p>
            <p className="text-gray-600">Sex: {pet.sex}</p>
          </div>

          {/* User Form */}
          <div className="text-center">
            <form onSubmit={handleSubmit} className="mt-4 space-y-3">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                required
              />
              <button
                type="submit"
                className="w-full bg-orange-400 hover:bg-orange-500 text-white font-bold px-4 py-2 rounded-lg transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
}

export default AdoptionFormPopup;