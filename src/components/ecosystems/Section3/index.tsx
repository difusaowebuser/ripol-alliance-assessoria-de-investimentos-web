import * as React from "react";

export const Section3 = () => {
  return (
    <section className="flex flex-wrap relative">
      <div className="flex items-center justify-center w-full lg:w-1/2 bg-[url('/section-3-image.jpg')] bg-cover bg-no-repeat bg-center h-96 lg:h-auto"></div>
      <div className="flex items-center lg:w-1/2 bg-[--brown-color] py-24 lg:py-32 max-w-screen-2xl mx-auto container flex-wrap relative px-6 lg:pl-24 lg:pr-0">
        <div className="lg:max-w-2xl text-white">
          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight xl:tracking-tighter">
            Consectetur adipisicing
          </h1>
          <p className="text-lg mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a
              href="https://web3templates.com/templates/astroship-starter-website-template-for-astro"
              target="_blank"
              rel="noopener"
              className="rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 px-5 py-2.5 bg-[--primary-color] text-white hover:opacity-80 border-2 border-transparent flex gap-1 items-center justify-center"
            >
              Conheça
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
