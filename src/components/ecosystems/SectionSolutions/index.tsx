import * as React from "react";

const soluctions = [
  "Unimos uma visão econômica e financeira integrada a uma  abordagem jurídica que traz segurança e confiabilidade.",
  "Uma gestão feita sob medida, para quem busca mais do que números: busca confiança e resultados.",
];

export const SectionSolutions = () => {
  return (
    <>
      <section className="bg-[url('/images/section-solutions-background.png')] bg-container bg-no-repeat bg-right my-20 py-20">
        <div className="container mx-auto">
          <h2 className="text-5xl lg:text-7xl text-white mb-8">
            Estamos ao seu lado acompanhando a sua jornada de vida
          </h2>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-20 lg:pl-20">
            {soluctions.map((service, index) => (
              <div
                className="pl-4 py-1 border-l-[10px] border-dotted"
                key={`p-${index}`}
              >
                <p>{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
