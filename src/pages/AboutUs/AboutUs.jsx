import React from "react";
import { Teams } from "pages/Home/sections";
import ProjectBackground from "assets/images/ProjectBackground.png";
import founder from "assets/images/founder.png";
import headGear from "assets/icons/headGear.png";
import tick from "assets/icons/tick.svg";

import classes from "./AboutUs.module.scss";
import { data } from "data/about";

export const AboutUs = () => {
  return (
    <section className={classes.sectionFlexed}>
      <div className={classes.backgroundBehind}>
        <img src={ProjectBackground} alt="" />
        <h1 className={classes.title}>Our Team</h1>
      </div>

      <div className="wrapper flex flex-col gap-10 md:gap-20">
        <main className="flex flex-col-reverse lg:flex-row justify-between gap-12 lg:items-center">
          <section className="flex flex-col gap-10">
            <div className="flex flex-col gap-3">
              <div className="img-heading">
                <img src={headGear} alt="" className="h-[28px]" />
                <p className="text-[#1C2752] text-sm md:text-base font-medium">
                  Welcome to FESC
                </p>
              </div>
              <div className="flex flex-col flex-wrap gap-5">
                <h3 className="heading">We're Commited to Quality</h3>
                <p className="flex flex-col gap-4 text-[#7E7E7E] text-sm font-light lg:max-w-[562px] w-full">
                  Proactively envisined multimeda based exptis and cross media
                  growth strategies seamlessly visualized quality a
                  intellectual capitals withouts superiors collaboration ideas
                  sharing holistically pontificated installed base portals
                  after maintainable products.
                </p>
              </div>
            </div>

            <section className="flex flex-col gap-10">
              <div className="flex justify-between flex-wrap gap-5 max-w-[546px] w-full">
                <div className="flex flex-col gap-5">
                  <div className="flex items-center gap-[13px]">
                    <div className="max-w-[32px] w-full h-[32px]">
                      <img src={tick} alt="" srcset="" />
                    </div>
                    <p className={classes.tickPoints}>
                      We provide 24/7 service
                    </p>
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
                <h1 className="text-[#1C2752] text-lg font-bold">
                  Fred Djokoto
                </h1>
                <p className="text-base text-[#FFB342] font-light">
                  Founder of FESC
                </p>
              </div>
              <div className="flex items-center flex-wrap gap-10">
                <button className="border-[#FFB342] border-2 max-w-max px-4 py-4 md:py-3 md:px-6 cursor-pointer md:max-w-[180px] w-full text-[#1C2752] text-sm font-medium hover:bg-[#FFBB54]">
                  More About Us
                </button>
                <div>
                  <h3 className="text-xs underline text-[#1C2752]">
                    For Emergency Fixing or Appointment
                  </h3>
                  <p className={classes.number}>(+233) 20 821 9820</p>
                </div>
              </div>
            </section>
          </section>

          <img
            src={founder}
            alt="the founders-fred djokoto"
            className="w-full lg:max-w-[400px]"
          />
        </main>

        <section className="grid grid-col-2 md:grid-cols-3 lg:grid-cols-4 gap-10 items-center justify-center">
          {data.map((item) => {
            return (
              <div
                key={item.id}
                className="p-7 flex flex-col gap-3 text-center bg-[#F4F4F4]"
              >
                <figure className="flex justify-center">
                  <img
                    src={item.img}
                    alt=""
                    className="max-w-[76px] h-[76px] w-full"
                  />
                </figure>
                <div className="flex flex-col gap-2 text-center">
                  <p className="text-[#1C2752]  font-mulish text-4xl font-bold">
                    {item.projectsCompleted}
                  </p>
                  <p className="text-[#1C2752] text-lg">{item.title}</p>
                </div>
              </div>
            );
          })}
        </section>

        <Teams />
      </div>
    </section>
  );
};
