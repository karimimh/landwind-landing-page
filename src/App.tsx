import heroImage from "./assets/images/marketing-strategy.png";
import airbnbLogo from "./assets/logos/Airbnb.svg";
import googleLogo from "./assets/logos/Google.svg";
import logo from "./assets/logos/logo.svg";
import mailchimpLogo from "./assets/logos/Mailchimp.svg";
import microsoftLogo from "./assets/logos/Microsoft.svg";
import spotifyLogo from "./assets/logos/Spotify.svg";
import uberLogo from "./assets/logos/uber.svg";

function App() {
  const navLinks = [
    { name: "Company", href: "#" },
    { name: "Marketplace", href: "#" },
    { name: "Features", href: "#" },
    { name: "Team", href: "#" },
    { name: "Contact", href: "#" },
  ];

  const companyLogos = [
    { src: googleLogo, alt: "Google" },
    { src: microsoftLogo, alt: "Microsoft" },
    { src: spotifyLogo, alt: "Spotify" },
    { src: mailchimpLogo, alt: "Mailchimp" },
    { src: airbnbLogo, alt: "Airbnb" },
    { src: uberLogo, alt: "Uber" },
  ];

  return (
    <div className="h-screen flex flex-col bg-white">
      {/* Navbar */}
      <nav className="border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="/" className="flex items-center">
            <img src={logo} className="mr-3 h-6 sm:h-9" alt="Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap">
              Landwind
            </span>
          </a>
          <div className="flex items-center lg:order-2">
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
          <div className="hidden justify-between items-center w-full flex-1 lg:flex px-6 lg:order-1">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
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
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex-1">
        <div className="grid h-full max-w-screen-xl px-4 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12">
          <div className="flex flex-col justify-center mr-auto lg:col-span-7">
            <h1 className="max-w-xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
              Building digital products & brands.
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
              Here at flowbite we focus on markets where technology, innovation,
              and capital can unlock long-term value and drive economic growth.
            </p>
            <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300"
              >
                Start 30 day free trial
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
              >
                Pricing & FAQ
              </a>
            </div>
          </div>
          <div className="hidden lg:flex lg:items-center lg:col-span-5">
            <img src={heroImage} alt="Marketing Strategy" className="w-full" />
          </div>
        </div>
      </section>

      {/* Customer Logos Section */}
      <section className="py-4 pb-16">
        <div className="max-w-screen-xl px-4 mx-auto">
          <div className="grid grid-cols-2 gap-4 text-gray-500 sm:gap-6 md:grid-cols-3 lg:grid-cols-6">
            {companyLogos.map((logo) => (
              <div key={logo.alt} className="flex justify-center items-center">
                <img src={logo.src} className="h-6" alt={logo.alt} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
