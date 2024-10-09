import * as React from "react";
import Image from "next/image";

export const SectionFaq = () => {
  return (
    <>
      <section className="bg-gray-200 py-8">
        <div className="container flex flex-col lg:flex-row mx-auto items-center">
          <div className="flex flex-col w-full lg:w-1/2 items-start mb-4 lg:mb-0">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl mb-3 text-[--primary-color]">
              Mais que uma gestão de investimentos
            </h2>
            <p className="text-lg mt-4 text-start">
              Com expertise consolidada no mercado financeiro, oferecemos um
              olhar atento às suas metas, alinhando estratégias personalizadas
              com a solidez e segurança que seu patrimônio merece.
            </p>
          </div>
          <div className="flex items-center w-full lg:w-1/2 gap-4 lg:absolute right-0 justify-end lg:pl-8 h-max">
            <Image
              alt="Homem segurando uma caneta na mão"
              loading="lazy"
              width={790}
              height={870}
              decoding="async"
              className="object-cover w-1/3 h-auto rounded-lg"
              src="/images/section-faq-imagem-1.png"
            />
            <Image
              alt="Paisagem com vários predios"
              loading="lazy"
              width={790}
              height={870}
              decoding="async"
              className="object-cover w-1/3 h-auto rounded-lg"
              src="/images/section-faq-imagem-2.png"
            />
            <Image
              alt="Bezerro de ouro"
              loading="lazy"
              width={790}
              height={870}
              decoding="async"
              className="object-cover w-1/3 h-auto rounded-lg"
              src="/images/section-faq-imagem-3.png"
            />
          </div>
        </div>
      </section>
    </>
  );
};
