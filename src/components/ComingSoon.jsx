import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const clientLogos = [
  {
    logo: "https://img.freepik.com/free-photo/fast-fashion-concept-with-full-clothing-store_23-2150871313.jpg?ga=GA1.1.2013911909.1740885931&semt=ais_hybrid",
    alt: "",
  },
  {
    logo: "https://img.freepik.com/premium-photo/womans-dress-made-out-colored-paper_87646-33601.jpg?ga=GA1.1.2013911909.1740885931&semt=ais_hybrid",
    alt: "",
  },
  {
    logo: "https://img.freepik.com/free-photo/fast-fashion-concept-with-piles-clothes_23-2150871414.jpg?ga=GA1.1.2013911909.1740885931&semt=ais_hybrid",
    alt: "",
  },
  {
    logo: "https://img.freepik.com/free-photo/women-shopping-buying-consumer-products-customer-day-celebration_23-2151623391.jpg?ga=GA1.1.2013911909.1740885931&semt=ais_hybrid",
    alt: "",
  },
  {
    logo: "https://img.freepik.com/free-photo/portrait-fashionable-robot_23-2151845051.jpg?ga=GA1.1.2013911909.1740885931&semt=ais_hybrid",
    alt: "",
  },
  {
    logo: "https://img.freepik.com/free-photo/portrait-man-wearing-lavender-colored-fashion-garments-color-year_23-2151386989.jpg?ga=GA1.1.2013911909.1740885931&semt=ais_hybrid",
    alt: "",
  },
];

const ComingSoon = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // You can adjust the global duration if needed
    });
  }, []);

  return (
    <section className="ezy__clients10 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
      <div className="container px-4">
        <div className="grid grid-cols-12">
          <div className="col-span-12 xl:col-span-4 xl:pr-12 mb-6 md:mb-12">
            <h2 className="font-bold text-2xl lg:text-[45px] leading-none mb-6">
              Coming Soon!
            </h2>
            <p className="text-lg leading-9 opacity-70">
              We are working on something special for your shopping experience!
              Stay tuned for a seamless and exciting e-commerce platform where
              you can shop your favorite products, enjoy exclusive deals, and
              get the best offers delivered right to your doorstep. It’s almost
              here!
            </p>
          </div>
          <div className="col-span-12 xl:col-span-8">
            <div className="grid grid-cols-12 gap-6 text-center">
              {/* Add AOS Animation to each client logo container */}
              <div
                className="col-span-12 sm:col-span-4"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                {clientLogos.slice(0, 2).map((client, i) => (
                  <img
                    src={client.logo}
                    alt={client.alt}
                    className="rounded-[30px] w-100 h-auto mb-4 lg:mb-6"
                    key={i}
                  />
                ))}
              </div>
              <div
                className="col-span-12 sm:col-span-4 md:mt-12"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                {clientLogos.slice(2, 4).map((client, i) => (
                  <img
                    src={client.logo}
                    alt={client.alt}
                    className="rounded-[30px] w-100 h-auto mb-4 lg:mb-6"
                    key={i}
                  />
                ))}
              </div>
              <div
                className="col-span-12 sm:col-span-4 md:mt-12 md:pt-12"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                {clientLogos.slice(4, 6).map((client, i) => (
                  <img
                    src={client.logo}
                    alt={client.alt}
                    className="rounded-[30px] w-100 h-auto mb-4 lg:mb-6"
                    key={i}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
