

const testimonials = [
  {
    name: "Jason McDaniel",
    text: "&quot;Hec the Handyman did a fantastic job fixing my leaky faucet. Highly recommend!&quot;",
  },
  {
    name: "Debbie Smith",
    text: "&quot;Professional and efficient. My go-to handyman in Temple, TX.&quot;",
  },
  {
    name: "Robert Wise",
    text: "&quot;Excellent service and attention to detail. Will definitely use again!&quot;",
  },
  {
    name: "Sara Benecourt",
    text: "&quot;Hec the Handyman showed up for a free estimate, and ended up fixing everything on the spot! Super convenient and great work. Definitely calling them again!&quot;",
  },
];


const Testimonials = () => {
  return (
    <section className="bg-gray-800 py-8">
      <h2 className="text-3xl font-bold mb-4 text-center text-white">Testimonials</h2>
      <div className="flex flex-col items-center space-y-4 p-4 lg:flex-row lg:space-y-0 lg:space-x-4">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md w-3/4 md:w-full flex flex-col items-start lg:min-h-96">

            <img src="/five_stars_icon.svg" alt="Five Stars" className="w-24 h-auto m-0 my-4" />
            <p className="italic" dangerouslySetInnerHTML={{ __html: testimonial.text }} />
            <p className="mt-2 font-bold text-right">- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
