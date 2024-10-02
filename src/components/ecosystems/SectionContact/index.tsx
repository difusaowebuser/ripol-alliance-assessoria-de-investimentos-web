import * as React from "react";
import Image from "next/image";

export const SectionContact = () => {
  return (
    <section className="py-24 text-white" id="contact">
      <div className="flex flex-col items-center justify-center container mx-auto">
        <div className="bg-[url('/section-contact-background.jpg')] rounded-3xl w-full mb-24 relative">
          <div className="absolute inset-0 z-20 bg-black/[0.2] bg-cover bg-center bg-no-repeat"></div>
          <div className="flex flex-col items-center justify-center container mx-auto max-w-screen-md py-16 relative z-30">
            <h2 className="text-5xl lg:text-6xl mb-3">
              Entre em contato conosco
            </h2>
            <p>Como podemos te ajudar?</p>
            <form className="mx-auto w-full pt-10 sm:w-3/4 flex flex-col">
              <input
                className="w-full rounded border-grey-50 px-4 py-3 font-body text-black mb-5"
                placeholder="Nome"
                type="text"
                id="name"
              />
              <input
                className="w-full rounded border-grey-50 px-4 py-3 font-body text-black mb-5"
                placeholder="Telefone"
                type="text"
                id="phoneNumber"
              />
              <input
                className="w-full rounded border-grey-50 px-4 py-3 font-body text-black mb-5"
                placeholder="E-mail"
                type="text"
                id="email"
              />
              <textarea
                className="w-full rounded border-grey-50 px-4 py-3 font-body text-black mb-5"
                placeholder="Comentários"
                id="review"
                cols={30}
                rows={10}
              />
              <button className="mt-6 flex items-center justify-center rounded-lg bg-primary px-8 py-3 font-header text-lg font-bold uppercase text-white hover:bg-grey-20 bg-[--primary-color]">
                Enviar
                <i className="bx bx-chevron-right relative -right-2 text-3xl"></i>
              </button>
            </form>
          </div>
        </div>
        <Image
          alt="Ripol Alliance Multi-Family Office Logo"
          loading="lazy"
          width="600"
          height="125"
          decoding="async"
          data-nimg="1"
          className="object-cover"
          // style="color: transparent;"
          // srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.4e76c802.png&amp;w=640&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.4e76c802.png&amp;w=1920&amp;q=75 2x"
          src="/section-contact-ripol-alliance-multi-family-office-logo.png"
        />
      </div>
    </section>
  );
};
