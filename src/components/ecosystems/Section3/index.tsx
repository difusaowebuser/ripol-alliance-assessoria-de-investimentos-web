import * as React from "react";

export const Section3 = () => {
  return (
    <section className="flex flex-wrap relative">
      <div className="flex items-center justify-center w-full lg:w-1/2 bg-[url('/section-3-image.jpg')] bg-cover bg-no-repeat bg-center h-96 lg:h-auto"></div>
      <div className="flex items-center lg:w-1/2 bg-[--brown-color] py-24 lg:py-32 max-w-screen-2xl mx-auto container flex-wrap relative px-6 lg:pl-24 lg:pr-0">
        <div className="lg:max-w-2xl text-white">
          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight xl:tracking-tighter mb-4">
            Uma quebra de paradigmas
          </h1>
          <p className="text-lg mb-3">
            Desenvolvemos soluções para ajudar você a aproveitar a vida com sua
            família, planejar para as próximas gerações, proteger seu patrimônio
            e construir seu legado.
          </p>
          <p className="text-lg">
            Um conceito prático combinando as fundações do planejamento
            patrimonial e jurídico com nosso forte conhecimento financeiro.
          </p>
        </div>
      </div>
    </section>
  );
};
