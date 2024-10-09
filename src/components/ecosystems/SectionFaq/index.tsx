import * as React from "react";
import Image from "next/image";

export const SectionFaq = () => {
  return (
    <>
      <section className="h-[500px] py-8">
        <div
          className="bg-gray-200 my-8"
          style={{ height: "calc(500px - 4rem)" }}
        >
          <div className="container flex flex-col lg:flex-row mx-auto">
            <div className="flex flex-col w-full lg:w-1/3 items-start lg:py-10">
              <h2 className="text-5xl lg:text-6xl xl:text-7xl lg:tracking-tight xl:tracking-tighter mb-3 text-[--primary-color]">
                Mais que uma gestão de investimentos
              </h2>
              <p className="text-lg mt-4 text-start">
                Com expertise consolidada no mercado financeiro, oferecemos um
                olhar atento às suas metas, alinhando estratégias personalizadas
                com a solidez e segurança que seu patrimônio merece.
              </p>
            </div>
            <div className="flex items-center w-auto lg:w-1/2 gap-4 lg:absolute right-0 justify-end -mt-8">
              <Image
                alt="Homem segurando uma caneta na mão"
                loading="lazy"
                width={790}
                height={870}
                decoding="async"
                className="object-cover w-[375px] h-[500px] rounded-lg"
                src="/images/section-faq-imagem-1.png"
              />
              <Image
                alt="Paisagem com vários predios"
                loading="lazy"
                width={790}
                height={870}
                decoding="async"
                className="object-cover w-[375px] h-[500px] rounded-lg"
                src="/images/section-faq-imagem-2.png"
              />
              <Image
                alt="Bezerro de ouro"
                loading="lazy"
                width={790}
                height={870}
                decoding="async"
                className="object-cover w-[375px] h-[500px] rounded-lg"
                src="/images/section-faq-imagem-3.png"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
