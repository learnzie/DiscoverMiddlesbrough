import React, { LegacyRef, useRef } from "react";
import { Icon } from "@iconify/react";
import ab_img from "assets/Images/about-img.svg";
import Apehattan_video from "assets/Images/Apehattan.mp4";

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
        <span className="next mb-6" onClick={showHeader}>
          <Icon icon="akar-icons:chevron-up" />
        </span>
        <div className="row">
          <div className="col-md-6 col-12 slides slide_in left" ref={slide1Ref}>
            <h2>About Apehattan</h2>
            <div className="d-flex gap-4 my-5">
              <button className="btn btn-sm btn-outline">Whitepaper</button>
              <button className="btn btn-sm btn-outline">Read FAQs</button>
            </div>
            <p>
              Apehattan is a metaverse built from realistic 3D photogrammetric
              model of Manhattan. The buildings and their units within Apehattan
              are NFTs which can be developed, designed, purchased and sold.
            </p>
            <div className="green-wrap">
              <Icon className="icon" icon="bx:game" />
              <p className="m-0">Train and fight with your pets</p>
            </div>
            <div className="blue-wrap">
              <Icon
                className="icon"
                icon="emojione-monotone:heavy-dollar-sign"
              />
              <p className="m-0">Teleport to other play-to-earn activities</p>
            </div>
            <div className="purple-wrap">
              <Icon className="icon" icon="icon-park-outline:game-ps" />
              <p className="m-0">Meet & network, all inside the metaverse</p>
            </div>
            <p>
              Apehattan will monetize through rewards from owning NFTs,
              sponsorship, advertising, building redevelopments, and play to
              earn.
            </p>
          </div>
          <div
            className="col-md-6 col-12 slides slide_in right"
            ref={slide2Ref}
          >
            <video
              width="100%"
              height="auto"
              poster={ab_img}
              controls
              className="click"
            >
              <source src={Apehattan_video} type="video/mp4" />
              Your browser does not support HTML5 video.
            </video>
          </div>
        </div>
        <div className="text-center my-5">
          <button className="btn btn-lg btn-launch btn-green">
            Launch App
          </button>
        </div>
        <span className="next" onClick={showNext}>
          <Icon icon="akar-icons:chevron-down" />
        </span>
      </div>
    </section>
  );
};
