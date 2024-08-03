

const testimonials = [
  {
    name: "Jason McDaniel",
    text: "Hec the Handyman did a fantastic job fixing my leaky faucet. Highly recommend!",
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
      <div className="flex flex-col items-center space-y-4">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md w-3/4 md:w-1/2 flex flex-col items-start">

            <img src="/five_stars_icon.svg" alt="Five Stars" className="w-24 h-auto m-0 my-4" />
            <p className="italic">{testimonial.text}</p>
            <p className="mt-2 font-bold text-right">- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
