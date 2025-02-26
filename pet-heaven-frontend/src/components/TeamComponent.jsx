import TeamCard from "./TeamCard";

const TeamComponent = () => {

    const teamMembers = [
      {
        name: "Thomas",
        position: "Pet Sitter",
        img: "/src/public/human1.png",
      },
      {
        name: "Thomas",
        position: "Pet Sitter",
        img: "/src/public/human1.png",
      },
      {
        name: "Thomas",
        position: "Pet Sitter",
        img: "/src/public/human1.png",
      },
    ];

    return (
      <section className="bg-amber-100 text-black pt-20 pb-20">
        <div className="max-w-4xl mx-auto text-center pb-5">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Meet Our Team
          </h2>
        </div>

        <div className="flex flex-wrap justify-between">
          {teamMembers.map((member, index) => (
            <TeamCard key={index} member={member} />
          ))}
        </div>
      </section>
    );
}

export default TeamComponent;