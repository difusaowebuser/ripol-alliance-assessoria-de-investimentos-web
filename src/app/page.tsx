import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="border-t-8 border-[--primary-color] bg-black/[.8]">
        <div className="max-w-screen-xl mx-auto px-5 flex flex-col lg:flex-row justify-between items-center">
          <div className="flex w-full lg:w-auto items-center justify-between">
            <a href="/" className="text-lg">
              <img
                alt="Ripol Alliance Multi-Family Office Logo Menu"
                loading="lazy"
                width="738"
                // height="32"
                decoding="async"
                data-nimg="1"
                // className="w-8"
                // style="color:transparent"
                src="/Ripol Alliance Multi-Family Office Logo Menu.png"
              />
            </a>
          </div>
          <nav className="astronav-items astronav-toggle hidden w-full lg:w-auto mt-2 lg:flex lg:mt-0">
            <ul className="flex flex-col lg:flex-row lg:gap-3">
              <li>
                <a
                  href="/pricing"
                  className="flex lg:px-3 py-2 items-center text-gray-600 hover:text-gray-900"
                >
                  <span>Sobre</span>
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="flex lg:px-3 py-2 items-center text-gray-600 hover:text-gray-900"
                >
                  <span>Sócios</span>
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="flex lg:px-3 py-2 items-center text-gray-600 hover:text-gray-900"
                >
                  <span>Serviços</span>
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="flex lg:px-3 py-2 items-center text-gray-600 hover:text-gray-900"
                >
                  <span>Contato</span>
                </a>
              </li>
            </ul>
            <div className="lg:hidden flex items-center mt-3 gap-4">
              <a
                href="#"
                className="rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 w-full px-4 py-2 bg-gray-100 hover:bg-gray-200   border-2 border-transparent"
              >
                Log in
              </a>
              <a
                href="#"
                className="rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 w-full px-4 py-2 bg-black text-white hover:bg-gray-800  border-2 border-transparent"
              >
                Sign up
              </a>
            </div>
          </nav>
        </div>
      </header>
      <main>
        <section
          style={{
            height: "600px",
            borderBottom: "1rem solid var(primary-color)",
          }}
          className="border-b-8 border-[--primary-color]"
        ></section>
        <section className="bg-[url('/quem-somos-background.jpg')] bg-cover bg-no-repeat bg-center relative pt-9">
          <div className="absolute inset-0 z-20 from-hero-gradient-from to-hero-gradient-to bg-white/[.9]"></div>
          <div className="max-w-screen-xl mx-auto px-5 container p-8 mx-auto xl:px-0 flex flex-wrap relative z-30">
            <div className="flex items-center justify-center w-full lg:w-1/2">
              <div className="pr-[3rem]">
                <Image
                  alt="Hero Illustration"
                  loading="eager"
                  width="616"
                  height="617"
                  decoding="async"
                  data-nimg="1"
                  className="object-cover"
                  // style="color: transparent;"
                  // srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.4e76c802.png&amp;w=640&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.4e76c802.png&amp;w=1920&amp;q=75 2x"
                  src="/quem-somos-image.png"
                />
              </div>
            </div>
            <div className="flex items-center w-full lg:w-1/2">
              <div className="max-w-2xl pl-[5rem]">
                <p className="font-bold">Qui si psum suspendi sse</p>
                <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight xl:tracking-tighter text-[--primary-color]">
                  Quem somos
                </h1>
                <p className="text-lg mt-4 text-slate-600 max-w-xl">
                  Gestor financeiro indepedente com os melhores produtos
                  financeiros que se adequam ao seu perfil de investimento.
                </p>
                <p className="text-lg mt-4 text-slate-600 max-w-xl">
                  Gestor financeiro indepedente com os melhores produtos
                  financeiros que se adequam ao seu perfil de investimento.
                </p>
                <p className="text-lg mt-4 text-slate-600 max-w-xl">
                  Gestor financeiro indepedente com os melhores produtos
                  financeiros que se adequam ao seu perfil de investimento.
                </p>
                <p className="text-lg mt-4 text-slate-600 max-w-xl">
                  Gestor financeiro indepedente com os melhores produtos
                  financeiros que se adequam ao seu perfil de investimento.
                </p>
                <p className="text-lg mt-4 text-slate-600 max-w-xl">
                  Gestor financeiro indepedente com os melhores produtos
                  financeiros que se adequam ao seu perfil de investimento.
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
          </div>
        </section>
        <section className="flex">
          <div className="flex items-center justify-center w-full lg:w-1/2 bg-[url('/section-3-image.jpg')] bg-cover bg-no-repeat bg-center"></div>
          <div className="flex items-center w-full lg:w-1/2 bg-[#261d18] py-[8rem]">
            <div className="max-w-2xl text-white pl-[5rem]">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight xl:tracking-tighter">
                Consectetur adipisicing
              </h1>
              <p className="text-lg mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
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
        <section className="flex flex-col pt-20">
          <div className="max-w-screen-2xl mx-auto flex flex-col">
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight xl:tracking-tighter">
              O{" "}
              <span className="text-[--primary-color]">
                Multi Family Office
              </span>{" "}
              focado nas pessoas
            </h1>
            <div className="flex items-center container pt-20">
              <div className="max-w-2xl flex-row">
                <Image
                  alt="Hero Illustration"
                  loading="eager"
                  width="616"
                  height="617"
                  decoding="async"
                  data-nimg="1"
                  className="object-cover"
                  // style="color: transparent;"
                  // srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.4e76c802.png&amp;w=640&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.4e76c802.png&amp;w=1920&amp;q=75 2x"
                  src="/section-services-image.png"
                />
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-10 lg:grid-cols-2">
                <div className="w-50 bg-red-700">
                  <h2>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </h2>
                </div>
                <div className="w-50 bg-yellow-700">
                  <h2>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </h2>
                </div>
                <div className="w-50 bg-green-700">
                  <h2>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </h2>
                </div>
                <div className="w-50 bg-blue-700">
                  <h2>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </>
  );
}
