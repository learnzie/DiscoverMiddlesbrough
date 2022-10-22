import React from "react";
import { Icon } from "@iconify/react";
import { Roadmap } from "./roadmap";

export const Inclusion = () => {
  const aboutSection = document.querySelector("#about");
  const showAbout = () => {
    if (aboutSection) aboutSection.scrollIntoView();
  };

  return (
    <section className="info" id="included">
      <div className="container">
        <span className="next" onClick={showAbout}>
          <Icon icon="akar-icons:chevron-up" />
        </span>
        <h2>What’s included?</h2>
        <div className="info-grid">
          <div className="i-card green">
            <h3>CUSTOMIZE</h3>
            <p>
              Get powered with the ability to Renovate NFT buildings and it’s
              Units
            </p>
          </div>
          <div className="i-card blue">
            <h3 className="blue">GET CREATIVE</h3>
            <p>Modify your interiors with the interior design options</p>
          </div>
          <div className="i-card purple">
            <h3>ACTIVITIES</h3>
            <p>
              Access Logic and Skill Based Play-To-Earn Games Like Battle
              Royale, Racing, etc.
            </p>
          </div>
          <div className="i-card grey">
            <h3>TENDING</h3>
            <p>Train and Fight With Your Pets</p>
          </div>
          <div className="i-card yellow">
            <h3>COMPETITION</h3>
            <p>Play-To-Earn Rewards With Leaderboards</p>
          </div>
          <div className="i-card blue">
            <h3>CONNECT</h3>
            <p>
              Get involved in Social Interactions and Experiences in the
              metaverse
            </p>
          </div>
          <div className="i-card purple">
            <h3>MARKETPLACE</h3>
            <p>
              Bid, Mint, and Trade NFTs in Apehattan’s dedicated Marketplace
            </p>
          </div>
          <div className="i-card green">
            <h3>GOVERNANCE</h3>
            <p>
              In the DAO, members have the rights to vote and make decisions for
              the project
            </p>
          </div>
          <div className="i-card blue">
            <h3>UPGRADES</h3>
            <p>
              Apehattan employs modern technologies for better experience
              delivery
            </p>
          </div>
        </div>
      </div>
      <div className="container roadmap-wrapper">
        <Roadmap />
      </div>
      <div className="container">
        <div className="token-allocation">
          <h3>Token Allocation</h3>
          <div className="allocation-percent">
            <p>Team</p>
            <p>20%</p>
          </div>
          <div className="allocation-percent green">
            <p>Private sales</p>
            <p>10%</p>
          </div>
          <div className="allocation-percent grey-">
            <p>Staking rewards</p>
            <p>10%</p>
          </div>
          <div className="allocation-percent purple">
            <p>Ecosystem Fund</p>
            <p>35%</p>
          </div>
          <div className="allocation-percent grey">
            <p>Play To Earn</p>
            <p>20%</p>
          </div>
          <div className="allocation-percent grey-">
            <p>Advisors</p>
            <p>5%</p>
          </div>
        </div>
      </div>
    </section>
  );
};
