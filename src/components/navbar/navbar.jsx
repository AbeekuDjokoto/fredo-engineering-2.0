import React from "react";
import logo from "../../assets/icons/logo.ico";
import classes from "./navbar.module.scss";
import { MobileNavbar } from "./mobileNavbar";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className={classes.navigation}>
      <nav className={classes.navbar}>
        <div className="max-w-[120px] w-full max-h-[73px] h-full">
          <img src={logo} alt="Fredo Engineering Logo" />
        </div>
        <div className="flex justify-between gap-[54px]">
          <ul className={classes.ul}>
            <li>Home</li>
            <li onClick={() => navigate("/products")}>Products</li>
            <li>Gallery</li>
            <li onClick={() => navigate("/about-us")}>About Us</li>
            <li>Contact Us</li>
          </ul>
          <button className={classes.altButton}>get quotes</button>
        </div>
      </nav>

      <MobileNavbar />
    </div>
  );
};
