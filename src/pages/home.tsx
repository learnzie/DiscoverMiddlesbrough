import React, { useEffect, useRef, useState } from "react";
import { About } from "../components/about";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Inclusion } from "../components/inclusion";
import { ContactUs } from "../components/contactUs";

export const HomePage = () => {
  const [scrollPos, setScrollPos] = useState(0);

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

  return (
    <>
      <Header scrollPos={scrollPos} />
      <About />
      <Inclusion />
      <ContactUs />
      <Footer />
    </>
  );
};
