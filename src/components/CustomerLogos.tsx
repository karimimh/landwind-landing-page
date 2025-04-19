import airbnbLogo from "../assets/logos/Airbnb.svg";
import googleLogo from "../assets/logos/Google.svg";
import mailchimpLogo from "../assets/logos/Mailchimp.svg";
import microsoftLogo from "../assets/logos/Microsoft.svg";
import spotifyLogo from "../assets/logos/Spotify.svg";
import uberLogo from "../assets/logos/uber.svg";

const companyLogos = [
  { src: googleLogo, alt: "Google" },
  { src: microsoftLogo, alt: "Microsoft" },
  { src: spotifyLogo, alt: "Spotify" },
  { src: mailchimpLogo, alt: "Mailchimp" },
  { src: airbnbLogo, alt: "Airbnb" },
  { src: uberLogo, alt: "Uber" },
];

export default function CustomerLogos() {
  return (
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
  );
}
