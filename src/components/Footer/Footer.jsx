import React from "react";
import logo from "../../assets/icons/logo.ico";
import styles from "./Footer.module.scss";
import { useNavigate } from "react-router";
import { MORE_LINKS, PRODUCT_LINKS, SERVICES_LINKS } from "../../mocks";

export const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className={styles.footer}>
      <div className="wrapper">
        <div className="flex justify-between flex-wrap lg:flex-row">
          <div className="max-w-[240px] w-full flex flex-col gap-6">
            <img src={logo} alt="" className="max-w-[120px] w-full" />
            <p className="text-[#1C2752] text-base font-bold leading-7">
              Milling and Drying solutions to all Industries
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="text-[#1C2752] text-[18px] font-medium">Product</h2>
            <div className="flex flex-col gap-4 text-white">
              {PRODUCT_LINKS.map((link, index) => (
                <p key={index} onClick={() => navigate(link.url)}>
                  {link.text}
                </p>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="text-[#1C2752] text-[18px] font-medium">Services</h2>
            <div className="flex flex-col gap-4 text-white">
              {SERVICES_LINKS.map((link, index) => (
                <p key={index} onClick={() => navigate(link.url)}>
                  {link.text}
                </p>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="text-[#1C2752] text-[18px] font-medium">More</h2>
            <div className="flex flex-col gap-4 text-white">
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
