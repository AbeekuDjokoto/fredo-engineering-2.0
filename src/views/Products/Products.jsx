import React from "react";
import { Footer, SubNavBar } from "../../components";
import ProjectBackground from "../../assets/images/ProjectBackground.png";
import rowVertical from "../../assets/icons/row-vertical.svg";
import rowHorizontal from "../../assets/icons/element-3.svg";
import classes from "./Products.module.scss";

export const Products = () => {
  return (
    <div>
      <SubNavBar />

      <div className="h-[355px]">
        <div className={classes.backgroundBehind}>
          <img src={ProjectBackground} alt="" />
          <h1 className={classes.title}>Our Projects</h1>
        </div>
      </div>
      <main className={classes.main}>
        <div className={classes.grid}>
          <div>
            <img src={rowVertical} alt="" />
          </div>
          <div>
            <img src={rowHorizontal} alt="" />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
