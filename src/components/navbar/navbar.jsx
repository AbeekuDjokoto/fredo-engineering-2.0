import React from "react";
import logo from "../../assets/icons/logo.ico";
import classes from "./navbar.module.scss";

import { useNavigate } from "react-router-dom";
import { NAVLINKS } from "../../mocks";

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="wrapper">
      <nav className={classes.navbar}>
        <div className="max-w-[120px] w-full max-h-[73px] h-full">
          <img src={logo} alt="Fredo Engineering Logo" />
        </div>
        <div className="flex justify-between gap-[54px]">
          <ul className={classes.ul}>
            {NAVLINKS.map((navLink, index) => (
              <li key={index} onClick={() => navigate(navLink.link.url)}>
                {navLink.link.text}
              </li>
            ))}
          </ul>
          <button className={classes.altButton}>get quotes</button>
        </div>
      </nav>
    </div>
  );
};
