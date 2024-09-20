import * as React from "react";
import Image from "next/image";

const professionals = [
  {
    avatar: "/professional-rodrigo-matins.jpeg",
    link: "https://www.linkedin.com/in/rodrigo-alonso-martins-8521926/",
    name: "Rodrigo Martins",
    position: "Fundador e CEO",
  },
  {
    avatar: "/professional-sadi-neto.jpeg",
    link: "https://www.linkedin.com/in/sadi-neto-cfp%C2%AE-36243931",
    name: "Sadi Ribeiro",
    position: "CIO",
  },
  {
    avatar: "/professional-ronaldo-matins.jpeg",
    link: "https://www.linkedin.com/in/ronaldo-martins-9346288/",
    name: "Ronaldo Martins",
    position: "Fundador",
  },
  {
    avatar: "/rodrigo.png",
    link: "https://www.linkedin.com/in/veridiana-ribeiro-7008b040/",
    name: "Veridiana Ribeiro",
    position: "Partner",
  },
];

export const SectionProfessionals = () => {
  return (
    <>
      <section className="bg-gray-200 py-20" id="partners">
        <div className="container flex lg:flex-row mx-auto">
          <div className="flex items-center justify-center flex-wrap">
            {professionals.map((professional) => (
              <div
                className="w-1/2 lg:w-1/4 flex flex-col p-4"
                key={professional.link}
              >
                <div className="mb-3">
                  <Image
                    alt={professional.name}
                    loading="lazy"
                    width="450"
                    height="450"
                    decoding="async"
                    data-nimg="1"
                    className="object-cover rounded-full"
                    // style="color: transparent;"
                    // srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.4e76c802.png&amp;w=640&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.4e76c802.png&amp;w=1920&amp;q=75 2x"
                    src={professional.avatar}
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
