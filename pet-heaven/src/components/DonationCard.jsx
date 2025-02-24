import { UserPlus } from "lucide-react";

const DonationCard = ({ amount }) => {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="mb-6">
        <h2 className="text-5xl font-bold text-orange-400 mb-6">{amount}</h2>
      </div>
      <button className="w-full flex items-center justify-center gap-2 text-orange-400 border-2 border-orange-400 rounded-full py-3 px-6 hover:bg-orange-400 hover:text-white transition-colors duration-300">
        <UserPlus size={20} />
        <span>Donate Now</span>
      </button>
    </div>
  );
};

export default DonationCard;
