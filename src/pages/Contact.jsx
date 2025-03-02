import React, { useState } from "react";
import MarqueeLogo from "../components/MarqueeLogo";

const ContactForm = () => {
	const [validated, setValidated] = useState(false);

	const handleSubmit = (event) => {
		event.preventDefault();

		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		}

		setValidated(true);
	};

	return (
    <form
      action=""
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
      className="grid grid-cols-12 gap-4 lg:gap-8"
    >
      <div className="col-span-12 md:col-span-6 mb-3 mt-2">
        <input
          className="text-gray-100 dark:text-white max-h-14 w-full bg-transparent border-b-2 border-gray-400 dark:border-white  placeholder:text-gray-900 dark:placeholder:text-gray-300 opacity-90 transition ease-in-out duration-700 focus:border-b-blue-700 dark:focus:border-b-blue-700 focus:outline-none py-4"
          type="text"
          name="name"
          placeholder="FULL NAME"
        />
      </div>
      <div className="col-span-12 md:col-span-6 mb-3 mt-2">
        <input
          className="text-gray-100 dark:text-white max-h-14 w-full bg-transparent border-b-2 border-gray-400 dark:border-white placeholder:text-gray-900 dark:placeholder:text-gray-300 opacity-90 transition ease-in-out duration-700 focus:border-b-blue-700 dark:focus:border-b-blue-700 focus:outline-none py-4"
          type="text"
          name="email"
          placeholder="EMAIL"
        />
      </div>
      <div className="col-span-12 md:col-span-12 mb-3">
        <textarea
          className="text-gray-100 dark:text-white w-full bg-transparent border-b-2 border-gray-400 dark:border-white  placeholder:text-gray-900 dark:placeholder:text-gray-300 opacity-90 transition ease-in-out duration-700 focus:border-b-blue-700 dark:focus:border-b-blue-700  focus:outline-none py-4"
          name="message"
          placeholder="MESSAGE"
          rows="5"
        ></textarea>
      </div>

      <div className="col-span-12">
        <div className="text-center mt-4">
          <button className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-white text-base py-3 px-10 min-w-44 rounded-lg shadow-md hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-700 transition-all">
            SEND MESSAGE
          </button>
        </div>
      </div>
    </form>
  );
};

const Contact = () => {
	return (
        <>
    <section
      className="ezy__contact13 light bg-center bg-cover bg-no-repeat py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white"
      style={{
        backgroundImage:
          "url(https://img.freepik.com/free-photo/natural-textured-surface_23-2151899520.jpg?ga=GA1.1.2013911909.1740885931&semt=ais_hybrid)",
      }}
    >
      <div className="container px-4 mx-auto">
        <div className="w-full flex justify-center items-center">
          <div className="w-full md:w-[55vw] bg-gradient-to-r from-yellow-400 via-gray-600 to-black bg-opacity-70 shadow-xl py-24 px-16 backdrop-filter backdrop-blur-md dark:bg-gray-900 dark:bg-opacity-40 text-gray-900 dark:text-white">
            <div className="text-center pb-8">
              <h3 className="text-3xl sm:text-5xl font-bold leading-none text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-white">
                Contact Us
              </h3>
              <p className="text-base sm:text-lg text-gray-100 sm:text-gray-200 opacity-90 py-4">
              "Get in touch with us for any inquiries or support. We're happy to assist you."
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
    <MarqueeLogo/>
    </>
  );
};


export default Contact;