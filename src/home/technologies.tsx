import React from "react";
import rolls_logo from "assets/Images/Rolls-logo-PNG 1.svg";
import antier from "assets/Images/antier 1.svg";
import unity from "assets/Images/Unity_Technologies_logo 1.svg";
import lottiefiles from "assets/Images/lottiefiles-logo 1.svg";
import blender from "assets/Images/blender_logo 1.svg";

export const Technologies = () => {
  return (
    <>
      <div className="technologies-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-12">
              <p>Partners</p>
              <img src={rolls_logo} alt="Rolls-logo" />
              <img src={antier} alt="antier" />
            </div>
            <div className="col-sm-6 col-12">
              <p>Technologies</p>
              <img src={unity} alt="Unity_Technologies_logo" />
              <img
                className="logo_bg"
                src={lottiefiles}
                alt="lottiefiles-logo"
              />
              <img className="logo_bg" src={blender} alt="blender_logo" />
            </div>
          </div>
        </div>
      </div>
      <div className="whitepaper-wrapper" id="white-paper">
        <div className="container">
          <div className="col-md-6 col-12">
            <p className="title">There’s more to know</p>
            <p className="content mb-5">
              Apehattan Metaverse is geared up to launch its truly futuristic
              and immersive metaverse, inviting gamers into a digitally created,
              three-dimensional virtual world
            </p>
            <button className="btn btn-lg btn-purple">
              Download Whitepaper
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
