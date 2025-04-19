import { useState } from "react";
import logo from "../assets/logos/logo.svg";
import MobileMenuButton from "./MobileMenuButton";

const navLinks = [
  { name: "Company", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Features", href: "#" },
  { name: "Team", href: "#" },
  { name: "Contact", href: "#" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="px-4 lg:px-6 py-2.5">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <a href="/" className="flex items-center">
          <img src={logo} className="mr-3 h-6 sm:h-9" alt="Logo" />
          <span className="self-center text-xl font-semibold whitespace-nowrap">
            Landwind
          </span>
        </a>

        <div className="justify-between relative items-center w-full flex flex-1 ml-4 lg:mx-6">
          <MobileMenuButton
            isOpen={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
          {isMenuOpen && (
            <div className="absolute top-full border rounded-lg left-0 w-full bg-white shadow-lg block lg:hidden">
              <ul className="flex flex-col font-medium">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-50"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <ul className="hidden lg:flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-50 lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="items-center justify-end w-full sm:w-[unset] flex">
          <a
            href="#"
            className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2"
          >
            Log in
          </a>
          <a
            href="#"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5"
          >
            Get started
          </a>
        </div>
      </div>
    </nav>
  );
}
