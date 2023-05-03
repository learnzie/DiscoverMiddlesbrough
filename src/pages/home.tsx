import React, { useEffect, useState } from "react";
import { About } from "../components/discover";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Inclusion } from "../components/attractions";
import { ContactUs } from "../components/contactUs";
import { Articles } from "../components/articles";

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
      <Articles />
      <ContactUs />
      <Footer />
    </>
  );
};
