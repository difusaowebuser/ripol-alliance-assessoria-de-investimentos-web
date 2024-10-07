import * as React from "react";
import Image from "next/image";

export const SectionWhoWeAre = () => {
  return (
    <section className="relative my-20" id="who-we-are">
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
              Assessoria de investimentos credenciada à XP
            </h1>
            <p className="text-lg mt-4 text-slate-600 max-w-xl">
              Atuamos na construção de estratégias que visam à otimização e
              diversificação dos ativos das famílias e empresas. O objetivo é
              garantir a preservação do capital a longo prazo, adaptando-se às
              condições de mercado e alinhando as estratégias de investimento às
              necessidades e expectativas de cada família.
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
