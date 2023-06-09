import React from "react";
import sara from "assets/Images/Group 1.svg";
import { Icon } from "@iconify/react";
import { Navbar } from "./navbar";

export const Header = ({ scrollPos }: { scrollPos: number }) => {
  return (
    <>
      <Navbar scrollPos={scrollPos} />
      <header id="header">
        <div className="container">
          <div className="flex-wrapper">
            <div className="people">
              <h1>Gabriel Explores Middlesbrough</h1>
              <p>
                Located in the heart of North Yorkshire, Middlesbrough is a
                vibrant and dynamic city that has something for everyone.
                Whether you're looking for world-class attractions, rich
                history, or stunning scenery, you'll find it all here.
              </p>
              <a href="#contact-us">
                <button className="btn btn-lg btn-launch btn-pink">
                  Contact us
                  <Icon
                    className="ms-2"
                    icon="material-symbols:navigate-next"
                  />
                </button>
              </a>
            </div>
            <div className="sara-dub">
              <img src={sara} alt="sara-dubler" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
