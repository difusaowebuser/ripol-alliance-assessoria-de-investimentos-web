import * as React from "react";

export const SectionPhrase = () => {
  return (
    <>
      <section className="bg-[url('/section-phrase-background.png')] bg-no-repeat bg-[left_150%_top_10rem] lg:bg-[left_-20%_top_5rem]">
        <div className="py-48 bg-white/[.9]">
          <div className="container flex flex-col lg:flex-row mx-auto justify-center">
            <h3 className="text-2xl lg:text-3xl text-center">
              Estamos comprometidos em proteger e expandir o seu capital.
            </h3>
          </div>
        </div>
      </section>
    </>
  );
};
