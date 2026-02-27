import React from "react";
import logo from "assets/icons/logo.ico";
import styles from "./Footer.module.scss";
import { useNavigate } from "react-router";
import { MORE_LINKS, PRODUCT_LINKS, SERVICES_LINKS } from "constants/footer";

export const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className={styles.footer}>
      <div className="wrapper">
        <div className="flex justify-between flex-col gap-6 md:flex-row">
          <div className="max-w-[240px] w-full flex flex-col gap-2">
            <img src={logo} alt="" className="w-16" />
            <p className="text-[#1C2752] text-sm md:text-base font-semibold">
              Milling and Drying solutions to all Industries
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-[#1C2752] text-base font-medium">Product</h2>
            <div className="flex flex-col text-sm md:text-base gap-1 text-white">
              {PRODUCT_LINKS.map((link, index) => (
                <p key={index} onClick={() => navigate(link.url)}>
                  {link.text}
                </p>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-[#1C2752] text-base font-medium">Services</h2>
            <div className="flex flex-col text-sm md:text-base gap-1 text-white">
              {SERVICES_LINKS.map((link, index) => (
                <p key={index} onClick={() => navigate(link.url)}>
                  {link.text}
                </p>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-[#1C2752] text-base font-medium">More</h2>
            <div className="flex flex-col text-sm md:text-base gap-1 text-white">
              {MORE_LINKS.map((link, index) => (
                <p key={index} onClick={() => navigate(link.url)}>
                  {link.text}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
