import React from "react";

import { functionalities } from "../data";

const Functionalities = () => {
  const { cards } = functionalities;
  return (
    <section
      className="section mb-4"
      id="functionalities"
      data-aos="fade-down"
      data-aos-delay="300"
    >
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-6 gap-y-5">
          {cards.map((card, index) => {
            const { title, subtitle, image } = card;
            return (
              <div
                key={index}
                className="w-[270px] h-[400px] rounded-[20px] p-[40px] bg-white shadow-2xl hover:bg-primaryHover hover:cursor-pointer transition-all duration-300 ease-in-out"
              >
                <p className="text-2xl text-secondary font-bold text-center">
                  {title}
                </p>
                <p className="text-base text-primary text-center mt-4 mb-3 leading-tight">
                  {subtitle}
                </p>
                <img src={image} alt="Imagen de funcionalidad" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Functionalities;
