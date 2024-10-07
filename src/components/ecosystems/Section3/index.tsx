import * as React from "react";

export const Section3 = () => {
  return (
    <section className="flex flex-wrap relative">
      <div className="flex items-center justify-center w-full lg:w-1/2 bg-[url('/section-3-image.png')] bg-cover bg-no-repeat bg-center h-96 lg:h-auto"></div>
      <div className="flex items-center lg:w-1/2 bg-[--primary-color] py-24 lg:py-32 max-w-screen-2xl mx-auto container flex-wrap relative px-6 lg:pl-24 lg:pr-0">
        <div className="lg:max-w-2xl text-white">
          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight xl:tracking-tighter mb-4">
            Conheça
          </h1>
          <p className="text-lg mb-3">
            Nossa equipe de especialistas, comandada pelo sócio, Sadi Ribeiro,
            que tem mais de 25 anos de atuação no mercado financeiro, monitora
            constantemente o mercado global, identificando as melhores
            oportunidades para proteger e expandir o seu patrimônio.
          </p>
        </div>
      </div>
    </section>
  );
};
