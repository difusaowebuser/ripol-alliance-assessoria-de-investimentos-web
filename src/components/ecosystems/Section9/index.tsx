"use client";
import * as React from "react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";

export const Section9 = () => {
  return (
    <>
      <section className="bg-gray-200 py-10">
        <div className="container flex flex-col lg:flex-row mx-auto">
          <div className="flex items-center flex-col w-1/2">
            <h2 className="text-5xl lg:text-6xl xl:text-7xl lg:tracking-tight xl:tracking-tighter mb-3 text-[--primary-color]">
              Consectetur Adipiscing Elit?
            </h2>
            <p className="text-lg mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="flex items-center justify-center w-1/2">
            <Carousel
              infiniteLoop={true}
              autoPlay={true}
              interval={1000}
              showStatus={false}
              showIndicators={false}
              showThumbs={false}
            >
              <div>
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
                  src="/section-faqs-imagem-1.jpg"
                />
              </div>
              <div>
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
                  src="/section-faqs-imagem-2.jpg"
                />
              </div>
              <div>
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
                  src="/section-faqs-imagem-3.jpg"
                />
              </div>
            </Carousel>
          </div>
        </div>
      </section>
    </>
  );
};
