import React, { useEffect, useState } from "react";
import { About } from "./about";
import { Footer } from "./footer";
import { Header } from "./header";
import { Inclusion } from "./inclusion";
import ScrollToTop from "./ScrollToTop";
import { Technologies } from "./technologies";

export const HomePage = () => {
  const [scrollPos, setScrollPos] = useState(0);
  const aboutSection = document.querySelector("#about");
  const header = document.querySelector("#header");

  useEffect(() => {
    document.addEventListener("scroll", () => {
      setScrollPos(window.scrollY);
    });
    return () => {
      document.removeEventListener("scroll", () => {
        setScrollPos(window.scrollY);
      });
    };
  }, []);

  console.log("about", aboutSection?.clientHeight);
  console.log("header", header?.clientHeight);

  return (
    <>
      <Header scrollPos={scrollPos} />
      <About />
      <Inclusion />
      <Technologies />
      <Footer />
      <ScrollToTop show={scrollPos > 1200} />
    </>
  );
};
