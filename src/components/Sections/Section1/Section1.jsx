import styles from "./Section1.module.scss";
import buildingImage from "../../../assets/icons/building.png";
import commercialBuilding from "../../../assets/images/commercial.png";

export const Section1 = () => {
  return (
    <section className={styles.section1}>
      <div>
        <div className={styles.smallCard}>
          <img src={buildingImage} alt="" className="h-[28px]" />
          <p>Professional Main Services</p>
        </div>
        <div className={styles.headCard}>
          <h3 className={styles.title}>Commercial</h3>
          <div className="flex flex-col gap-4 text-[#7E7E7E] text-sm font-light max-w-[562px] w-full">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              incididunt ut labore et dolore magna aliqua. Ut enim ad minimquis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
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
  );
};
