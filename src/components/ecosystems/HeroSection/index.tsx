"use client";
import * as React from "react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

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
        interval={1000}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
      >
        <div className="bg-[url('/section-hero-slider-1.jpg')] bg-cover bg-no-repeat w-full h-[85vh] py-48">
          <div className="container mx-auto flex flex-col text-white text-left">
            <h1 className="text-6xl mb-10">
              1 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h1>
            <p className="mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla.
            </p>
            <button className="border-2 border-[--primary-color] max-w-min rounded-full px-6 py-2 text-center font-body text-sm font-bold uppercase bg-black/[.5]">
              Conheça
            </button>
          </div>
        </div>
        <div className="bg-[url('/section-hero-slider-2.jpg')] bg-cover bg-no-repeat w-full h-[85vh] py-48">
          <div className="container mx-auto flex flex-col text-white text-left">
            <h1 className="text-6xl mb-10">
              2 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h1>
            <p className="mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla.
            </p>
            <button className="border-2 border-[--primary-color] max-w-min">
              Conheça
            </button>
          </div>
        </div>
      </Carousel>
    </section>
  );
};
