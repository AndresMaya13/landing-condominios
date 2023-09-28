import React from "react";

import { sections } from "../../data";
import { BsArrowRight } from "react-icons/bs";

const SectionOne = () => {
  const { sectionOne } = sections;
  const { pretitle, title, subtitle, btnLink, image } = sectionOne;

  return (
    <section
      id="sectionOne"
      className="section"
      data-aos="fade-right"
      data-aos-offset="400"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-x-[30px]">
          <div className="flex-1">
            <div className="pretitle"> {pretitle} </div>
            <h2 className="title"> {title} </h2>
            <p className="subtitle"> {subtitle} </p>
            <button className="btn-link flex items-center gap-x-3 hover:gap-x-5 transition-all">
              {btnLink} <BsArrowRight className="text-secondary" />
            </button>
          </div>
          <div className="flex-1" data-aos="fade-left" data-aos-offset="300">
            <img src={image} alt="Main about us" className="w-11/12" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
