import React from "react";
import logo from "../../assets/icons/logo.ico";
import envelope from "../../assets/icons/envelope.svg";
import telephone from "../../assets/icons/telephone.svg";
import classes from "./SubNavBar.module.scss";
import { useNavigate } from "react-router-dom";

export const SubNavBar = () => {
  const navigate = useNavigate();
  return (
    <div>
      {/* TOP */}
      <div className="flex justify-between max-w-[847px] w-full items-center mx-auto py-[58px]">
        <img src={logo} alt="" srcset="" className="w-[120px] h-[73px]" />
        <div className="flex gap-[68px]">
          <div className="flex items-center gap-[11px]">
            <div className={classes.yellowCircle}>
              <img src={envelope} alt="" srcset="" />
            </div>
            <div>
              <h3 className={classes.title}>Mail Us</h3>
              <p className={classes.sub}>Info@Example.com</p>
            </div>
          </div>
          <div className="flex items-center gap-[11px]">
            <div className={classes.yellowCircle}>
              <img src={telephone} alt="" srcset="" />
            </div>
            <div>
              <h3 className={classes.title}>Call Us</h3>
              <p className={classes.sub}>+01 569 896 654</p>
            </div>
          </div>
        </div>
      </div>
      {/* nav links */}
      <nav className={classes.navbar}>
        <div className="flex justify-between gap-[54px] items-center">
          <ul className={classes.ul}>
            <li onClick={() => navigate("/")}>Home</li>
            <li>Products</li>
            <li>Gallery</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
          <button className={classes.altButton}>get a quote</button>
        </div>
      </nav>
    </div>
  );
};
