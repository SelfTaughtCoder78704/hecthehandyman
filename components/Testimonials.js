const Testimonials = () => {
  return (
    <section className="bg-gray-800 px-8 py-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">What Our Customers Can Expect</h2>
        <p className="text-center mb-10 text-white">We&apos;re committed to providing excellent service to our customers. Here&apos;s what you can expect when working with Hec the Handyman:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="font-semibold mb-2 text-xl text-gray-800">Reliability</h3>
            <p className="text-gray-600">We pride ourselves on being punctual and dependable. When we set an appointment, you can count on us to be there.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="font-semibold mb-2 text-xl text-gray-800">Quality Workmanship</h3>
            <p className="text-gray-600">Our team is skilled and experienced. We ensure that every job is completed to the highest standards.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="font-semibold mb-2 text-xl text-gray-800">Customer Satisfaction</h3>
            <p className="text-gray-600">Your satisfaction is our top priority. We work closely with you to ensure the results meet your expectations.</p>
          </div>
        </div>
        <p className="text-center mt-10 text-white">We&apos;re always striving to improve our services. If you&apos;ve worked with us, we&apos;d love to hear your feedback!</p>
      </div>
    </section>
  );
};

export default Testimonials;