import * as React from "react";
import Image from "next/image";

import { SectionProfessionalsQRCode } from "@/components/atoms/SectionProfessionalsQRCode";

const professionals = [
  {
    title: "Sócios",
    items: [
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
    ],
  },
  {
    title: "Conselho executivo",
    items: [
      {
        avatar: "/images/partner-rodrigo-matins.png",
        link: "https://www.linkedin.com/in/sadi-neto-cfp%C2%AE-36243931",
        name: "Sadi Ribeiro",
        position: "CIO",
      },
      {
        avatar: "/images/partner-ronaldo-matins.png",
        link: "https://www.linkedin.com/in/veridiana-ribeiro-7008b040/",
        name: "Veridiana Ribeiro",
        position: "Partner",
      },
    ],
  },
];

export const SectionProfessionals = () => {
  return (
    <>
      <section className="bg-[#efefef] py-20" id="partners">
        <div className="container flex flex-col lg:flex-row mx-auto flex-wrap">
          {professionals.map(({ title, items }, index) => (
            <div
              className="flex justify-center items-center w-full lg:w-1/2 flex-col first-of-type:mb-8 lg:mb-0"
              key={`group-${title}-${index}`}
            >
              <div className="flex justify-center items-center mb-2 lg:mb-4">
                <h3 className="text-2xl lg:text-4xl">{title}</h3>
              </div>
              <div className="flex items-center gap-10">
                {items.map((professional) => (
                  <div
                    className="w-full lg:w-1/2 flex p-4 justify-center items-center flex-col"
                    key={professional.link}
                  >
                    <div className="mb-3 justify-center items-center flex flex-col">
                      <Image
                        alt={professional.name}
                        loading="lazy"
                        width={620}
                        height={800}
                        decoding="async"
                        className="w-[200px]"
                        src={professional.avatar}
                      />
                      <SectionProfessionalsQRCode link={professional.link} />
                    </div>
                    <div className="flex items-center flex-col -mt-8">
                      <h4 className="text-1xl lg:text-2xl">
                        {professional.name}
                      </h4>
                      <span className="text-lg">{professional.position}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
