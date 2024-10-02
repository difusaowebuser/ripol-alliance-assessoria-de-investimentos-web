"use client";
import * as React from "react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";

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

export const Section9 = () => {
  return (
    <>
      <section className="bg-gray-200 py-10">
        <Carousel
          infiniteLoop={true}
          autoPlay={true}
          interval={10 * 1000} // 10 seg
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
        >
          {questions
            .reduce(
              (accumulator, currentValue) => {
                const currentIndex = questions.findIndex(
                  (questionFind) => questionFind.image === currentValue.image
                );
                return [
                  ...accumulator,
                  {
                    ...currentValue,
                    image2:
                      questions.length - 1 === currentIndex
                        ? questions[0].image
                        : questions[currentIndex + 1].image,
                    image3:
                      questions.length - 1 === currentIndex
                        ? questions[1].image
                        : currentIndex + 2 > questions.length - 1
                        ? questions[0].image
                        : questions[currentIndex + 2].image,
                  },
                ];
              },
              [] as {
                title: string;
                description: string;
                image: string;
                image2: string;
                image3: string;
              }[]
            )
            .map((question) => (
              <div
                className="container flex flex-col lg:flex-row mx-auto gap-8"
                key={question.image}
              >
                <div className="flex flex-col w-7/12 items-start">
                  <h2 className="text-5xl lg:text-6xl xl:text-7xl lg:tracking-tight xl:tracking-tighter mb-3 text-[--primary-color]">
                    {question.title}
                  </h2>
                  <p className="text-lg mt-4">{question.description}</p>
                </div>
                <div className="flex items-center justify-center w-5/12">
                  <Image
                    alt={`Imagem de ${question.title}`}
                    loading="lazy"
                    width={1114}
                    height={1227}
                    decoding="async"
                    className="object-cover !h-[400px] !w-[300px] rounded-lg z-30"
                    src={question.image}
                  />
                  <Image
                    alt="Ripol Alliance Multi-Family Office Logo Menu"
                    loading="lazy"
                    width={512}
                    height={512}
                    decoding="async"
                    className="object-cover !h-[75%] rounded-lg -ml-8 z-20"
                    src={question.image2}
                  />
                  <Image
                    alt="Ripol Alliance Multi-Family Office Logo Menu"
                    loading="lazy"
                    width={256}
                    height={256}
                    decoding="async"
                    className="object-cover !h-[50%] rounded-lg -ml-8 z-10"
                    src={question.image3}
                  />
                </div>
              </div>
            ))}
        </Carousel>
      </section>
    </>
  );
};
