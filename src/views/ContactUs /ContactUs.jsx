import React from "react";
import { Footer, SubNavBar } from "../../components";
import ProjectBackground from "../../assets/images/ProjectBackground.png";

import classes from "./ContactUs.module.scss";

export const ContactUs = () => {
  return (
    <div>
      <SubNavBar />

      <div className={classes.backgroundBehind}>
        <img src={ProjectBackground} alt="" />
        <h1 className={classes.title}>Contact Us</h1>
      </div>

      <div className="wrapper">
        <main className={classes.main}>
          <div className={classes.mainBranch}>
            <h3 className={classes.branch}>Main Branch</h3>
            <div>
              <div className={classes.border}>
                <h3 className={classes.address}>Address:</h3>
                <h3 className={classes.addressTitle}>
                  GC-145-5925 Ablekuma junction
                </h3>
              </div>
              <div className={classes.border}>
                <h3 className={classes.address}>Phone:</h3>
                <h3 className={classes.addressTitle}>020 821 9820</h3>
              </div>
              <div className={classes.border}>
                <h3 className={classes.address}>Mail:</h3>
                <h3 className={classes.addressTitle}>
                  GC-145-5925 Ablekuma junction
                </h3>
              </div>
            </div>
          </div>

          <div className={classes.right}>
            <div className="flex flex-col gap-3">
              <h1 className="text-base md:text-4xl heading">Contact US</h1>

              <div className="flex flex-col gap-2">
                <p className="flex flex-col gap-4 text-[#7E7E7E] text-base font-light max-w-[562px] w-full">
                  We would love to hear from you! Please don't hesitate to reach
                  out to us. Whether you have questions, feedback, or just want
                  to say hello, we're here for you. Your thoughts and inquiries
                  are important to us, and we're excited to connect with you.
                  Feel free to get in touch using the contact information
                  provided below. We look forward to your message!
                </p>
                <button className="border-[#FFB342] border-2 max-w-max px-4 py-4 md:py-3 md:px-6 cursor-pointer md:max-w-[180px] w-full text-[#1C2752] text-sm font-medium hover:bg-[#FFBB54]">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};
