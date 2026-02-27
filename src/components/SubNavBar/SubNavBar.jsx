import React from "react";
import logo from "assets/icons/logo.ico";
import envelope from "assets/icons/envelope.svg";
import telephone from "assets/icons/telephone.svg";
import { useNavigate } from "react-router-dom";
import { MobileSubNavBar } from "./MobileSubNavBar";
import { NAVLINKS } from "constants/navigation";

export const SubNavBar = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="hidden md:flex md:flex-col">
        <div className="flex justify-between max-w-[847px] w-full items-center mx-auto py-[58px]">
          <img
            src={logo}
            alt=""
            srcset=""
            className="w-[120px] h-[73px] cursor-pointer"
            onClick={() => navigate("/")}
          />
          <div className="flex gap-[68px]">
            <div className="flex items-center gap-2">
              <div className="rounded-full flex justify-center bg-[#FFB342] px-2 py-2">
                <img src={envelope} alt="" className="w-6 h-6" />
              </div>
              <div className="text-sm">
                <h3 className="text-[#1C2752] font-mulish font-bold">
                  Mail Us
                </h3>
                <p className="text-[#7E7E7E]">fdjokoto63@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-[11px]">
              <div className="rounded-full flex justify-center bg-[#FFB342] px-2 py-2">
                <img src={telephone} alt="" className="w-6 h-6" />
              </div>
              <div className="text-sm">
                <h3 className="text-[#1C2752] font-mulish font-bold">
                  Call Us
                </h3>
                <p className="text-[#7E7E7E]">(+233) 20 821 9820</p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-[911px] w-full mx-auto relative z-[1]">
          <nav className="p-3 bg-[#FFB342]">
            <div className="flex justify-between gap-[54px] items-center">
              <ul className="flex text-[#1C2752] items-center font-mulish text-sm font-bold gap-6">
                {NAVLINKS.map((navLink, index) => (
                  <li
                    key={index}
                    onClick={() => navigate(navLink.link.url)}
                    className="hover:text-white hover:cursor-pointer"
                  >
                    {navLink.link.text}
                  </li>
                ))}
              </ul>
              <button className="text-white py-[15px] px-[30px] bg-[#1C2752] text-sm capitalize font-semibold hover:opacity-95">
                get a quote
              </button>
            </div>
          </nav>
        </div>
      </div>
      <MobileSubNavBar />
    </>
  );
};
