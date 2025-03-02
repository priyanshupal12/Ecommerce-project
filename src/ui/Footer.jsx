import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faPinterest,
  faWordpress,
  faTwitter,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import PropTypes from "prop-types";
import { useMediaQuery } from "@mui/material";

const quickLinks = [
  { value: "Terms & Conditions", href: "#!" },
  { value: "Privacy Policy", href: "#!" },
  { value: "Refund Policy", href: "#!" },
];

const customerServiceLinks = [
  { value: "Contact Us", href: "#!" },
  { value: "Track Order", href: "#!" },
  { value: "Return Order", href: "#!" },
  { value: "Cancel Order", href: "#!" },
];

const companyLinks = [
  { value: "About Us", href: "#!" },
  { value: "Careers", href: "#!" },
  { value: "Terms & Conditions", href: "#!" },
  { value: "Privacy Policy", href: "#!" },
];

const socialMedia = [
  { value: "Facebook", href: "#!" },
  { value: "Instagram", href: "#!" },
  { value: "LinkedIn", href: "#!" },
  { value: "Twitter", href: "#!" },
];

const socialIcons = [
  { icon: faLinkedin, href: "#!" },
  { icon: faTwitter, href: "#!" },
  { icon: faPinterest, href: "#!" },
  { icon: faWordpress, href: "#!" },
];

const QuickLinks = ({ qLink }) => (
  <li>
    <a href={qLink.href} className="text-gray-600 hover:text-gray-900 transition duration-300">
      {qLink.value}
    </a>
  </li>
);
QuickLinks.propTypes = {
  qLink: PropTypes.object.isRequired,
};

const CustomerServiceLink = ({ link }) => (
  <li>
    <a href={link.href} className="text-gray-600 hover:text-gray-900 transition duration-300">
      {link.value}
    </a>
  </li>
);
CustomerServiceLink.propTypes = {
  link: PropTypes.object.isRequired,
};

const CompanyLink = ({ companyLink }) => (
  <li>
    <a href={companyLink.href} className="text-gray-600 hover:text-gray-900 transition duration-300">
      {companyLink.value}
    </a>
  </li>
);
CompanyLink.propTypes = {
  companyLink: PropTypes.object.isRequired,
};

const SocialMedia = ({ media }) => (
  <li>
    <a href={media.href} className="text-gray-600 hover:text-gray-900 transition duration-300">
      {media.value}
    </a>
  </li>
);
SocialMedia.propTypes = {
  media: PropTypes.object.isRequired,
};

const SocialItem = ({ social }) => (
  <li>
    <a href={social.href} className="text-gray-600 hover:text-blue-500 transition duration-300">
      <FontAwesomeIcon icon={social.icon} size="lg" />
    </a>
  </li>
);

SocialItem.propTypes = {
  social: PropTypes.object.isRequired,
};

const Shape = () => (
  <svg
    className="ezy__footer8-shape absolute top-0 left-0 w-full"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1920 45"
    preserveAspectRatio="none"
  >
    <path
      d="M 959 45 C 1279.067 45 1599.4 45.667 1920 0 L 0 0 C 319.267 45.667 638.933 45 959 45 z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

const CategoryLinks = ({ title, categories }) => (
  <div>
    <p className="text-gray-400 uppercase text-sm mb-2">{title}</p>
    <ul className="space-y-2">
      {categories.map((category, i) => (
        <li key={i}>
          <a href={category.href} className="text-gray-600 hover:text-gray-900 transition duration-300">
            {category.value}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

CategoryLinks.propTypes = {
  title: PropTypes.string.isRequired,
  categories: PropTypes.array.isRequired,
};

const Footer = () => {
  const isMediumScreen = useMediaQuery("(max-width: 1024px)");

  const menCategories = [
    { value: "Top Wear", href: "#!" },
    { value: "Men's New Arrivals", href: "#!" },
    { value: "Men's T-Shirts", href: "#!" },
    { value: "Men's Hoodies & Sweatshirts", href: "#!" },
    { value: "Men's Jackets", href: "#!" },
    { value: "Men's Jeans", href: "#!" },
    { value: "Men's Sweatpants", href: "#!" },
    { value: "Men's Plus Size T-shirts", href: "#!" },
  ];

  const womenCategories = [
    { value: "Women's Top Wear", href: "#!" },
    { value: "Women's T-Shirts", href: "#!" },
    { value: "Women's Dresses", href: "#!" },
    { value: "Women's Jeans", href: "#!" },
    { value: "Women's Pajamas", href: "#!" },
    { value: "Women's Co-ord Sets", href: "#!" },
    { value: "Women's Plus Size Store", href: "#!" },
  ];

  const bagCategories = [
    { value: "Laptop Bags", href: "#!" },
    { value: "Small Backpacks", href: "#!" },
  ];

  const mobileCoverCategories = [
    { value: "iPhone 14 Cases & Covers", href: "#!" },
    { value: "Samsung Covers", href: "#!" },
    { value: "Realme Covers", href: "#!" },
  ];

  return (
    <section className="ezy__footer8 bg-gradient-to-b from-gray-800 to-black text-white py-16 relative">
      <Shape />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-12 text-center sm:text-left">
          {/* Bewakoof Logo */}
          <div className="mt-4 lg:mt-0">
            <img
              src="https://www.manyavar.com/on/demandware.static/-/Library-Sites-ManyavarSharedLibrary/en_IN/dw9cd4a967/images/Manvayar-Crest-Mohey_Horizontal_3D_logo_Desktop.png"
              alt="Company Logo"
              style={{
                height: isMediumScreen ? "25px" : "40px",
                width: "auto",
              }}
            />
            <p className="mt-3 mb-2 text-white">A better way to build</p>{" "}
            {/* Updated to white */}
            <div>
              <ul className="flex space-x-5 mt-2 justify-center">
                {socialIcons.map((social, i) => (
                  <li key={i}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-blue-500 transition duration-300"
                    >
                      <FontAwesomeIcon icon={social.icon} size="2x" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Customer Service */}
          <div>
            <p className="text-yellow-400 uppercase text-sm mb-2 font-semibold hover:text-yellow-300 transition duration-300">
              Customer Service
            </p>
            <ul className="space-y-2">
              {customerServiceLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-white hover:text-gray-300 transition duration-300"
                  >
                    {link.value}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-yellow-400 uppercase text-sm mb-2 font-semibold hover:text-yellow-300 transition duration-300">
              Company
            </p>
            <ul className="space-y-2">
              {companyLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-white hover:text-gray-300 transition duration-300"
                  >
                    {link.value}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <p className="text-yellow-400 uppercase text-sm mb-2 font-semibold hover:text-yellow-300 transition duration-300">
              Social Media
            </p>
            <ul className="space-y-2">
              {socialMedia.map((media, i) => (
                <li key={i}>
                  <a
                    href={media.href}
                    className="text-white hover:text-gray-300 transition duration-300"
                  >
                    {media.value}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Keep Up to Date */}
          <div className="col-span-2">
            <p className="text-yellow-400 uppercase text-sm mb-2 font-semibold hover:text-yellow-300 transition duration-300">
              Keep Up to Date
            </p>
            <input
              type="email"
              placeholder="Enter Email Id"
              className="px-4 py-2 border rounded-md bg-gray-200 text-gray-700 mb-4"
            />
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
              SUBSCRIBE
            </button>
          </div>
        </div>

        {/* Horizontal line between sections */}
        <hr className="my-8 border-gray-300" />

        {/* Horizontal Categories */}
        <div className="flex justify-between space-x-8">
          <div className="w-1/4">
            <p className="text-yellow-400 uppercase text-lg font-semibold mb-2 hover:text-yellow-300 transition duration-300">
              Men's Clothing
            </p>
            <ul className="space-y-2">
              {menCategories.map((category, i) => (
                <li key={i}>
                  <a
                    href={category.href}
                    className="text-white hover:text-gray-300 transition duration-300"
                  >
                    {category.value}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-1/4">
            <p className="text-yellow-400 uppercase text-lg font-semibold mb-2 hover:text-yellow-300 transition duration-300">
              Women's Clothing
            </p>
            <ul className="space-y-2">
              {womenCategories.map((category, i) => (
                <li key={i}>
                  <a
                    href={category.href}
                    className="text-white hover:text-gray-300 transition duration-300"
                  >
                    {category.value}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-1/4">
            <p className="text-yellow-400 uppercase text-sm mb-2 font-semibold hover:text-yellow-300 transition duration-300">
              Bags
            </p>
            <ul className="space-y-2">
              {bagCategories.map((category, i) => (
                <li key={i}>
                  <a
                    href={category.href}
                    className="text-white hover:text-gray-300 transition duration-300"
                  >
                    {category.value}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-1/4">
            <p className="text-yellow-400 uppercase text-sm mb-2 font-semibold hover:text-yellow-300 transition duration-300">
              Mobile Covers
            </p>
            <ul className="space-y-2">
              {mobileCoverCategories.map((category, i) => (
                <li key={i}>
                  <a
                    href={category.href}
                    className="text-white hover:text-gray-300 transition duration-300"
                  >
                    {category.value}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Horizontal line below categories */}
        <hr className="my-8 border-gray-300" />
        <div className="mt-4 text-center">
          <span className="text-white block mb-2">
            Copyright &copy;
            <img
              src="https://www.manyavar.com/on/demandware.static/-/Library-Sites-ManyavarSharedLibrary/en_IN/dw9cd4a967/images/Manvayar-Crest-Mohey_Horizontal_3D_logo_Desktop.png"
              alt="Company Logo"
              className="inline-block ml-2"
              style={{
                height: isMediumScreen ? "25px" : "30px", // Adjusted size for alignment
                width: "auto",
              }}
            />
            All rights reserved
          </span>
          {quickLinks.map((item, i) => (
            <a
              href={item.href}
              key={i}
              className="ms-2 text-white hover:text-gray-300 transition duration-300"
            >
              {item.value}
            </a>
          ))}
        </div>

        {/* Download the App */}
        <div className="text-center mt-8">
          <p className="text-yellow-400 uppercase text-sm mb-2 font-semibold hover:text-yellow-300 transition duration-300">
            Download the App
          </p>
          <ul className="flex space-x-5 justify-center">
            <li>
              <a href="#!" className="text-white hover:text-blue-500">
                Download on Android
              </a>
            </li>
            <li>
              <a href="#!" className="text-white hover:text-blue-500">
                Download on iOS
              </a>
            </li>
          </ul>
        </div>

        {/* Secure Payment */}
        <div className="text-center mt-8">
          <p className="text-yellow-400 uppercase text-sm mb-2 font-semibold hover:text-yellow-300 transition duration-300">
            100% Secure Payment
          </p>
          <span className="text-white">
            We ensure secure payment processing for every transaction.
          </span>
        </div>
      </div>
    </section>
  );
};

export default Footer;
