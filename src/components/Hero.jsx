import React from "react";

import { hero } from "../data";
// import heroImage from "../assets/img/hero/mainImage.jpg";

import { HiOutlineChevronDown } from "react-icons/hi";

const Hero = () => {
  const { title, subtitle, btnFirstModule, btnSecondModule, image } = hero;
  return (
    <section className="h-screen">
      <div className="container mx-auto h-screen flex justify-center items-center">
        <div className="flex flex-col lg:gap-x-[30px] gap-y-0 lg:gap-y-0 lg:flex-row items-center justify-content-center text-center lg-text-left">
          <div className="flex-1">
            <h1
              className="title mb-2 lg:mb-5"
              data-aos="fade-down"
              data-aos-delay="500"
            >
              {title}
            </h1>
            <p
              className="subtitle text-slate-400 mb-5 lg:mb-8 px-4"
              data-aos="fade-down"
              data-aos-delay="600"
            >
              {subtitle}
            </p>
            <div
              data-aos="fade-down"
              data-aos-delay="700"
              className="flex justify-center items-center"
            >
              <a href="#functionalities">
                <button className="btn btn-md lg:btn-lg btn-secondary flex justify-center items-center lg:gap-x-4">
                  {btnFirstModule}
                </button>
              </a>
            </div>
          </div>
          <div className="flex-1" data-aos="fade-up" data-aos-delay="800">
            <img src={image} alt="hero" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
