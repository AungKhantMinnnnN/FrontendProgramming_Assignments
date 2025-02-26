const CommonHero = ({header, paragraph}) => {
    return (
      <section className="bg-amber-100 text-black pb-20">
        <div className="max-w-4xl mx-auto text-center pt-30">
          <h3 className="text-8xl font-bold text-gray-800 mb-4 underline">
            {header}
          </h3>
          <p className="text-gray-600 text-lg">
            {paragraph}
          </p>
        </div>
      </section>
    );
}

export default CommonHero;