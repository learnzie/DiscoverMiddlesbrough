import React, { LegacyRef, useRef } from "react";
import annie from "assets/Images/annie-spratt-qyAka7W5uMY-unsplash 1.svg";
import priscilla from "assets/Images/priscilla-du-preez-7etIYqqw2jU-unsplash-removebg-preview 1.svg";

export const About = ({
  slide1Ref,
  slide2Ref,
}: {
  slide1Ref: LegacyRef<HTMLDivElement> | undefined;
  slide2Ref: LegacyRef<HTMLDivElement> | undefined;
}) => {
  const aboutRef: any = useRef(null);

  const showNext = () => {
    const includedSection = document.querySelector("#included");
    if (includedSection) includedSection.scrollIntoView();
  };

  const showHeader = () => {
    window.location.hash = "";
    window.scrollTo(0, 0);
  };

  return (
    <section className="about" id="about" ref={aboutRef}>
      <div className="container">
        <div className="iconic-wrapper">
          <img className="annie-img" src={annie} alt="annie-spratt" />
          <p>
            From the iconic Transporter Bridge to the historic Captain Cook
            Birthplace Museum, Middlesbrough is full of surprises and hidden
            gems that are just waiting to be discovered.
          </p>
          <img className="priscilla-img" src={priscilla} alt="Priscilla" />
        </div>
      </div>
    </section>
  );
};
