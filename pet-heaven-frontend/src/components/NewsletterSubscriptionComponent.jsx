import React, { useState } from "react";

const NewsLetterSubscriptionComponent = () => {
    const [email, setEmail] = useState("");

    const subscribe = () => {
        console.log(`Subscribed with : ${email}`);
    }

    return (
      <section className="bg-white min-h-[40vh] flex items-center justify-center p-6">
        <div className="max-w-2xl w-full text-center border-4 border-orange-400 rounded-full p-6 bg-amber-100 shadow-lg">
          <h1 className="text-3xl md:text-4xl font-bold text-black">
            Subscribe to our newsletter
          </h1>
          <p className="text-gray-600 mt-3">
            Want to get the latest updates on pet care? Then subscribe to our
            newsletter for fun tips, tutorials and much more.
          </p>

          <div className="mt-6 flex items-center bg-white rounded-full shadow-lg p-2 w-full max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Your Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 outline-none bg-transparent text-gray-600"
            />
            <button
              onClick={subscribe}
              className="bg-orange-400 hover:bg-orange-500 text-white font-bold px-6 py-3 rounded-full transition"
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>
    );
}

export default NewsLetterSubscriptionComponent;