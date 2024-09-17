import Image from "next/image";

import { HeroSection } from "@/components/ecosystems/HeroSection";
import { SectionGestaoPatrimonial } from "@/components/ecosystems/SectionGestaoPatrimonial";
import { SectionProfessionals } from "@/components/ecosystems/SectionProfessionals";

export default function Home() {
  return (
    <>
      <header className="border-t-8 border-[--primary-color] bg-black/[.9] py-3 fixed z-50 w-full text-white">
        <div className="px-5 flex flex-col lg:flex-row justify-between items-center container mx-auto">
          <div className="flex w-full lg:w-auto items-center justify-between">
            <a href="/" className="text-lg">
              <Image
                alt="Ripol Alliance Multi-Family Office Logo Menu"
                loading="lazy"
                width="300"
                height="63"
                decoding="async"
                data-nimg="1"
                className="object-cover"
                // style="color: transparent;"
                // srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.4e76c802.png&amp;w=640&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.4e76c802.png&amp;w=1920&amp;q=75 2x"
                src="/ripol-alliance-multi-family-office-logo-menu.png"
              />
            </a>
          </div>
          <nav className="astronav-items astronav-toggle hidden w-full lg:w-auto mt-2 lg:flex lg:mt-0">
            <ul className="flex flex-col lg:flex-row lg:gap-3">
              <li>
                <a
                  href="/pricing"
                  className="flex lg:px-3 py-2 items-center text-gray-300 hover:text-white"
                >
                  <span>Sobre</span>
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="flex lg:px-3 py-2 items-center text-gray-300 hover:text-white"
                >
                  <span>Sócios</span>
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="flex lg:px-3 py-2 items-center text-gray-300 hover:text-white"
                >
                  <span>Serviços</span>
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="flex lg:px-3 py-2 items-center text-gray-300 hover:text-white"
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
        <HeroSection />
        <section className="bg-[url('/section-quem-somos-background.png')] bg-contain bg-no-repeat relative my-20 bg-[center_bottom_30%] lg:bg-[right_10%_center]">
          <div className="absolute inset-0 z-20 from-hero-gradient-from to-hero-gradient-to bg-white/[.9]"></div>
          <div className="max-w-screen-2xl mx-auto container flex flex-wrap relative z-30 px-6">
            <div className="flex items-center justify-center w-full lg:w-1/2 mb-10 lg:mb-0">
              <div className="lg:pr-[3rem]">
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
                  src="/section-quem-somos-image.png"
                />
              </div>
            </div>
            <div className="flex items-center w-full lg:w-1/2">
              <div className="max-w-2xl lg:pl-[5rem]">
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
        <section className="flex flex-wrap relative">
          <div className="flex items-center justify-center w-full lg:w-1/2 bg-[url('/section-3-image.jpg')] bg-cover bg-no-repeat bg-center h-96 lg:h-auto"></div>
          <div className="flex items-center lg:w-1/2 bg-[#261d18] py-24 lg:py-32 max-w-screen-2xl mx-auto container flex-wrap relative px-6 lg:pl-24 lg:pr-0">
            <div className="lg:max-w-2xl text-white">
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
        <section className="flex flex-col pt-20 container mx-auto">
          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight xl:tracking-tighter">
            O{" "}
            <span className="text-[--primary-color]">Multi Family Office</span>{" "}
            focado nas pessoas
          </h1>
          <div className="flex items-center flex-col lg:flex-row pt-20">
            <div className="lg:w-[40%] pb-16">
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
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-20 lg:w-[60%] lg:pl-20">
              <div className="w-50">
                <Image
                  alt="Hero Illustration"
                  loading="eager"
                  width="616"
                  height="617"
                  decoding="async"
                  data-nimg="1"
                  className="object-cover mb-3"
                  // style="color: transparent;"
                  // srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.4e76c802.png&amp;w=640&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.4e76c802.png&amp;w=1920&amp;q=75 2x"
                  src="/section-services-service-1.png"
                />
                <h2 className="text-2xl mb-3">
                  Gestão patrimonial sucessão e planejamento
                </h2>
                <p className="mb-3">
                  Lorem ipsum odor amet, consectetuer adipiscing elit. Mattis
                  ante pharetra et justo semper vehicula dui a. Dictumst mollis
                  aliquam ultricies vel massa conubia viverra urna. Semper mus
                  class dictumst placerat viverra sed gravida semper. Himenaeos
                  natoque blandit cubilia integer arcu nostra in proin tempus.
                </p>
                <p className="mb-5">
                  Dolor dignissim nisi tellus vivamus curae mollis non nibh.
                  Inceptos per semper torquent, dignissim sit facilisis blandit
                  semper. Magnis varius placerat scelerisque eu arcu interdum
                  torquent dui. Fusce rutrum lacinia magna blandit metus erat
                  tellus. Litora eleifend eu justo porttitor malesuada nisl.
                </p>
                <Image
                  alt="Ripol Alliance Multi-Family Office Logo Menu"
                  loading="lazy"
                  width="300"
                  height="63"
                  decoding="async"
                  data-nimg="1"
                  className="object-cover"
                  // style="color: transparent;"
                  // srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.4e76c802.png&amp;w=640&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.4e76c802.png&amp;w=1920&amp;q=75 2x"
                  src="/section-services-ripol-alliance-gestao-de-patrimonio-logo.png"
                />
              </div>
              <div className="w-50">
                <Image
                  alt="Hero Illustration"
                  loading="eager"
                  width="616"
                  height="617"
                  decoding="async"
                  data-nimg="1"
                  className="object-cover mb-3"
                  // style="color: transparent;"
                  // srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.4e76c802.png&amp;w=640&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.4e76c802.png&amp;w=1920&amp;q=75 2x"
                  src="/section-services-service-2.png"
                />
                <h2 className="text-2xl mb-3">Assessoria de investimentos</h2>
                <p className="mb-3">
                  Lorem ipsum odor amet, consectetuer adipiscing elit. Mattis
                  ante pharetra et justo semper vehicula dui a. Dictumst mollis
                  aliquam ultricies vel massa conubia viverra urna. Semper mus
                  class dictumst placerat viverra sed gravida semper. Himenaeos
                  natoque blandit cubilia integer arcu nostra in proin tempus.
                </p>
                <p className="mb-5">
                  Dolor dignissim nisi tellus vivamus curae mollis non nibh.
                  Inceptos per semper torquent, dignissim sit facilisis blandit
                  semper. Magnis varius placerat scelerisque eu arcu interdum
                  torquent dui. Fusce rutrum lacinia magna blandit metus erat
                  tellus. Litora eleifend eu justo porttitor malesuada nisl.
                </p>
                <Image
                  alt="Ripol Alliance Multi-Family Office Logo Menu"
                  loading="lazy"
                  width="300"
                  height="63"
                  decoding="async"
                  data-nimg="1"
                  className="object-cover"
                  // style="color: transparent;"
                  // srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.4e76c802.png&amp;w=640&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.4e76c802.png&amp;w=1920&amp;q=75 2x"
                  src="/section-services-ripol-alliance-assessoria-de-investimentos-logo.png"
                />
              </div>
              <div className="w-50">
                <Image
                  alt="Hero Illustration"
                  loading="eager"
                  width="616"
                  height="617"
                  decoding="async"
                  data-nimg="1"
                  className="object-cover mb-3"
                  // style="color: transparent;"
                  // srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.4e76c802.png&amp;w=640&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.4e76c802.png&amp;w=1920&amp;q=75 2x"
                  src="/section-services-service-3.png"
                />
                <h2 className="text-2xl mb-3">
                  Curadoria jurídica Ronaldo Martins & Advogados
                </h2>
                <p className="mb-3">
                  Lorem ipsum odor amet, consectetuer adipiscing elit. Mattis
                  ante pharetra et justo semper vehicula dui a. Dictumst mollis
                  aliquam ultricies vel massa conubia viverra urna. Semper mus
                  class dictumst placerat viverra sed gravida semper. Himenaeos
                  natoque blandit cubilia integer arcu nostra in proin tempus.
                </p>
                <p className="mb-5">
                  Dolor dignissim nisi tellus vivamus curae mollis non nibh.
                  Inceptos per semper torquent, dignissim sit facilisis blandit
                  semper. Magnis varius placerat scelerisque eu arcu interdum
                  torquent dui. Fusce rutrum lacinia magna blandit metus erat
                  tellus. Litora eleifend eu justo porttitor malesuada nisl.
                </p>
                <Image
                  alt="Ripol Alliance Multi-Family Office Logo Menu"
                  loading="lazy"
                  width="300"
                  height="63"
                  decoding="async"
                  data-nimg="1"
                  className="object-cover"
                  // style="color: transparent;"
                  // srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.4e76c802.png&amp;w=640&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.4e76c802.png&amp;w=1920&amp;q=75 2x"
                  src="/section-services-ronaldo-martins-advogados-logo.png"
                />
              </div>
              <div className="w-50">
                <Image
                  alt="Hero Illustration"
                  loading="eager"
                  width="616"
                  height="617"
                  decoding="async"
                  data-nimg="1"
                  className="object-cover mb-3"
                  // style="color: transparent;"
                  // srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.4e76c802.png&amp;w=640&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.4e76c802.png&amp;w=1920&amp;q=75 2x"
                  src="/section-services-service-4.png"
                />
                <h2 className="text-2xl mb-3">Novos negócios</h2>
                <p className="mb-3">
                  Lorem ipsum odor amet, consectetuer adipiscing elit. Mattis
                  ante pharetra et justo semper vehicula dui a. Dictumst mollis
                  aliquam ultricies vel massa conubia viverra urna. Semper mus
                  class dictumst placerat viverra sed gravida semper. Himenaeos
                  natoque blandit cubilia integer arcu nostra in proin tempus.
                </p>
                <p>
                  Dolor dignissim nisi tellus vivamus curae mollis non nibh.
                  Inceptos per semper torquent, dignissim sit facilisis blandit
                  semper. Magnis varius placerat scelerisque eu arcu interdum
                  torquent dui. Fusce rutrum lacinia magna blandit metus erat
                  tellus. Litora eleifend eu justo porttitor malesuada nisl.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-[url('/section-solutions-background.png')] bg-container bg-no-repeat bg-right my-20 py-20">
          <div className="container mx-auto">
            <h2 className="text-5xl lg:text-6xl xl:text-7xl text-white mb-8">
              Soluções <span className="font-bold">simples</span> para situações
              complexas
            </h2>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-20 lg:pl-20">
              <div className="pl-4 py-1 border-l-[10px] border-dotted">
                <p>
                  Lorem ipsum odor amet, consectetuer adipiscing elit. Mattis
                  ante pharetra et justo semper vehicula dui a. Dictumst mollis
                  aliquam ultricies vel massa conubia viverra urna. Semper mus
                  class dictumst placerat viverra sed gravida semper. Himenaeos
                  natoque blandit cubilia integer arcu nostra in proin tempus.
                </p>
              </div>
              <div className="pl-4 py-1 border-l-[10px] border-dotted">
                <p>
                  Lorem ipsum odor amet, consectetuer adipiscing elit. Mattis
                  ante pharetra et justo semper vehicula dui a. Dictumst mollis
                  aliquam ultricies vel massa conubia viverra urna. Semper mus
                  class dictumst placerat viverra sed gravida semper. Himenaeos
                  natoque blandit cubilia integer arcu nostra in proin tempus.
                </p>
              </div>
              <div className="pl-4 py-1 border-l-[10px] border-dotted">
                <p>
                  Lorem ipsum odor amet, consectetuer adipiscing elit. Mattis
                  ante pharetra et justo semper vehicula dui a. Dictumst mollis
                  aliquam ultricies vel massa conubia viverra urna. Semper mus
                  class dictumst placerat viverra sed gravida semper. Himenaeos
                  natoque blandit cubilia integer arcu nostra in proin tempus.
                </p>
              </div>
            </div>
          </div>
        </section>
        <SectionGestaoPatrimonial />
        <SectionProfessionals />
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
