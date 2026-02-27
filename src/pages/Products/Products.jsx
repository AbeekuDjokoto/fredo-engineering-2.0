import React from "react";
import ProjectBackground from "assets/images/ProjectBackground.png";
import rowVertical from "assets/icons/row-vertical.svg";
import rowHorizontal from "assets/icons/element-3.svg";
import classes from "./Products.module.scss";
import { data } from "data/products";

export const Products = () => {
  const [horizontal, setHorizontal] = React.useState(false);
  return (
    <div className="flex flex-col gap-20">
      <div className={classes.backgroundBehind}>
        <img src={ProjectBackground} alt="" />
        <h1 className={classes.title}>Products</h1>
      </div>
      <main className="flex flex-col gap-10  wrapper">
        <div className="flex gap-2 self-end">
          <div onClick={() => setHorizontal(true)}>
            <img src={rowVertical} alt="" />
          </div>
          <div onClick={() => setHorizontal(false)}>
            <img src={rowHorizontal} alt="" />
          </div>
        </div>
        <div>
          {horizontal ? (
            <div className="relative flex items-center">
              <div
                id="slider"
                className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth"
              >
                {data.map((item) => {
                  return (
                    <img
                      className="w-[496px] inline-block p-[20px] cursor-pointer hover:scale-105 ease-in-out duration-300"
                      src={item.img}
                      alt=""
                    />
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="relative flex items-center">
              <div
                id="slider"
                className={`flex flex-wrap justify-center items-center mx-auto max-h-[800px] h-full overflow-y-scroll scroll scroll-smooth`}
              >
                {data.map((item) => {
                  return (
                    <>
                      <div className={classes.imgContainer}>
                        <img
                          className="w-[496px] h-100 inline-block p-[20px] cursor-pointer hover:scale-105 ease-in-out duration-300"
                          src={item.img}
                          alt=""
                        />
                        <p className="text-center text-[#1C2752] font-mulish text-lg font-bold">
                          {item.description}
                        </p>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};
