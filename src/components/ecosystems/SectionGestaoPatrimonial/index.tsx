import * as React from "react";
import Image from "next/image";

export const SectionGestaoPatrimonial = () => {
  return (
    <>
      <section className="container flex flex-col lg:flex-row mx-auto pb-12 lg:pb-0">
        <div className="flex items-center justify-center lg:w-1/2">
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
        <div className="flex items-center flex-col lg:w-1/2">
          <h2 className="text-5xl lg:text-6xl xl:text-7xl lg:tracking-tight xl:tracking-tighter mb-3 text-[--primary-color]">
            <span className="font-bold">Gestão integral</span> do patrimônio
          </h2>
          <p className="text-lg mt-4">
            Com nosso know-how, experiência e competência podemos maximizar
            ganhos, rentabilizar e assegurar a longevidade do seu patrimônio,
            independentemente de onde as oportunidades estejam.
          </p>
        </div>
      </section>
    </>
  );
};
