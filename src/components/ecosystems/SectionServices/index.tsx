import * as React from "react";
import Image from "next/image";

const services = [
  {
    image: "/section-services-service-1.png",
    umbrellaImage: "services-gestao-patrimonial-umbrella",
    title: "Gestão patrimonial",
    subtitle: "sucessão e planejamento",
    description: [
      "A continuidade dos negócios familiares e a transmissão de valores e patrimônio para as próximas gerações são aspectos importantes para a Ripol Alliance.",
      "Por isso, o conselho-executivo e o time de especialistas trabalham de forma próxima a cada família para desenvolver um plano sucessório eficaz, garantindo que o processo de transição seja feito de maneira organizada e sob medida para cada contexto familiar.",
    ],
    logo: "/section-services-ripol-alliance-gestao-de-patrimonio-logo.png",
  },
  {
    image: "/section-services-service-2.png",
    umbrellaImage: "services-assessoria-investimentos-umbrella",
    title: "Assessoria de\ninvestimentos",
    description: [
      "Equipe independente de especialistas em investimentos financeiros, focada em construir estratégias que visam à otimização e diversificação dos ativos das famílias.",
      "O objetivo é garantir a preservação do capital a longo prazo, adaptando-se às condições de mercado e alinhando as estratégias de investimento às necessidades e expectativas de cada família.",
      "Além dos cuidados com as empresas do grupo familiar, a Ripol Alliance apoia os participantes no cuidado de seus patrimônios e investimentos pessoais, buscando a saúde financeira dos negócios.",
    ],
    logo: "/section-services-ripol-alliance-assessoria-de-investimentos-logo.png",
  },
  {
    image: "/section-services-service-3.png",
    umbrellaImage: "services-curadoria-juridica-umbrella",
    title: "Curadoria jurídica",
    subtitle: "Ronaldo Martins & Advogados",
    description: [
      "A Ripol Alliance conta com a expertise do escritório RONALDO MARTINS & Advogados para oferecer curadoria jurídica. Com mais de 30 anos de experiência, o escritório tem suas raízes em empresas familiares e atua em diversas áreas, como tributária, societária, contratuais, Mergers and Acquisitions (M&A), internacional, civil e trabalhista.",
      "Esse know-how permite proporcionar um apoio jurídico robusto, garantindo que todas as decisões estratégicas estejam em conformidade com a legislação vigente e sejam estruturadas para proteger o patrimônio e os interesses das famílias.",
    ],
    logo: "/section-services-ronaldo-martins-advogados-logo.png",
  },
  {
    image: "/section-services-service-4.png",
    umbrellaImage: "services-novos-negocios-umbrella",
    title: "Novos\nnegócios",
    description: [
      "Área dedicada ao aconselhamento de nossos clientes sobre as oportunidades existentes de investimentos diretos na chamada Economia Real. Fazemos isso por meio da assessoria para operações de M&A e Joint Ventures, por exemplo.",
      "Também respondemos às demandas pontuais de nossos clientes junto ao mercado imobiliário para investimento em imóveis de uso pessoal ou comercial. Nossa abordagem inclui, ainda, outros produtos relacionados à formação e à proteção patrimonial, como os seguros de vida e de ativos. Para isso, atuamos na gestão de relacionamentos junto a outros profissionais independentes. Um verdadeiro atendimento personalizado dentro do conceito de Concierge.",
    ],
  },
];

export const SectionServices = () => {
  return (
    <section className="flex flex-col pt-20 container mx-auto" id="services">
      <h1 className="text-5xl lg:text-7xl font-bold lg:tracking-tight xl:tracking-tighter">
        O <span className="text-[--primary-color]">Multi-Family Office</span>{" "}
        focado nas pessoas
      </h1>
      <div className="flex items-center flex-col lg:flex-row pt-20">
        <div className="lg:w-[40%] pb-16">
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
            src="/section-services-image.png"
          />
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-20 lg:w-[60%] lg:pl-20">
          {services.map((service) => (
            <div className="w-50 flex flex-col" key={service.umbrellaImage}>
              <div
                className={`after:block after:relative after-bg-image-${service.umbrellaImage} after:bg-no-repeat after:bg-contain after:-right-[50px] after:w-[100px] after:h-[100px] after:bottom-[100px] after:ml-auto after:mt-auto h-[225px] mb-3`}
              >
                <Image
                  alt={service.title}
                  loading="lazy"
                  width={640}
                  height={426}
                  decoding="async"
                  className="h-[225px] object-cover rounded-lg"
                  src={service.image}
                />
              </div>
              <h2 className="text-2xl whitespace-break-spaces uppercase mb-1">
                {service.title}
                {service.subtitle && (
                  <span className="block text-xl">{service.subtitle}</span>
                )}
              </h2>
              <hr className="mb-4 border-b-2 border-b-[--primary-color] w-8/12" />
              {service.description.map((p, index) => (
                <p className="mb-3 last-of-type:mb-6" key={`p-${index}`}>
                  {p}
                </p>
              ))}
              {service.logo && (
                <Image
                  alt={`Logo ${service.title}`}
                  loading="lazy"
                  width={300}
                  height={63}
                  decoding="async"
                  className="object-cover mt-auto"
                  src={service.logo}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
