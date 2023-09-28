import React, { useState } from "react";

import { pricing} from "../data";

import { HiCheck, HiOutlineArrowNarrowRight } from "react-icons/hi";
import { BsCashCoin } from "react-icons/bs";

const Pricing = () => {
  const [index, setIndex] = useState(1);
  const { title, cards } = pricing;
  return (
    <section className="section" id="pricing">
      <div className="container mx-auto">
        <h2
          className="title mb-8 lg:mb-8 text-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {title}
        </h2>
        <div className="flex flex-col lg:flex-row lg:gap-x-[30px] lg:gap-y-0 justify-content-center items-center">
          {cards.map((card, cardIndex) => {
            const { title, services, btnText, delay } = card;
            return (
              <div
                data-aos="fade-up"
                data-aos-delay={delay}
                data-aos-offset="300"
                key={cardIndex}
                className="pt-8 lg:pt-0"
              >
                <div
                  onClick={() => setIndex(cardIndex)}
                  className={`${
                    cardIndex === index ? "bg-white shadow-2xl" : "shadow"
                  } w-[350px] h-[350px] rounded-[12px] p-[40px] cursor-pointer transition-all`}
                >
                  <div className="mb-8">
                    <BsCashCoin className="text-secondary text-2xl" />
                  </div>
                  <div className="text-[32px] font-semibold mb-8">{title}</div>
                  <div className="flex flex-col gap-y-2 mb-6">
                    {services.map((service, index) => {
                      const { name } = service;
                      return (
                        <div
                          className="flex items-center gap-x-[10px]"
                          key={index}
                        >
                          <HiCheck className="text-light" />
                          <div>{name}</div>
                        </div>
                      );
                    })}
                  </div>
                  <div>
                    <button
                      className={`${
                        cardIndex === index
                          ? "bg-secondary hover:bg-secondary text-white"
                          : "border border-secondary text-secondary"
                      } btn btn-sm btn-outline flex space-x-[14px]`}
                    >
                      <span>{btnText} </span>
                      <HiOutlineArrowNarrowRight />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
