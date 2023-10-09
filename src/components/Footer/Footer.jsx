import React from "react";
import logo from "../../assets/icons/logo.ico";
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className="max-w-[240px] w-full flex flex-col gap-6">
          <img src={logo} alt="" className="max-w-[120px] w-full" />
          <p className={styles.logo_title}>
            Milling and Drying solutions to all Industries
          </p>
        </div>
        <div className={styles.div}>
          <div className="flex flex-col gap-6">
            <h2>Product</h2>
            <div className="flex flex-col gap-6">
              <p>Landing Page</p>
              <p>Features</p>
              <p>Documentation</p>
              <p>Referral Program</p>
              <p>Pricing</p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h2>Services</h2>
            <div className="flex flex-col gap-6">
              <p>Fabrication</p>
              <p>Apprentice Training</p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h2>More</h2>
            <div className="flex flex-col gap-6">
              <p>Team</p>
              <p>Contact Us</p>
              <p>Get Quote</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
