import { Mail, Phone, MapPin } from "lucide-react";


const ContactInformation = () => {
    const contactDetails = [
        {
            icon: <Mail className="h-6 w-6 text-white" />,
            items: ["PetHeaven_AnimalRescue@gmail.com"]
        },
        {
            icon: <Phone className="h-6 w-6 text-white" />,
            items: ["(+65)80905438"]
        },
        {
            icon: <MapPin className="h-6 w-6 text-white" />,
            items: ["20 Sin Ming Road, Singapore"]
        }
    ]

    return(
        <div className="max-w-6xl mx-auto px-4 py-16">
            <div className="grid md:grid-cols-3 gap-8">
                {contactDetails.map((contact, index) => (
                <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                        <div className="bg-orange-400 rounded-full p-4 flex items-center justify-center">
                            {contact.icon}
                        </div>
                    </div>
                    <div className="flex flex-col">
                    {contact.items.map((item, itemIndex) => (
                        <span key={itemIndex} className="text-gray-600">
                            {item}
                        </span>
                    ))}
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}

export default ContactInformation;