"use client";
import * as React from "react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const questions = [
  {
    title: "Você realmente sabe",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "/section-faq-imagem-1.png",
  },
  {
    title: "Você realmente sabe",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "/section-faq-imagem-2.png",
  },
  {
    title: "Você realmente sabe",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "/section-faq-imagem-3.png",
  },
];

export const SectionFaq = () => {
  return (
    <>
      <section className="bg-gray-200">
        <div className="container flex flex-col lg:flex-row mx-auto gap-8">
          <div className="flex flex-col w-full lg:w-1/3 items-start py-10">
            <h2 className="text-5xl lg:text-6xl xl:text-7xl lg:tracking-tight xl:tracking-tighter mb-3 text-[--primary-color]">
              Mais que uma gestão de investimentos
            </h2>
            <p className="text-lg mt-4 text-start">
              Com expertise consolidada no mercado financeiro, oferecemos um
              olhar atento às suas metas, alinhando estratégias personalizadas
              com a solidez e segurança que seu patrimônio merece.
            </p>
          </div>
          <div className="flex items-center w-full lg:w-2/3 gap-4 absolute right-0 justify-end">
            <Image
              alt="Homem segurando uma caneta na mão"
              loading="lazy"
              width={790}
              height={870}
              decoding="async"
              className="object-cover w-[300px] h-[400px] rounded-lg"
              src="/images/section-faq-imagem-1.png"
            />
            <Image
              alt="Paisagem com vários predios"
              loading="lazy"
              width={790}
              height={870}
              decoding="async"
              className="object-cover w-[300px] h-[400px] rounded-lg"
              src="/images/section-faq-imagem-2.png"
            />
            <Image
              alt="Bezerro de ouro"
              loading="lazy"
              width={790}
              height={870}
              decoding="async"
              className="object-cover w-[300px] h-[400px] rounded-lg"
              src="/images/section-faq-imagem-3.png"
            />
          </div>
        </div>
      </section>
    </>
  );
};
