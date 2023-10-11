import React from "react";
import { Footer, SubNavBar } from "../../components";
import ProjectBackground from "../../assets/images/ProjectBackground.png";
import founder from "../../assets/images/founder.png";
import headGear from "../../assets/icons/headGear.png";
import tick from "../../assets/icons/tick.svg";

import classes from "./AboutUs.module.scss";

export const AboutUs = () => {
  return (
    <div>
      <SubNavBar />

      <div className="h-[355px]">
        <div className={classes.backgroundBehind}>
          <img src={ProjectBackground} alt="" />
          <h1 className={classes.title}>Our Team</h1>
        </div>
      </div>
      <div className="mt-[150px]"></div>
      <main className={classes.main}>
        <section className="flex flex-col gap-10">
          <div>
            <div className={classes.smallCard}>
              <img src={headGear} alt="" className="h-[28px]" />
              <p>Welcome to FESC</p>
            </div>
            <div className="flex flex-col gap-5">
              <h3 className={classes.title}>We’re Commited to Quality</h3>
              <p className={classes.subtitle}>
                Proactively envisined multimeda based exptis and cross media
                growth strategies seamlessly visualized quality a intellectual
                capitals withouts superiors collaboration ideas sharing
                holistically pontificated installed base portals after
                maintainable products.
              </p>
            </div>
          </div>

          <section className="flex flex-col gap-10">
            <div className="flex justify-between max-w-[546px] w-full">
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-[13px]">
                  <div className="max-w-[32px] w-full h-[32px]">
                    <img src={tick} alt="" srcset="" />
                  </div>
                  <p className={classes.tickPoints}>We provide 24/7 service</p>
                </div>
                <div className="flex items-center gap-[13px]">
                  <div className="max-w-[32px] w-full h-[32px]">
                    <img src={tick} alt="" srcset="" />
                  </div>
                  <p className={classes.tickPoints}>Qualified Personnel</p>
                </div>
              </div>

              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-[13px]">
                  <div className="max-w-[32px] w-full h-[32px]">
                    <img src={tick} alt="" srcset="" />
                  </div>
                  <p className={classes.tickPoints}>Greate Technology</p>
                </div>
                <div className="flex items-center gap-[13px]">
                  <div className="max-w-[32px] w-full h-[32px]">
                    <img src={tick} alt="" srcset="" />
                  </div>
                  <p className={classes.tickPoints}>35 Years Experiance</p>
                </div>
              </div>
            </div>
            <div>
              <h1 className={classes.owner}>Fred Djokoto</h1>
              <p className={classes.ownerDescription}>Founder of FESC</p>
            </div>
            <div className="flex items-center gap-10">
              <button className={classes.btn}>More About Us</button>
              <div>
                <h3 className="text-xs underline text-[#1C2752]">
                  For Emergency Fixing or Appointment
                </h3>
                <p className={classes.number}>(+233) 20 821 9820</p>
              </div>
            </div>
          </section>
        </section>

        <img src={founder} alt="the founders-fred djokoto" />
      </main>

      <Footer />
    </div>
  );
};
