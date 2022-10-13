import React, { useEffect } from "react";
import inspo from "assets/Images/Inspo.svg";
import { Icon } from "@iconify/react";
import { Navbar } from "./navbar";

export const Header = ({ scrollPos }: { scrollPos: number }) => {
  const aboutSection = document.querySelector("#about");

  useEffect(() => {
    if (scrollPos === 0) {
      // document.body.classList.add("no-scroll");
      window.location.hash = "";
    } else {
      // document.body.classList.remove("no-scroll");
    }
  }, [scrollPos]);

  const showNext = () => {
    window.location.hash = "#about";
    if (aboutSection) aboutSection.scrollIntoView();
  };

  return (
    <>
      {scrollPos > 560 && <Navbar scrollPos={scrollPos} />}
      <header id="header">
        {scrollPos < 560 && <Navbar scrollPos={scrollPos} />}

        <span className="next" onClick={showNext}>
          <Icon icon="akar-icons:chevron-down" />
        </span>
        <img className="inspiration-img" src={inspo} alt="Inspo" />
      </header>
    </>
  );
};
