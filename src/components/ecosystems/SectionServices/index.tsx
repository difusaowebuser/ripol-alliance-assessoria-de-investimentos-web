import * as React from "react";
import Image from "next/image";

export const SectionServices = () => {
  return (
    <section className="flex flex-col pt-20 container mx-auto" id="services">
      <h1 className="text-5xl lg:text-7xl font-bold lg:tracking-tight xl:tracking-tighter">
        O <span className="text-[--primary-color]">Multi Family Office</span>{" "}
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
          <div className="w-50">
            <Image
              alt="Hero Illustration"
              loading="eager"
              width="616"
              height="617"
              decoding="async"
              data-nimg="1"
              className="object-cover mb-3"
              // style="color: transparent;"
              // srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.4e76c802.png&amp;w=640&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.4e76c802.png&amp;w=1920&amp;q=75 2x"
              src="/section-services-service-1.png"
            />
            <h2 className="text-2xl mb-3">
              Gestão patrimonial sucessão e planejamento
            </h2>
            <p className="mb-3">
              Lorem ipsum odor amet, consectetuer adipiscing elit. Mattis ante
              pharetra et justo semper vehicula dui a. Dictumst mollis aliquam
              ultricies vel massa conubia viverra urna. Semper mus class
              dictumst placerat viverra sed gravida semper. Himenaeos natoque
              blandit cubilia integer arcu nostra in proin tempus.
            </p>
            <p className="mb-5">
              Dolor dignissim nisi tellus vivamus curae mollis non nibh.
              Inceptos per semper torquent, dignissim sit facilisis blandit
              semper. Magnis varius placerat scelerisque eu arcu interdum
              torquent dui. Fusce rutrum lacinia magna blandit metus erat
              tellus. Litora eleifend eu justo porttitor malesuada nisl.
            </p>
            <Image
              alt="Ripol Alliance Multi-Family Office Logo Menu"
              loading="lazy"
              width="300"
              height="63"
              decoding="async"
              data-nimg="1"
              className="object-cover"
              // style="color: transparent;"
              // srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.4e76c802.png&amp;w=640&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.4e76c802.png&amp;w=1920&amp;q=75 2x"
              src="/section-services-ripol-alliance-gestao-de-patrimonio-logo.png"
            />
          </div>
          <div className="w-50">
            <Image
              alt="Hero Illustration"
              loading="eager"
              width="616"
              height="617"
              decoding="async"
              data-nimg="1"
              className="object-cover mb-3"
              // style="color: transparent;"
              // srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.4e76c802.png&amp;w=640&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.4e76c802.png&amp;w=1920&amp;q=75 2x"
              src="/section-services-service-2.png"
            />
            <h2 className="text-2xl mb-3">Assessoria de investimentos</h2>
            <p className="mb-3">
              Lorem ipsum odor amet, consectetuer adipiscing elit. Mattis ante
              pharetra et justo semper vehicula dui a. Dictumst mollis aliquam
              ultricies vel massa conubia viverra urna. Semper mus class
              dictumst placerat viverra sed gravida semper. Himenaeos natoque
              blandit cubilia integer arcu nostra in proin tempus.
            </p>
            <p className="mb-5">
              Dolor dignissim nisi tellus vivamus curae mollis non nibh.
              Inceptos per semper torquent, dignissim sit facilisis blandit
              semper. Magnis varius placerat scelerisque eu arcu interdum
              torquent dui. Fusce rutrum lacinia magna blandit metus erat
              tellus. Litora eleifend eu justo porttitor malesuada nisl.
            </p>
            <Image
              alt="Ripol Alliance Multi-Family Office Logo Menu"
              loading="lazy"
              width="300"
              height="63"
              decoding="async"
              data-nimg="1"
              className="object-cover"
              // style="color: transparent;"
              // srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.4e76c802.png&amp;w=640&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.4e76c802.png&amp;w=1920&amp;q=75 2x"
              src="/section-services-ripol-alliance-assessoria-de-investimentos-logo.png"
            />
          </div>
          <div className="w-50">
            <Image
              alt="Hero Illustration"
              loading="eager"
              width="616"
              height="617"
              decoding="async"
              data-nimg="1"
              className="object-cover mb-3"
              // style="color: transparent;"
              // srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.4e76c802.png&amp;w=640&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.4e76c802.png&amp;w=1920&amp;q=75 2x"
              src="/section-services-service-3.png"
            />
            <h2 className="text-2xl mb-3">
              Curadoria jurídica Ronaldo Martins & Advogados
            </h2>
            <p className="mb-3">
              Lorem ipsum odor amet, consectetuer adipiscing elit. Mattis ante
              pharetra et justo semper vehicula dui a. Dictumst mollis aliquam
              ultricies vel massa conubia viverra urna. Semper mus class
              dictumst placerat viverra sed gravida semper. Himenaeos natoque
              blandit cubilia integer arcu nostra in proin tempus.
            </p>
            <p className="mb-5">
              Dolor dignissim nisi tellus vivamus curae mollis non nibh.
              Inceptos per semper torquent, dignissim sit facilisis blandit
              semper. Magnis varius placerat scelerisque eu arcu interdum
              torquent dui. Fusce rutrum lacinia magna blandit metus erat
              tellus. Litora eleifend eu justo porttitor malesuada nisl.
            </p>
            <Image
              alt="Ripol Alliance Multi-Family Office Logo Menu"
              loading="lazy"
              width="300"
              height="63"
              decoding="async"
              data-nimg="1"
              className="object-cover"
              // style="color: transparent;"
              // srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.4e76c802.png&amp;w=640&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.4e76c802.png&amp;w=1920&amp;q=75 2x"
              src="/section-services-ronaldo-martins-advogados-logo.png"
            />
          </div>
          <div className="w-50">
            <Image
              alt="Hero Illustration"
              loading="eager"
              width="616"
              height="617"
              decoding="async"
              data-nimg="1"
              className="object-cover mb-3"
              // style="color: transparent;"
              // srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.4e76c802.png&amp;w=640&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.4e76c802.png&amp;w=1920&amp;q=75 2x"
              src="/section-services-service-4.png"
            />
            <h2 className="text-2xl mb-3">Novos negócios</h2>
            <p className="mb-3">
              Lorem ipsum odor amet, consectetuer adipiscing elit. Mattis ante
              pharetra et justo semper vehicula dui a. Dictumst mollis aliquam
              ultricies vel massa conubia viverra urna. Semper mus class
              dictumst placerat viverra sed gravida semper. Himenaeos natoque
              blandit cubilia integer arcu nostra in proin tempus.
            </p>
            <p>
              Dolor dignissim nisi tellus vivamus curae mollis non nibh.
              Inceptos per semper torquent, dignissim sit facilisis blandit
              semper. Magnis varius placerat scelerisque eu arcu interdum
              torquent dui. Fusce rutrum lacinia magna blandit metus erat
              tellus. Litora eleifend eu justo porttitor malesuada nisl.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
