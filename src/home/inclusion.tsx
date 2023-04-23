import React from "react";
import { Icon } from "@iconify/react";
import tees from "assets/Images/tees-transporter-bridge(5).jpg";
import transporter from "assets/Images/transporter bridge2.jpeg";

export const Inclusion = () => {
  const aboutSection = document.querySelector("#about");
  const showAbout = () => {
    if (aboutSection) aboutSection.scrollIntoView();
  };

  return (
    <section className="attraction" id="included">
      <div className="grid-wrapper">
        <div className="cardd">
          <div className="attraction-card">
            <div className="card-header">
              <div className="images">
                <img src={tees} alt="tees" />
                <img src={tees} alt="tees" />
                <img src={tees} alt="tees" />
              </div>
              #LEARNZIE
            </div>
            <div className="photo">
              <img src={transporter} alt="transporter-bridge" />
            </div>
            <div className="card-foot">
              <div className="name">Tees Transporter Bridge</div>{" "}
              <div className="likes">104 Likes</div>
            </div>
          </div>
        </div>
        <div className="cardd">
          <div className="attraction-card">
            <div className="card-header">
              <div className="images">
                <img src={tees} alt="tees" />
                <img src={tees} alt="tees" />
                <img src={tees} alt="tees" />
              </div>
              #LEARNZIE
            </div>
            <div className="photo">
              <img src={transporter} alt="transporter-bridge" />
            </div>
            <div className="card-foot">
              <div className="name">Tees Transporter Bridge</div>{" "}
              <div className="likes">104 Likes</div>
            </div>
          </div>
        </div>
        <div className="cardd">
          <div className="attraction-card">
            <div className="card-header">
              <div className="images">
                <img src={tees} alt="tees" />
                <img src={tees} alt="tees" />
                <img src={tees} alt="tees" />
              </div>
              #LEARNZIE
            </div>
            <div className="photo">
              <img src={transporter} alt="transporter-bridge" />
            </div>
            <div className="card-foot">
              <div className="name">Tees Transporter Bridge</div>{" "}
              <div className="likes">104 Likes</div>
            </div>
          </div>
        </div>
        <div className="cardd">
          <div className="attraction-card">
            <div className="card-header">
              <div className="images">
                <img src={tees} alt="tees" />
                <img src={tees} alt="tees" />
                <img src={tees} alt="tees" />
              </div>
              #LEARNZIE
            </div>
            <div className="photo">
              <img src={transporter} alt="transporter-bridge" />
            </div>
            <div className="card-foot">
              <div className="name">Tees Transporter Bridge</div>{" "}
              <div className="likes">104 Likes</div>
            </div>
          </div>
        </div>
        <div className="cardd">
          <div className="attraction-card">
            <div className="card-header">
              <div className="images">
                <img src={tees} alt="tees" />
                <img src={tees} alt="tees" />
                <img src={tees} alt="tees" />
              </div>
              #LEARNZIE
            </div>
            <div className="photo">
              <img src={transporter} alt="transporter-bridge" />
            </div>
            <div className="card-foot">
              <div className="name">Tees Transporter Bridge</div>{" "}
              <div className="likes">104 Likes</div>
            </div>
          </div>
        </div>
      </div>
      <section className="contact-page-wrapper">
        <div className="container">
          <div className="row gy-5 text-center my-9">
            <div className="col-md-4 col-sm-6">
              <Icon className="icon" icon="ion:location-outline" />
              <h2>VISIT US</h2>
              <p>
                Tour Group Ltd <br /> 440 High Life Niger
                <br /> London, A1 WW3
              </p>
            </div>
            <div className="col-md-4 col-sm-6 ">
              <Icon className="icon" icon="clarity:email-line" />
              <div className="email-brder">
                <h2>EMAIL US</h2>
                <p>discoverTour.co.uk</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <Icon className="icon" icon="fluent:call-48-regular" />
              <h2>CALL US</h2>
              <p>
                +44 0494 044 0494 <br /> Monday - Saturday 9am to 7pm (UK time)
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};
