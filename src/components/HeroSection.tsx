import heroImage from "../assets/images/marketing-strategy.png";

export default function HeroSection() {
  return (
    <section className="flex-1 flex items-center justify-center">
      <div className="grid h-full max-w-screen-xl px-4 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12">
        <div className="flex flex-col justify-center mr-auto lg:col-span-7">
          <h1 className="max-w-xl mb-4 text-3xl sm:text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
            Building digital products & brands.
          </h1>
          <p className="max-w-xl mb-6 font-light text-gray-500 lg:mb-8 text-base sm:text-lg lg:text-xl">
            Here at flowbite we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
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
  );
}
