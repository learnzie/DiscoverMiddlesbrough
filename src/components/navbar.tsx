import React, { useRef } from "react";
import { Icon } from "@iconify/react";
import { useLocation } from "react-router-dom";
// import { Logo } from "logo";

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
    <nav className={scrollPos > 440 ? "sticky" : undefined}>
      <div>
        <h1>Discover Middlesbrough</h1>
      </div>
      <div className="nav-link" id="navLinks" ref={navLinkRef}>
        <Icon
          className="iconify close"
          icon="clarity:times-line"
          onClick={hideMenu}
        />
        <ul className="mb-0">
          <li className={`${location.hash === "#white-paper" && "active"}`}>
            <a href="#white-paper">Attractions</a>
          </li>
          <li>
            <a href="/">History</a>
          </li>
          <li>
            <a href="/">Scenery</a>
          </li>
          <li className="underline-none">
            <button className="btn-pink btn btn-lg">Contact us</button>
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
