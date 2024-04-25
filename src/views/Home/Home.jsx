import React from "react";
import {
  Footer,
  Navbar,
  ProfessionServices,
  ProvideForTheFuture,
  Teams,
  WhyChooseUs,
} from "../../components";
import mechanicImage from "../../assets/images/Background.png";
import styles from "./Home.module.scss";
import gearImage from "../../assets/images/gear.png";

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
      <ProfessionServices />

      <div className="flex flex-col gap-20 py-[150px] wrapper">
        {/* Beginnging of Second Section */}
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
