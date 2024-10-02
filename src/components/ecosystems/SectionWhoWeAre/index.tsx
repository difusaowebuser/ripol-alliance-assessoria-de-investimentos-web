import * as React from "react";
import Image from "next/image";

export const SectionWhoWeAre = () => {
  return (
    <section
      className="bg-[url('/section-quem-somos-background.png')] bg-contain bg-no-repeat relative my-20 bg-[center_bottom_30%] lg:bg-[right_10%_center]"
      id="who-we-are"
    >
      <div className="absolute inset-0 z-20 from-hero-gradient-from to-hero-gradient-to bg-white/[.95]"></div>
      <div className="max-w-screen-2xl mx-auto container flex flex-wrap relative z-30 px-6">
        <div className="flex items-center justify-center w-full lg:w-1/2 mb-10 lg:mb-0">
          <div className="lg:pr-[3rem]">
            <Image
              alt="Hero Illustration"
              loading="eager"
              width="616"
              height="617"
              decoding="async"
              data-nimg="1"
              className="object-cover"
              // style="color: transparent;"
              // srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.4e76c802.png&amp;w=640&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.4e76c802.png&amp;w=1920&amp;q=75 2x"
              src="/section-quem-somos-image.png"
            />
          </div>
        </div>
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl lg:pl-[5rem]">
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight xl:tracking-tighter text-[--primary-color]">
              Quem somos
            </h1>
            <p className="text-lg mt-4 text-slate-600 max-w-xl">
              Alinhada às práticas mais modernas de gestão empresarial, a Ripol
              Alliance é um Multi-Family Office dedicado à gestão do patrimônio
              de famílias que buscam segurança financeira, sustentabilidade e
              fortalecimento de suas conquistas ao longo das gerações.
            </p>
            <p className="text-lg mt-4 text-slate-600 max-w-xl">
              Ajudamos a cuidar desta gestão, desde o planejamento patrimonial e
              sucessório até os investimentos, buscando arquitetura de modelos
              de negócios que tragam um crescimento planejado e estruturado.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="#partners"
                className="rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 px-5 py-2.5 bg-[--primary-color] text-white hover:opacity-80 border-2 border-transparent flex gap-1 items-center justify-center"
              >
                Conheça
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
