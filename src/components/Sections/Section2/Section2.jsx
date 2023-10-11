import styles from "./Section2.module.scss";
import headGear from "../../../assets/icons/headGear.png";
import manBuilding from "../../../assets/images/manBuilding.png";

export const Section2 = () => {
  return (
    <section className={styles.section2}>
      <img src={manBuilding} alt="" className="rounded-2xl" />
      <div className="flex flex-col justify-between gap-10">
        <div className="flex flex-col gap-3">
          <div className={styles.smallCard}>
            <img src={headGear} alt="" className="h-[28px]" />
            <p>Welcome FESC</p>
          </div>
          <div className={styles.headCard}>
            <h3 className={styles.title}>We Provide Your Future</h3>
            <div className="flex flex-col gap-4 text-[#7E7E7E] text-base font-light max-w-[600px] w-full mt-3">
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
        </div>

        <div className="flex items-center gap-10">
          <div className="max-w-[175px] w-full h-[197px] bg-[#F4F4F4] text-center flex flex-col justify-center">
            <h1 className="text-[#FFB342] text-[58px] font-bold">35</h1>
            <p className={styles.year}>Years of Experience</p>
          </div>
          <ul className="flex flex-col gap-4 text-[#7E7E7E] font-light">
            <li>- Professionalism.</li>
            <li>- Respect.</li>
            <li>-Team work.</li>
            <li>- Customer Centered.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
