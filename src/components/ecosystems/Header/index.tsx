import * as React from "react";
import Image from "next/image";

const links = [
  { link: "#who-we-are", title: "Sobre" },
  { link: "#partners", title: "Sócios" },
  { link: "#services", title: "Serviços" },
  { link: "#contact", title: "Contato" },
  { link: "https://ripolalliance.com", title: "Multi-Family Office" },
  { link: "#", title: "Gestão patrimonial" },
];

export const Header = () => {
  return (
    <header className="border-t-8 border-[--primary-color] bg-black/[.9] py-3 fixed z-50 w-full text-white">
      <div className="px-5 flex flex-col lg:flex-row justify-between items-center container mx-auto">
        <div className="flex w-full lg:w-auto items-center justify-between">
          <a href="/" className="text-lg">
            <Image
              alt="Ripol Alliance Assessoria de Investimentos Logo Menu"
              loading="lazy"
              width={300}
              height={63}
              decoding="async"
              className="h-[70px] object-contain"
              src="/images/ripol-alliance-assessoria-de-investimentos-logo-menu.png"
            />
          </a>
          <hr className="h-[70px] w-[2px] bg-white mx-2" />
          <Image
            alt="XP Investimentos Logo Menu"
            loading="lazy"
            width={121}
            height={109}
            decoding="async"
            className="h-[70px] w-min object-contain"
            src="/images/xp-investimentos-logo-menu.png"
          />
        </div>
        <nav className="astronav-items astronav-toggle hidden w-full lg:w-auto mt-2 lg:flex lg:mt-0">
          <ul className="flex flex-col lg:flex-row lg:gap-3">
            {links.map((item) => (
              <li key={item.link}>
                <a
                  href={item.link}
                  className="flex lg:px-3 py-2 items-center text-gray-300 hover:text-white"
                >
                  <span>{item.title}</span>
                </a>
              </li>
            ))}
          </ul>
          {/* <div className="lg:hidden flex items-center mt-3 gap-4">
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
          </div> */}
        </nav>
      </div>
    </header>
  );
};
