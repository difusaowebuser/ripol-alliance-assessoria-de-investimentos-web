import * as React from "react";
import Image from "next/image";

const professionals = [
  {
    avatar: "/rodrigo.png",
    link: "batata",
    name: "Rodrigo Martins",
    position: "Fundador e CEO",
  },
  {
    avatar: "/rodrigo.png",
    link: "batata",
    name: "Sadi Ribeiro",
    position: "CIO",
  },
  {
    avatar: "/rodrigo.png",
    link: "batata",
    name: "Ronaldo Martins",
    position: "Fundador",
  },
  {
    avatar: "/rodrigo.png",
    link: "batata",
    name: "Veridiana Ribeiro",
    position: "Partner",
  },
];

export const SectionProfessionals = () => {
  return (
    <>
      <section className="bg-gray-300 py-20">
        <div className="container flex flex-col lg:flex-row mx-auto">
          <div className="flex items-center justify-center">
            {professionals.map((professional) => (
              <div className="w-1/4 flex flex-col" key={professional.link}>
                <div className="">
                  <Image
                    alt="Ripol Alliance Multi-Family Office Logo Menu"
                    loading="lazy"
                    width="600"
                    height="456"
                    decoding="async"
                    data-nimg="1"
                    className="object-cover"
                    // style="color: transparent;"
                    // srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.4e76c802.png&amp;w=640&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.4e76c802.png&amp;w=1920&amp;q=75 2x"
                    src="/section-gestao-patrimonial-image.png"
                  />
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
