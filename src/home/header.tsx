import React from "react";
import inspo from "assets/Images/Inspo.svg";
import sara from "assets/Images/Group 1.svg";
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
        <div className="container">
          <div className="flex-wrapper">
            <div className="people">
              <h1>Welcome to Middlesbrough</h1>
              <p>
                Located in the heart of North Yorkshire, Middlesbrough is a
                vibrant and dynamic city that has something for everyone.
                Whether you're looking for world-class attractions, rich
                history, or stunning scenery, you'll find it all here.
              </p>
              <button className="btn btn-lg btn-launch btn-pink">
                Contact us
                <Icon className="ms-2" icon="material-symbols:navigate-next" />
              </button>
            </div>
            <div className="sara-dub">
              <img src={sara} alt="sara-dubler" />
            </div>
          </div>
        </div>
        {/* <span className="next" onClick={showNext}>
          <Icon icon="akar-icons:chevron-down" />
        </span> */}
        {/* <img className="inspiration-img" src={inspo} alt="Inspo" /> */}
      </header>
    </>
  );
};
