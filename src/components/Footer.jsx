import React from "react";

import { footer } from "../data";

const Footer = () => {
  const { title, subtitle, image, social } = footer;
  return (
    <section
      id="contact"
      className="section"
      data-aos="fade-right"
      data-aos-offset="400"
    >
      <div className="container mx-auto">
        <div className="flex flex-col  lg:flex-row lg:items-center lg:gap-x-[30px]">
          <div
            className="flex-1 order-2 lg:order-1"
            data-aos="fade-left"
            data-aos-offset="300"
          >
            <img src={image} alt="Main about us" />
          </div>
          <div className="flex-1 order-1 lg:order-2">
            <h2 className="title"> {title} </h2>
            <p className="subtitle"> {subtitle} </p>
            <ul className="flex gap-x-[12px] w-60">
              {social.map((item, index) => {
                // destructure icon
                const { href, icon } = item;
                return (
                  <li key={index}>
                    <a href={href}>
                      <img
                        src={icon}
                        alt="icono de contacto"
                        className="w-12"
                      />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
