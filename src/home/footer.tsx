import React from "react";
import { Icon } from "@iconify/react";

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row gy-5">
          <div className="col-lg-4 col-sm-6 col-12">
            <p className="title">Discover</p>
            <p>
              <a href="/">Careers</a>
            </p>
            <p>
              <a href="/">Frequently Asked Questions</a>
            </p>
            <p>
              <a href="/">Reviews</a>
            </p>
            <p>
              <a href="/">Telegram Sticker packs</a>
            </p>
            <p>
              <a href="/">Blog and Articles</a>
            </p>
            <p>
              <a href="/">Stats on Metaverse</a>
            </p>
          </div>
          <div className="col-lg-3 col-sm-6 col-12">
            <p className="title">Terms & Policies</p>
            <p>
              <a href="/">Privacy Policy</a>
            </p>
            <p>
              <a href="/">Terms of use</a>
            </p>
            <p>
              <a href="/">Community Guidelines</a>
            </p>
          </div>
          <div className="col-lg-5 col-12">
            <p className="title">Socials</p>
            <a href="/">
              <Icon
                className="socials-icon"
                icon="bi:discord"
              />
            </a>
            <a href="/">
              <Icon
                className="socials-icon"
                icon="akar-icons:twitter-fill"
              />
            </a>
            <a href="/">
              <Icon
                className="socials-icon"
                icon="simple-icons:gitbook"
              />
            </a>
            <a href="/">
              <Icon
                className="socials-icon"
                icon="akar-icons:telegram-fill"
              />
            </a>
          </div>
        </div>
        <p className="mt-5">Apehattan is by BlockHash Labs.</p>
        <p>Copyright © 2022 BlockHash LLC. All rights reserved.</p>
      </div>
    </footer>
  );
};
