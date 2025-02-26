/* eslint-disable react/jsx-key */
const AdoptInstructions = () => {

    const instructions = [
      {
        icon: (
          <svg
            viewBox="0 0 24 24"
            className="w-8 h-8 text-red-500"
            fill="currentColor"
          >
            <path d="M12 2C7.58 2 4 5.58 4 10c0 6 8 12 8 12s8-6 8-12c0-4.42-3.58-8-8-8zm0 11c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
          </svg>
        ),
        title: "Visit Our Shelters",
        description:
          "Visit our shelters and get to know the fur babies better and even take one home with you.",
        backgroundColor: "bg-red-100",
      },
      {
        icon: (
          <svg
            viewBox="0 0 24 24"
            className="w-8 h-8 text-orange-500"
            fill="currentColor"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
          </svg>
        ),
        title: "Sign Adoption Form",
        description:
          "Sign up our adoption form and we'll contact you to be the owner of your new fur baby",
        backgroundColor: "bg-orange-50",
      },
      {
        icon: (
          <svg
            viewBox="0 0 24 24"
            className="w-8 h-8 text-blue-500"
            fill="currentColor"
          >
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </svg>
        ),
        title: "Bring Your Pet Home",
        description:
          "After the two steps above, if you are eligible to be the owner of your new fur baby you can take them home.",
        backgroundColor: "bg-blue-50",
      },
    ];

    return(
        <div className="max-w-6xl mx-auto px-4 py-16">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold mb-4">How To Adopt A Pet</h1>
                <p className="text-gray-600">
                    Ready to become a paw parent? Adopting a pet from our animal shelters is very easy. Just follow the steps below.
                </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                {
                    instructions.map((step) => (
                        <div className="flex flex-col items-center text-center">
                            <div className={`rounded-xl p-4 mb-6 ${step.backgroundColor}`}>
                                {step.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                            <p className="text-gray-600">{step.description}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default AdoptInstructions