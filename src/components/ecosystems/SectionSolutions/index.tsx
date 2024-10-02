import * as React from "react";

const soluctions = [
  "Um parceiro comprometido com a segurança, a continuidade e o crescimento do seu legado familiar.",
  "Profissionais multidisciplinares, com o olhar voltado para cada negócio e para cada propósito.",
  "Os projetos são construídos com total sigilo, preservando sempre a imagem e a reputação das famílias.",
];

export const SectionSolutions = () => {
  return (
    <>
      <section className="bg-[url('/section-solutions-background.png')] bg-container bg-no-repeat bg-right my-20 py-20">
        <div className="container mx-auto">
          <h2 className="text-5xl lg:text-6xl xl:text-7xl text-white mb-8">
            Entendemos a realidade de
            <br />
            nossos clientes.
          </h2>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-20 lg:pl-20">
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
