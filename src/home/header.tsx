import React from "react";
import inspo from "assets/Images/Inspo.svg";
import { Icon } from "@iconify/react";
import { Navbar } from "./navbar";

export const Header = ({ scrollPos }: { scrollPos: number }) => {
  const aboutSection = document.querySelector("#about");

  const showNext = () => {
    window.location.hash = "#about";
    if (aboutSection) aboutSection.scrollIntoView();
  };

  return (
    <>
      <Navbar scrollPos={scrollPos} />
      <header id="header">
        <span className="next" onClick={showNext}>
          <Icon icon="akar-icons:chevron-down" />
        </span>
        <img className="inspiration-img" src={inspo} alt="Inspo" />
      </header>
    </>
  );
};
