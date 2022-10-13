import React, { useRef } from "react";
import logo from "assets/Images/ape-logo-white.svg";
import logo_dark from "assets/Images/ape-logo-dark.svg";
import { Icon } from "@iconify/react";
import { useLocation } from "react-router-dom";

export const Navbar = ({ scrollPos }: { scrollPos: number }) => {
  const navLinkRef: any = useRef<Element>(null);
  const location = useLocation();

  const showMenu = () => {
    if (navLinkRef) navLinkRef?.current?.classList.add("open");
  };

  const hideMenu = () => {
    if (navLinkRef) navLinkRef?.current?.classList.remove("open");
  };

  return (
    <nav className={scrollPos > 560 ? "sticky" : undefined}>
      <div className="d-flex gap-5">
        <img
          src={scrollPos > 560 ? logo_dark : logo}
          alt="ape-logo-white"
          className="logo"
        />
        <div className="d-flex gap-4">
          <span className="socials-icon twitter">
            <Icon icon="akar-icons:twitter-fill" />
          </span>
          <span className="socials-icon discord">
            <Icon icon="carbon:logo-discord" />
          </span>
        </div>
      </div>
      <div className="nav-link" id="navLinks" ref={navLinkRef}>
        <Icon
          className="iconify close"
          icon="clarity:times-line"
          onClick={hideMenu}
        />
        <ul className="mb-0">
          <li>
            <a href="/">HOME</a>
          </li>
          <li className={`${location.hash === "#about" && "active"}`}>
            <a href="#about">ABOUT</a>
          </li>
          <li className={`${location.hash === "#white-paper" && "active"}`}>
            <a href="#white-paper">WHITEPAPER</a>
          </li>
          <li>
            <a href="/">FAQs</a>
          </li>
          <li>
            <a href="/">TEAM</a>
          </li>
          <li className="underline-none">
            <button className="btn-green btn btn-md">Launch App</button>
          </li>
        </ul>
      </div>
      <Icon
        className="iconify toggle-menu"
        icon="ant-design:menu-outlined"
        onClick={showMenu}
      />
    </nav>
  );
};
