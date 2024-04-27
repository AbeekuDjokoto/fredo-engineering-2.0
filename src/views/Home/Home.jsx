import React from "react";
import {
  Footer,
  NavMenu,
  Navbar,
  ProfessionServices,
  ProvideForTheFuture,
  Teams,
  WhyChooseUs,
} from "../../components";
import mechanicImage from "../../assets/images/Background.png";
import styles from "./Home.module.scss";
import gearImage from "../../assets/images/gear.png";
import { Close, GreenChevronDown, Hamburger } from "../../assets/icons/image";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/icons/logo.ico";

export const Home = () => {
  const [openMenu, closeMenu] = React.useState(false);
  const [openNavMenu, closeNavMenu] = React.useState(false);

  const options = [
    { name: "Goal Settings", path: "goal-settings" },
    { name: "Community & Engagement", path: "community" },
    { name: "Leaderboard", path: "leaderboard" },
  ];
  const { pathname } = useLocation();
  const isFeatures =
    pathname.includes("community") ||
    pathname.includes("leaderboard") ||
    pathname.includes("goal-settings");

  const setClose = () => {
    closeMenu(!openMenu);
  };
  return (
    <header className={styles.container}>
      <img src={mechanicImage} alt="" className="absolute z-[-1]" />
      {/* <Navbar />
       */}
      {/* <NavMenu /> */}

      <div className="hidden md:flex">
        <Navbar />
      </div>

      <div className="flex justify-between md:hidden md:m-auto px-5 py-7">
        <NavMenu mobile />

        <button className="navbar-hambuger" title="button ">
          <img onClick={() => closeMenu(!openMenu)} src={Hamburger} alt="" />
        </button>
      </div>
      <div className="lg:pt-6 pb-6 lg:pb-8 wrapper">
        <div className="max-w-[519px] w-full flex flex-col gap-5 lg:gap-10">
          <div
            className="text-white text-base lg:text-lg flex gap-2 items-center py-2 px-4 max-w-max"
            style={{ background: "rgba(255, 255, 255, 0.20)" }}
          >
            <img src={gearImage} alt="" />
            We Provide Electric Services For Industrial Project
          </div>

          <div className="md:flex flex-col gap-4 lg:gap-6 hidden">
            <h3 className="text-white font-mulish text-4xl font-semibold -tracking-[0.02em]">
              We Are Professional Quality Services
            </h3>
            <button className="bg-[#FFB342]  h-12 px-6 cursor-pointer max-w-[180px] w-full text-[#1C2752] text-sm font-semibold leading-[130%] hover:bg-[#FFBB54]">
              Our Services
            </button>
          </div>
        </div>
      </div>

      {openMenu ? (
        <div className="fixed w-full top-0 left-0 bg-white z-[100] h-full">
          <div className="flex justify-between p-6 items-center">
            <NavLink to="/">
              <img src={logo} alt="" className="h-[64px]" />
            </NavLink>
            <button onClick={() => closeMenu(!openMenu)} title="button">
              <img src={Close} alt="" />
            </button>
          </div>
          <ul className="navlinks grid gap-2">
            <li onClick={setClose}>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li onClick={() => closeNavMenu(!openNavMenu)} className="relative">
              <span
                className={`flex items-center ${
                  isFeatures ? "text-[var(--primary)]" : ""
                }`}
              >
                Features{" "}
                <img
                  className={`transition-all ${
                    openNavMenu ? "" : "rotate-180"
                  }`}
                  src={`${isFeatures ? GreenChevronDown : "BlackChevronDown"}`}
                  alt=""
                />
              </span>
              {openNavMenu ? (
                <ul className="absolute bg-slate-800 shadow-gray-950 top-10 text-white z-[100] w-[70%] p-[4px_0] rounded-lg max-h-[300px]">
                  {options.map((option) => (
                    <NavLink
                      onClick={setClose}
                      className="grid cursor-pointer hover:bg-slate-100 hover:text-black p-[8px_16px]"
                      key={option.name}
                      to={option.path}
                    >
                      {option.name}
                    </NavLink>
                  ))}
                </ul>
              ) : null}
            </li>
            <li onClick={setClose} className="cursor-pointer hover:bg-sky-700">
              <NavLink to={"/products"}>Products</NavLink>
            </li>
            <li onClick={setClose}>
              <NavLink to={"/gallery"}>Gallery</NavLink>
            </li>
            <li onClick={setClose}>
              <NavLink to={"/about-us"}>About Us</NavLink>
            </li>
            <li onClick={setClose}>
              <NavLink to={"/contact-us"}>Contact Us</NavLink>
            </li>
          </ul>
        </div>
      ) : null}

      <div className="flex flex-col gap-20 pb-[150px] wrapper">
        {/* Beginnging of Second Section */}
        <ProfessionServices />
        <ProvideForTheFuture />
        {/* Ending of Second Section */}

        {/* Beginning of Section Three */}
        <WhyChooseUs />
        {/* Ending of Second Three */}
        <Teams />
      </div>
      <Footer />
    </header>
  );
};
