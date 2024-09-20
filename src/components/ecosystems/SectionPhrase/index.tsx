import * as React from "react";

export const SectionPhrase = () => {
  return (
    <>
      <section className="py-48">
        <div className="container flex flex-col lg:flex-row mx-auto justify-center">
          <h3 className="text-2xl lg:text-3xl">
            <span className="font-bold">Uma jornada</span> de mil quilômetros
            precia começar com{" "}
            <span className="text-white bg-[--primary-color] font-bold px-1">
              um simples passo.
            </span>
          </h3>
        </div>
      </section>
    </>
  );
};
