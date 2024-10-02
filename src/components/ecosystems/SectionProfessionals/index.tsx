import * as React from "react";
import Image from "next/image";

import { SectionProfessionalsQRCode } from "@/components/atoms/SectionProfessionalsQRCode";

const professionals = [
  {
    avatar: "/partner-rodrigo-matins.png",
    link: "https://www.linkedin.com/in/rodrigo-alonso-martins-8521926/",
    name: "Rodrigo Martins",
    position: "Fundador e CEO",
  },
  {
    avatar: "/partner-sadi-neto.png",
    link: "https://www.linkedin.com/in/sadi-neto-cfp%C2%AE-36243931",
    name: "Sadi Ribeiro",
    position: "CIO",
  },
  {
    avatar: "/partner-ronaldo-matins.png",
    link: "https://www.linkedin.com/in/ronaldo-martins-9346288/",
    name: "Ronaldo Martins",
    position: "Fundador",
  },
  {
    avatar: "/partner-veridiana-ribeiro.png",
    link: "https://www.linkedin.com/in/veridiana-ribeiro-7008b040/",
    name: "Veridiana Ribeiro",
    position: "Partner",
  },
];

export const SectionProfessionals = () => {
  return (
    <>
      <section className="bg-[#efefef] py-20" id="partners">
        <div className="container flex lg:flex-row mx-auto items-center justify-around flex-wrap">
          {professionals.map((professional) => (
            <div
              className="w-1/2 lg:w-1/4 flex flex-col p-4 justify-center items-center"
              key={professional.link}
            >
              <div className="mb-3 h-[200px] w-[150px] justify-center items-center flex flex-col">
                <Image
                  alt={professional.name}
                  loading="lazy"
                  width={400}
                  height={500}
                  decoding="async"
                  className="h-[200px] w-[150px] object-cover"
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
      </section>
    </>
  );
};
