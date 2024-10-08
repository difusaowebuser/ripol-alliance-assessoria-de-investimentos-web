import * as React from "react";
import Image from "next/image";

import { SectionProfessionalsQRCode } from "@/components/atoms/SectionProfessionalsQRCode";

const professionals = [
  {
    avatar: "/images/partner-sadi-neto.png",
    link: "https://www.linkedin.com/in/sadi-neto-cfp%C2%AE-36243931",
    name: "Sadi Ribeiro",
    position: "CIO",
  },
  {
    avatar: "/images/partner-veridiana-ribeiro.png",
    link: "https://www.linkedin.com/in/veridiana-ribeiro-7008b040/",
    name: "Veridiana Ribeiro",
    position: "Partner",
  },
];

export const SectionProfessionals = () => {
  return (
    <>
      <section className="bg-[#efefef] py-20" id="partners">
        <div className="container flex lg:flex-row mx-auto flex-wrap">
          <div className="flex w-1/3 justify-center items-center">
            <h2 className="text-5xl lg:text-7xl">Sócios</h2>
          </div>
          <div className="flex lg:flex-row items-center flex-wrap w-2/3 gap-10">
            {professionals.map((professional) => (
              <div
                className="w-1/2 lg:w-1/4 flex flex-col p-4 justify-center items-center"
                key={professional.link}
              >
                <div className="mb-3 justify-center items-center flex flex-col h-min">
                  <Image
                    alt={professional.name}
                    loading="lazy"
                    width={620}
                    height={800}
                    decoding="async"
                    className="w-[200px] h-[260px]"
                    src={professional.avatar}
                  />
                  <SectionProfessionalsQRCode link={professional.link} />
                </div>
                <div className="flex items-center flex-col">
                  <h3 className="text-1xl lg:text-2xl">{professional.name}</h3>
                  <span className="text-lg">{professional.position}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
