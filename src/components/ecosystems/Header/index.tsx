import * as React from "react";
import Image from "next/image";

export const Header = () => {
  return (
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
  );
};
