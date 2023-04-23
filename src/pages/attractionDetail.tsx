import React, { useEffect, useState } from "react";

import middlesbrough from "assets/Images/middlesbrough.jpeg";
import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import { Inclusion } from "../components/attractions";
import { ContactUs } from "../components/contactUs";

export const AttractionDetail = () => {
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
      <Navbar scrollPos={scrollPos} />
      <div className="attraction-page">
        <div className="container">
          <h1>
            Middlesbrough is home to a wide variety of attractions that are sure
            to appeal to visitors of all ages and interests.
          </h1>
          <div className="grid-container">
            <div className="item1">
              <img src={middlesbrough} alt="teesside" />
            </div>
            <div className="item2">
              <img src={middlesbrough} alt="teesside" />
            </div>
            <div className="item3">
              <img src={middlesbrough} alt="teesside" />
            </div>
            <div className="item4">
              <img src={middlesbrough} alt="teesside" />
            </div>
            <div className="item5">
              <img src={middlesbrough} alt="teesside" />
            </div>
          </div>
        </div>
      </div>
      <Inclusion />
      <ContactUs />
      <Footer />
    </>
  );
};
