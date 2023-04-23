import React from "react";
import tees from "assets/Images/tees-transporter-bridge(5).jpg";
import transporter from "assets/Images/transporter bridge2.jpeg";
import { Link } from "react-router-dom";

export const AttractionCard = () => {
  return (
    <Link to="/attraction/museum" className="cardd">
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
    </Link>
  );
};
