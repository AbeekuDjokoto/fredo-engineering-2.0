import React from "react";
import classes from "./SubNavBar.module.scss";
export const MobileSubNavBar = () => {
  return (
    <div className={classes.MobileSubNavBar}>
      <div className={classes.mobileDiv}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M3 7H21"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M3 12H21"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M3 17H21"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
      </div>
      <h1>FREDO ENGINEERING</h1>
    </div>
  );
};