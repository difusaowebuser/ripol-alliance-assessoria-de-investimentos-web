import * as React from "react";
import Image from "next/image";

const services = [
  {
    image: "/images/section-services-service-1.png",
    title: "Fundo de investimentos",
    description:
      "Os fundos de investimento reúnem recursos de vários investidores para criar uma carteira diversificada de ativos, que pode incluir ações, títulos, imóveis e outros instrumentos financeiros. Essa diversificação oferece ao investidor uma redução no risco. Para maximizar os resultados, é essencial avaliar a performance do fundo e garantir que os ativos estejam alinhados à sua estratégia de investimento.",
  },
  {
    image: "/images/section-services-service-2.png",
    title: "Renda fixa",
    description:
      "A renda fixa é uma modalidade de investimento que oferece ao investidor previsibilidade quanto aos rendimentos, uma vez que as condições de retorno são estabelecidas no momento da aplicação. É uma excelente opção para quem quer proteger o capital e obter rendimentos mais estáveis ao longo do tempo. Avaliar o prazo, a taxa de retorno são fatores essenciais na escolha desta aplicação.",
  },
  {
    image: "/images/section-services-service-3.png",
    title: "Ações",
    description:
      "Investidores compram e vendem ações de empresas de capital aberto, tornando-se assim acionistas e sócios dessas empresas. Investir em ações significa adquirir uma participação em uma companhia e, com isso, estar exposto ao potencial de valorização (ou desvalorização) desse ativo.",
  },
  {
    image: "/images/section-services-service-4.png",
    title: "Fundos imobiliários",
    description:
      "Esses investimentos são uma alternativa para quem deseja investir no mercado imobiliário sem a necessidade de comprar imóveis físicos. O investidor adquire cotas de um fundo que aplica recursos em ativos ligados ao setor imobiliário, como prédios comerciais, shopping centers, galpões logísticos, lajes corporativas e até títulos de dívida imobiliária.",
  },
];

export const SectionServices = () => {
  return (
    <section className="flex flex-col pt-20 container mx-auto" id="services">
      <h1 className="text-5xl lg:text-7xl font-bold lg:tracking-tight xl:tracking-tighter">
        Somos <span className="text-[--primary-color]">Diferentes</span>
        <br />
        de todas as formas
      </h1>
      <div className="flex items-center flex-col lg:flex-row pt-20">
        <div className="lg:w-[40%] pb-16">
          <Image
            alt="Hero Illustration"
            loading="eager"
            width={1000}
            height={2000}
            decoding="async"
            className="object-cover"
            src="/images/section-services-image.png"
          />
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-20 lg:w-[60%] lg:pl-20">
          {services.map((service, index) => (
            <div className="w-50 flex flex-col" key={`service-${index}`}>
              <div className="mb-3">
                <Image
                  alt={service.title}
                  loading="lazy"
                  width={100}
                  height={100}
                  decoding="async"
                  className="object-cover rounded-lg"
                  src={service.image}
                />
              </div>
              <h2 className="text-2xl whitespace-break-spaces uppercase mb-1">
                {service.title}
              </h2>
              <hr className="mb-4 border-b-2 border-b-[--primary-color] w-8/12" />
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
