import React from "react";
import logo from "../../assets/icons/logo.ico";
import envelope from "../../assets/icons/envelope.svg";
import telephone from "../../assets/icons/telephone.svg";
import classes from "./SubNavBar.module.scss";
import { useNavigate } from "react-router-dom";
import { MobileSubNavBar } from "./mobileSubNavBar";
import { NAVLINKS } from "../../mocks";

export const SubNavBar = () => {
  const navigate = useNavigate();

  return (
    <div>
      <MobileSubNavBar />
      <div className={classes.desktopNavigation}>
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
                <p className={classes.sub}>fdjokoto63@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-[11px]">
              <div className={classes.yellowCircle}>
                <img src={telephone} alt="" srcset="" />
              </div>
              <div>
                <h3 className={classes.title}>Call Us</h3>
                <p className={classes.sub}>(+233) 20 821 9820</p>
              </div>
            </div>
          </div>
        </div>

        {/* nav links */}
        <nav className={classes.navbar}>
          <div className="flex justify-between gap-[54px] items-center">
            <ul className={classes.ul}>
              {NAVLINKS.map((navLink, index) => (
                <li key={index} onClick={() => navigate(navLink.link.url)}>
                  {navLink.link.text}
                </li>
              ))}
            </ul>
            <button className={classes.altButton}>get a quote</button>
          </div>
        </nav>
      </div>
    </div>
  );
};
