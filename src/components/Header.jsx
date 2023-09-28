import React, { useState, useEffect } from "react";

import { header } from "../data";
import { HiMenuAlt4, HiOutlineX } from "react-icons/hi";
// import { AiOutlineMenu } from "react-icons/ai";
import MobileNav from "../components/MobileNav";
import Nav from "../components/Nav";

const Header = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const { logo, btnText } = header;

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <header id="#header"
      className={`${
        isActive ? "lg:top-0 opacity-[0.96] bg-white shadow-2xl" : "lg:top-[0px]"
      } py-6 lg-py-4 fixed w-full transition-all z-10`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex">
          <a href="#" data-aos="fade-down" data-aos-delay="1000">
            <img src={logo} alt="Tivi logo" className="w-20" />
          </a>
          {/*Initially hidden - visible on desktop mode*/}
          <div
            className="hidden lg:flex"
            data-aos="fade-down"
            data-aos-delay="1200"
          >
            <Nav />
          </div>
        </div>
        {/* Initially hidden - visible on desktop mode */}
        <button className="btn btn-sm btn-outline hidden lg:flex">
          {btnText}
        </button>
        {/*Hidden on desktop*/}
        <button className="lg:hidden" onClick={() => setMobileNav(!mobileNav)}>
          {mobileNav ? (
            <HiOutlineX className="text-3xl text-secondary mr-2" />
          ) : (
            <HiMenuAlt4 className="text-3xl text-secondary mr-2" />
          )}{" "}
        </button>
        {/*Mobile nav - hidden on desktop*/}
        <div
          className={`${
            mobileNav ? "left-0" : "-left-full"
          } fixed top-0 bottom-0 w-[60vw] lg:hiddeb transition-all`}
        >
          <MobileNav></MobileNav>
        </div>
      </div>
    </header>
  );
};

export default Header;
