import React from "react";

import { nav } from "../data";

const Nav = () => {
  return (
    <ul className="flex gap-x-10 text-base ml-10 mt-[7px] self-center">
      {nav.map((item, index) => {
        const { href, name } = item;
        return (
          <li key={index}>
            <a className="hover:text-secondary transition" href={href}>
              {" "}
              {name}{" "}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Nav;
