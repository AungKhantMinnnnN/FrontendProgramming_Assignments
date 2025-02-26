import { React, useState } from "react";

const ReleaseForm = () => {

    const [petData, setPetData] = useState({
        petName: '',
        petType: '',
        breed: '',
        age: '',
        gender: '',
        color: '',
        microchipId: '',
        ownerFirstName: '',
        ownerLastName: '',
        ownerEmail: '',
        ownerPhone: '',
        reason: '',
        medicalInfo: '',
        acceptTerms: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setPetData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('pet release from submitted.', petData);
        setPetData({
            petName: '',
            petType: '',
            breed: '',
            age: '',
            gender: '',
            color: '',
            microchipId: '',
            ownerFirstName: '',
            ownerLastName: '',
            ownerEmail: '',
            ownerPhone: '',
            reason: '',
            medicalInfo: '',
            acceptTerms: false
        });
    };

    return(
        <div className="max-w-4xl mx-auto p-6 bg-gray-300 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Pet Release Form</h1>
            <p className="text-center text-gray-600 mb-8">
                Please provide details about the pet you are relasing to our shelter.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="bg-orange-50 p-6 rounded-lg mb-8">
                    <h2 className="text-xl font-semibold mb-4 text-orange-500">Pet Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-gray-700 mb-2" htmlFor="petName">Pet Name</label>
                            <input 
                                type="text"
                                id="petName"
                                name="petName"
                                value={petData.petName}
                                onChange={handleChange}
                                className="w-full p-3 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 mb-2" htmlFor="petType">Pet Type</label>
                            <select
                                id="petType"
                                name="petType"
                                value={petData.petType}
                                onChange={handleChange}
                                className="w-full p-3 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
                                required
                            >
                                <option value="">Select Pet Type</option>
                                <option value="dog">Dog</option>
                                <option value="cat">Cat</option>
                                <option value="bird">Bird</option>
                                <option value="rabbit">Rabbit</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-gray-700 mb-2" htmlFor="petBreed">Breed</label>
                            <input 
                                type="text"
                                id="petBreed"
                                name="petBreed"
                                value={petData.petBreed}
                                onChange={handleChange}
                                className="w-full p-3 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 mb-2" htmlFor="petAge">Age</label>
                            <input 
                                type="number"
                                id="petAge"
                                name="petAge"
                                value={petData.petAge}
                                onChange={handleChange}
                                className="w-full p-3 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 mb-2" htmlFor="gender">Gender</label>
                            <select
                                id="gender"
                                name="gender"
                                value={petData.gender}
                                onChange={handleChange}
                                className="w-full p-3 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
                                required
                            >
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="unknown">Unknown</option>
                            </select>
                        </div>            

                        <div>
                            <label className="block text-gray-700 mb-2" htmlFor="color">Color/Markings</label>
                            <input
                                type="text"
                                id="color"
                                name="color"
                                value={petData.color}
                                onChange={handleChange}
                                className="w-full p-3 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
                                required
                            />
                        </div>

                        <div className="md:col-span-2">
                            <label className="block text-gray-700 mb-2" htmlFor="microchipId">Microchip ID (if available)</label>
                            <input
                                type="text"
                                id="microchipId"
                                name="microchipId"
                                value={petData.microchipId}
                                onChange={handleChange}
                                className="w-full p-3 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
                            />
                        </div>

                        <div className="md:col-span-2">
                            <label className="block text-gray-700 mb-2" htmlFor="medicalInfo">Medical Information</label>
                            <textarea
                                id="medicalInfo"
                                name="medicalInfo"
                                value={petData.medicalInfo}
                                onChange={handleChange}
                                rows="3"
                                placeholder="Please include any known medical conditions, medications, or special needs"
                                className="w-full p-3 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
                            ></textarea>
                        </div>
                    </div>
                </div>

                <div className="bg-orange-50 p-6 rounded-lg mb-8">
                    <h2 className="text-xl font-semibold mb-4 text-orange-500">Owner Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                        <label className="block text-gray-700 mb-2" htmlFor="ownerFirstName">First Name</label>
                        <input
                            type="text"
                            id="ownerFirstName"
                            name="ownerFirstName"
                            value={petData.ownerFirstName}
                            onChange={handleChange}
                            className="w-full p-3 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
                            required
                        />
                        </div>
                        <div>
                        <label className="block text-gray-700 mb-2" htmlFor="ownerLastName">Last Name</label>
                        <input
                            type="text"
                            id="ownerLastName"
                            name="ownerLastName"
                            value={petData.ownerLastName}
                            onChange={handleChange}
                            className="w-full p-3 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
                            required
                        />
                        </div>
                        <div>
                        <label className="block text-gray-700 mb-2" htmlFor="ownerEmail">Email Address</label>
                        <input
                            type="email"
                            id="ownerEmail"
                            name="ownerEmail"
                            value={petData.ownerEmail}
                            onChange={handleChange}
                            className="w-full p-3 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
                            required
                        />
                        </div>
                        <div>
                        <label className="block text-gray-700 mb-2" htmlFor="ownerPhone">Phone Number</label>
                        <input
                            type="tel"
                            id="ownerPhone"
                            name="ownerPhone"
                            value={petData.ownerPhone}
                            onChange={handleChange}
                            className="w-full p-3 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
                            required
                        />
                        </div>
                    </div>
                </div>
                    
                <div className="bg-orange-50 p-6 rounded-lg mb-8">
                    <h2 className="text-xl font-semibold mb-4 text-orange-500">Release Information</h2>
                    <div>
                        <label className="block text-gray-700 mb-2" htmlFor="reason">Reason for Release</label>
                        <textarea
                        id="reason"
                        name="reason"
                        value={petData.reason}
                        onChange={handleChange}
                        rows="4"
                        placeholder="Please share why you need to release your pet to our shelter"
                        className="w-full p-3 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
                        required
                        ></textarea>
                    </div>
                    </div>
                    
                    <div className="flex items-start mb-6">
                    <div className="flex items-center h-5">
                        <input
                        type="checkbox"
                        id="acceptTerms"
                        name="acceptTerms"
                        checked={petData.acceptTerms}
                        onChange={handleChange}
                        className="w-4 h-4 border border-orange-300 rounded bg-orange-50 focus:ring-3 focus:ring-orange-300"
                        required
                        />
                    </div>
                    <label htmlFor="acceptTerms" className="ml-2 text-sm text-gray-600">
                        I certify that I am the legal owner of this pet and understand that by submitting this form, 
                        I am surrendering all rights to the pet. I understand that the shelter will make every effort 
                        to find a suitable new home.
                    </label>
                    </div>
                    
                    <div className="text-center">
                    <button
                        type="submit"
                        className="bg-orange-400 hover:bg-orange-500 text-white font-medium py-3 px-8 rounded-lg transition duration-300"
                        disabled={!petData.acceptTerms}
                    >
                        Submit Form
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ReleaseForm;