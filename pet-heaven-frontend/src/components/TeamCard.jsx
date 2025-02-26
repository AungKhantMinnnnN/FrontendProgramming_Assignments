import { FaFacebook, FaInstagram } from 'react-icons/fa';

const TeamCard = ({member}) => {
    return (
      <div className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src={member.img}
          className="w-full h-48 object-cover"
          alt={member.name}
        />

        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{member.name}</div>
          <p className="text-gray-600 text-base">{member.position}</p>
        </div>

        <div className="px-6 pt-4 pb-6 flex justify-center space-x-4">
          <a
            href="https://facebook.com"
            className="text-gray-500 hover:text-blue-600"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://instagram.com"
            className="text-gray-500 hover:text-pink-600"
          >
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    );
}

export default TeamCard;