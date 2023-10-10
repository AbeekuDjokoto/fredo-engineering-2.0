import React from "react";
import { Footer, SubNavBar } from "../../components";
import ProjectBackground from "../../assets/images/ProjectBackground.png";
import rowVertical from "../../assets/icons/row-vertical.svg";
import rowHorizontal from "../../assets/icons/element-3.svg";
import classes from "./Products.module.scss";
import { data } from "./mockData";

export const Products = () => {
  const [horizontal, setHorizontal] = React.useState(true);
  return (
    <div>
      <SubNavBar />

      <div className="h-[355px]">
        <div className={classes.backgroundBehind}>
          <img src={ProjectBackground} alt="" />
          <h1 className={classes.title}>Our Projects</h1>
        </div>
      </div>
      <main className={classes.main}>
        <div className={classes.grid}>
          <div onClick={() => setHorizontal(true)}>
            <img src={rowVertical} alt="" />
          </div>
          <div onClick={() => setHorizontal(false)}>
            <img src={rowHorizontal} alt="" />
          </div>
        </div>
      </main>
      {horizontal ? (
        <div className="relative flex items-center mt-[200px]">
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
            className={`${classes.scrollableContainer} scroll scroll-smooth`}
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
                    <p className={classes.description}>{item.description}</p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};
