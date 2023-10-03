import React from "react";
import classes from "./navbar.module.scss";
import logo from "../../assets/icons/logo.ico";

export const MobileNavbar = () => {
  return (
    <nav className={classes.mobileContainer}>
      <nav className={classes.navbar}>
        <div className="max-w-[120px] w-full max-h-[73px] h-full">
          <img src={logo} alt="Fredo Engineering Logo" />
        </div>
        <button className={classes.menuBtn}>
          Menu
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
          >
            <path
              d="M3.94775 7.5H21.9478"
              stroke="#292D32"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M3.94775 12.5H21.9478"
              stroke="#292D32"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M3.94775 17.5H21.9478"
              stroke="#292D32"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
        </button>
      </nav>
    </nav>
  );
};
