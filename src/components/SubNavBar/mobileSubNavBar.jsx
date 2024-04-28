import React from "react";
import classes from "./SubNavBar.module.scss";
import { NavLink } from "react-router-dom";
import { NavMenu } from "../NavMenu";
import { Close, Hamburger } from "../../assets/icons/image";
import logo from "../../assets/icons/logo.ico";

export const MobileSubNavBar = ({ mobile }) => {
  const [openMenu, closeMenu] = React.useState(false);

  const setClose = () => {
    closeMenu(!openMenu);
  };
  return (
    <div className={classes.MobileSubNavBar}>
      <div className="flex items-center gap-7">
        <div className="flex justify-between md:hidden md:m-auto px-5 py-7">
          <NavMenu mobile />

          <button className="navbar-hambuger" title="button ">
            <img onClick={() => closeMenu(!openMenu)} src={Hamburger} alt="" />
          </button>
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

              <li
                onClick={setClose}
                className="cursor-pointer hover:bg-sky-700"
              >
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
      </div>
    </div>
  );
};
