import * as React from "react";
import Image from "next/image";

export const SectionContact = () => {
  return (
    <section className="py-24 text-white" id="contact">
      <div className="flex flex-col items-center justify-center container mx-auto">
        <div className="bg-[url('/section-contact-background.jpg')] py-6 rounded-3xl w-full mb-24">
          <div className="flex flex-col items-center justify-center container mx-auto max-w-screen-md py-16">
            <h2 className="text-5xl lg:text-6xl mb-3">
              Entre em contato conosco
            </h2>
            <p>Como podemos te ajudar?</p>
            <div className="h-96"></div>
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
