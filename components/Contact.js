import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import InputMask from 'react-input-mask';

function ContactForm() {
  const [state, handleSubmit] = useForm("mdknovrb");
  const [phoneNumber, setPhoneNumber] = React.useState('');

  const validatePhoneNumber = (number) => {
    const phoneRegex = /^\(\d{3}\) \d{3}-\d{4}$/;
    return phoneRegex.test(number);
  };

  const handlePhoneChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  if (state.succeeded) {
    return <p className="text-center text-green-500">Thanks for reaching out! We&apos;ll contact you shortly.</p>;
  }
  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          className="w-full px-3 py-2 border rounded-lg"
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className="text-red-500 text-sm mt-1"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="phone" className="block text-gray-700">
          Phone Number
        </label>
        <InputMask
          mask="(999) 999-9999"
          value={phoneNumber}
          onChange={handlePhoneChange}
        >
          {(inputProps) => (
            <input
              {...inputProps}
              id="phone"
              name="phone"
              type="tel"
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
          )}
        </InputMask>
        {phoneNumber && !validatePhoneNumber(phoneNumber) && (
          <p className="text-red-500 text-sm mt-1">Please enter a valid phone number</p>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-700">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full px-3 py-2 border rounded-lg"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          className="text-red-500 text-sm mt-1"
        />
      </div>
      <button
        type="submit"
        disabled={state.submitting || (phoneNumber && !validatePhoneNumber(phoneNumber))}
        className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 disabled:opacity-50"
      >
        Submit
      </button>
    </form>
  );
}

function ContactSection() {
  return (
    <div className="p-8">
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4 text-center">Contact Us</h2>
        <ContactForm />
      </section>
      <section className="text-center">
        <h2 className="text-[10px] md:text-3xl font-bold mb-4">Contact Information</h2>
        <p className="mb-2"><strong>Phone:</strong><br/><a href="tel:+18303213057" className="hover:underline">(830) 321-3057</a></p>
        <p className="mb-2"><strong>Email:</strong><br/><a href="mailto:bobby@hecthehandyman.com" className="hover:underline">bobby@hecthehandyman.com</a></p>
        <p className="mb-2"><strong>Service Area:</strong><br/> Serving Temple, TX and Surrounding Areas</p>
      </section>
      <section className="mb-8 text-center">
        <div className="flex justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d54935.91858229366!2d-97.36968385!3d31.09856555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1681766322054!5m2!1sen!2sus"
            width="600"
            height="450"
            allowFullScreen=""
            loading="lazy"
            className="border-0 rounded-lg shadow-lg"
          ></iframe>
        </div>
      </section>

    </div>
  );
}

export default ContactSection;