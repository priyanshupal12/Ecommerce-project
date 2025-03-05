import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faPinterest, faWordpress, faTwitter, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

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
];

const socialIcons = [
  { icon: faLinkedin, href: "#!" },
  { icon: faTwitter, href: "#!" },
  { icon: faPinterest, href: "#!" },
  { icon: faWordpress, href: "#!" },
  { icon: faFacebook, href: "#!" },
  { icon: faInstagram, href: "#!" },
];

const Footer = () => {
  return (
    <footer className="bg-primary text-text py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Company Logo & Socials */}
          <div>
            <img
              src="https://www.manyavar.com/on/demandware.static/-/Library-Sites-ManyavarSharedLibrary/en_IN/dw9cd4a967/images/Manvayar-Crest-Mohey_Horizontal_3D_logo_Desktop.png"
              alt="Company Logo"
              className="h-10 mb-4"
            />
            <p className="text-accent">A better way to build</p>
            <div className="flex space-x-4 mt-3">
              {socialIcons.map((social, index) => (
                <a key={index} href={social.href} className="text-text hover:text-highlight transition">
                  <FontAwesomeIcon icon={social.icon} size="lg" />
                </a>
              ))}
            </div>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-highlight font-semibold mb-3 uppercase">Customer Service</h4>
            <ul className="space-y-2">
              {customerServiceLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-accent hover:text-highlight transition">
                    {link.value}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-highlight font-semibold mb-3 uppercase">Company</h4>
            <ul className="space-y-2">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-accent hover:text-highlight transition">
                    {link.value}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-highlight font-semibold mb-3 uppercase">Stay Updated</h4>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 bg-secondary text-primary rounded focus:outline-none"
              />
              <button className="bg-highlight text-primary px-4 py-2 rounded hover:bg-yellow-500 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-6 border-accent" />

        {/* Footer Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} Manyavar. All rights reserved.</p>
          <div className="flex space-x-4 mt-2 sm:mt-0">
            {quickLinks.map((item, index) => (
              <a key={index} href={item.href} className="text-accent hover:text-highlight transition">
                {item.value}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
