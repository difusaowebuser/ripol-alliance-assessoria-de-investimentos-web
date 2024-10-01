"use client";
import * as React from "react";
import { Carousel } from "react-responsive-carousel";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const carouselItems = [
  {
    background: "/section-hero-slider-1.jpg",
    title:
      "Gestão Patrimonial Novos Conceitos. Novas possibilidades. Desafiando os padrões atuais.",
    description:
      "Acreditamos nos valores da família e na execução de estratégias focada nas pessoas.",
  },
  {
    background: "/section-hero-slider-2.jpeg",
    title:
      "Definir uma estratégia de ação no longo prazo para maximizar resultados",
    description:
      "Identificar múltiplos cenários a partir de uma estratégia focada em cada perfil familiar",
  },
];

export const HeroSection = () => {
  return (
    <section
      style={{
        borderBottom: "1rem solid var(primary-color)",
      }}
      className="border-b-8 border-[--primary-color]"
    >
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
            className="control-arrow control-prev before:!hidden !pl-6"
          >
            <MdArrowBackIos className="text-6xl" />
          </button>
        )}
        renderArrowNext={(clickHandler) => (
          <button
            onClick={clickHandler}
            className="control-arrow control-next before:!hidden !pl-6"
          >
            <MdArrowForwardIos className="text-6xl" />
          </button>
        )}
      >
        {carouselItems.map((item, index) => (
          <div
            className="bg-cover bg-no-repeat w-full h-[85vh] py-48"
            key={`key-${index}`}
            style={{ backgroundImage: `url(${item.background})` }}
          >
            <div className="container mx-auto flex flex-col text-white text-left">
              <div className="w-9/12">
                <h1 className="text-6xl mb-10">{item.title}</h1>
                <p className="mb-8">{item.description}</p>
                <a
                  className="border-2 border-[--primary-color] max-w-min rounded-full px-6 py-2 text-center font-body text-sm font-bold uppercase bg-black/[.5]"
                  href="#services"
                >
                  Conheça
                </a>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};
