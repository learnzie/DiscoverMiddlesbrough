import React, { useEffect, useRef, useState } from "react";
import { About } from "./about";
import { Footer } from "./footer";
import { Header } from "./header";
import { Inclusion } from "./inclusion";
import ScrollToTop from "./ScrollToTop";
import { Technologies } from "./technologies";

export const HomePage = () => {
  const [scrollPos, setScrollPos] = useState(0);
  const slide1Ref: any = useRef<Element[]>(null);
  const slide2Ref: any = useRef<Element[]>(null);

  const animateView = () => {
    const slides = [slide1Ref.current, slide2Ref.current];
    if (slides) {
      const windowHeight = window.innerHeight;
      slides.forEach((element: Element) => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - 150) {
          element.classList.add("slide_in");
        } else {
          element.classList.remove("slide_in");
        }
      });
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", () => {
      setScrollPos(window.scrollY);
      animateView();
    });
    return () => {
      document.removeEventListener("scroll", () => {
        setScrollPos(window.scrollY);
        animateView();
      });
    };
  }, []);

  return (
    <>
      <Header scrollPos={scrollPos} />
      <About slide1Ref={slide1Ref} slide2Ref={slide2Ref} />
      <Inclusion />
      <Technologies />
      <Footer />
      <ScrollToTop show={scrollPos > 1200} />
    </>
  );
};
