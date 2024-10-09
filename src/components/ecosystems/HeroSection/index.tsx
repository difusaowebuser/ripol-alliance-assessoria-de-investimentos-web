"use client";
import * as React from "react";
import { Carousel } from "react-responsive-carousel";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import Image from "next/image";

const carouselItems = [
  {
    background: "/images/section-hero-slider-1.png",
    title: "Desenvolvimento de soluções financeiras.",
    description:
      "Estamos alinhados com os objetivos individuais de cada família ou empresa, levando em consideração o contexto global e as tendências do mercado.",
  },
  {
    background: "/images/section-hero-slider-2.jpg",
    title: "Transformamos oportunidades em resultados sólidos.",
    description:
      "Cada decisão é pautada por uma análise profunda e estratégias que garantem segurança e crescimento sustentável.",
  },
];

export const HeroSection = () => {
  return (
    <section className="border-b-8 border-[--primary-color]">
      <Carousel
        infiniteLoop={true}
        autoPlay={true}
        interval={10 * 1000} // 10 seg
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        renderArrowPrev={(clickHandler) => (
          <button
            onClick={clickHandler}
            className="control-arrow control-prev before:!hidden !pl-4 !pr-0"
          >
            <MdArrowBackIos className="text-4xl lg:text-6xl" />
          </button>
        )}
        renderArrowNext={(clickHandler) => (
          <button
            onClick={clickHandler}
            className="control-arrow control-next before:!hidden !pl-4 !pr-0"
          >
            <MdArrowForwardIos className="text-4xl lg:text-6xl" />
          </button>
        )}
      >
        {carouselItems.map((item, index) => (
          <div
            className="bg-cover bg-no-repeat bg-center w-full h-[95vh] lg:h-[85vh] pt-[calc(102px+1rem)] pb-4 lg:py-48"
            key={`key-${index}`}
            style={{ backgroundImage: `url(${item.background})` }}
          >
            <div className="container mx-auto flex flex-col text-white text-left h-full justify-between">
              <div className="w-full lg:w-9/12">
                <h1 className="text-3xl lg:text-6xl mb-4 lg:mb-10">
                  {item.title}
                </h1>
                <p className="mb-4 lg:mb-8">{item.description}</p>
                <a
                  className="border-2 border-[--primary-color] max-w-min rounded-full px-6 py-2 text-center font-body text-sm font-bold uppercase bg-black/[.5]"
                  href="#services"
                >
                  Conheça
                </a>
              </div>
              <div className="flex justify-center mt-auto">
                <div className="flex flex-col lg:flex-row bg-white/[.3] w-full lg:w-9/12 p-2 lg:p-4 rounded-lg gap-2 lg:gap-8">
                  <div className="flex flex-row w-full lg:w-6/12 gap-4 items-center">
                    <Image
                      alt="Homem idoso com capacete e oculos escuro."
                      loading="lazy"
                      width={231}
                      height={130}
                      decoding="async"
                      className="!w-[150px] !h-[84px] object-cover rounded-lg"
                      src="/images/section-1-box-first-image.png"
                    />
                    <p className="text-sm lg:text-base">
                      Aumente sua rentabilidade com as decisões estratégicas
                      assertivas.
                    </p>
                  </div>
                  <div className="flex flex-row w-full lg:w-6/12 gap-4 items-center">
                    <Image
                      alt="Família pulando onda na praia."
                      loading="lazy"
                      width={231}
                      height={130}
                      decoding="async"
                      className="!w-[150px] !h-[84px] object-cover rounded-lg"
                      src="/images/section-1-box-last-image.png"
                    />
                    <p className="text-sm lg:text-base">
                      As oportunidades de investimento são inúmeras, temos que
                      saber como e onde aproveitá-las.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};
