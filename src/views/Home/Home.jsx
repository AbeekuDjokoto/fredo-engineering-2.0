import React from "react";
import { Navbar } from "../../components";
import mechanicImage from "../../assets/images/Background.png";
import styles from "./Home.module.scss";
import gearImage from "../../assets/images/gear.png";
import commercialBuilding from "../../assets/images/commercial.png";
import manBuilding from "../../assets/images/manBuilding.png";
import buildingImage from "../../assets/icons/building.png";
import headGear from "../../assets/icons/headGear.png";

export const Home = () => {
  return (
    <header className={styles.container}>
      <img src={mechanicImage} alt="" className="absolute z-[-1]" />
      <Navbar />
      <div className="mb-[380px]">
        <div className={styles.header}>
          <div className={styles.subTitle}>
            <img src={gearImage} alt="" />
            We Provide Electric Services For Industrial Project
          </div>
          <h3 className={styles.title}>We Are Professional Quality Services</h3>
          <button className={styles.btn}>Our Services</button>
        </div>
      </div>

      {/* First Section */}
      <section className={styles.section1}>
        <div>
          <div className={styles.smallCard}>
            <img src={buildingImage} alt="" className="h-[28px]" />
            <p>Professional Main Services</p>
          </div>
          <div className={styles.headCard}>
            <h3 className={styles.title}>Commercial</h3>
            <div className="flex flex-col gap-4 text-[#7E7E7E] text-sm font-normal max-w-[562px] w-full">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                incididunt ut labore et dolore magna aliqua. Ut enim ad
                minimquis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
          <button className="pt-5 pb-5 max-w-[190px] w-full bg-[#FFB342] text-xl font-semibold text-[#1C2752] mt-[32px]">
            Read More
          </button>
        </div>
        <img src={commercialBuilding} alt="" />
      </section>

      {/* Second Section */}
      <section className={styles.section2}>
        <img src={manBuilding} alt="" className="rounded-2xl" />
        <div>
          <div className={styles.smallCard}>
            <img src={headGear} alt="" className="h-[28px]" />
            <p>Welcome FESC</p>
          </div>
          <div className={styles.headCard}>
            <h3 className={styles.title}>We Provide Your Future</h3>
            <div className="flex flex-col gap-4 text-[#7E7E7E] text-sm font-normal max-w-[600px] w-full">
              <p>
                Fredo Engineering and Consultancy Services (FESC) is a
                specialized engineering technology enterprise that is engaged in
                a variety of engineering design, equipment manufacture,
                engineering installation and commissioning, technical staff
                training and so on.
              </p>
              <p>
                The company manufactures manual, semi-automated and fully
                automated machines and also provide consultancy ad after sale
                services to clients and the industry as a whole. Our machines
                are locally fabricated with the best of materials.
              </p>
            </div>
          </div>
          <button className="pt-5 pb-5 max-w-[190px] w-full bg-[#FFB342] text-xl font-semibold text-[#1C2752] mt-[32px]">
            Read More
          </button>
        </div>
      </section>
    </header>
  );
};
