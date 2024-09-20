import * as React from "react";

export const Footer = () => {
  return (
    <footer className="text-white border-t-8 border-[--primary-color]">
      <div className="bg-[--brown-color] py-6">
        <div className="flex items-center justify-center container mx-auto">
          <h2 className="text-[--primary-color] text-5xl lg:text-6xl">
            Consectetur Adipiscing Elit
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div></div>
        </div>
      </div>
      <div className="bg-[--primary-color] py-6">
        <div className="flex items-center justify-center container mx-auto">
          <p>
            Todos os direitos reservados a{" "}
            <span className="font-bold">
              Ripol Alliance Multi-Family Office
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};
