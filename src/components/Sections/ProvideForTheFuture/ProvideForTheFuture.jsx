import headGear from "../../../assets/icons/headGear.png";
import manBuilding from "../../../assets/images/manBuilding.png";

export const ProvideForTheFuture = () => {
  return (
    <section className="flex flex-col lg:flex-row gap-3 md:gap-12 justify-between lg:items-center">
      <img src={manBuilding} alt="" />
      <div className="flex flex-col justify-between gap-10">
        <div className="flex flex-col gap-3 lg:max-w-[669px] w-full">
          <div className="img-heading">
            <img src={headGear} alt="" className="h-[28px]" />
            <p className="text-[#1C2752] text-base font-medium">Welcome FESC</p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="heading">We Provide Your Future</h3>
            <div className="flex flex-col gap-4 text-[#7E7E7E] text-base font-light mt-3">
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
            <p className="text-[#1C2752] font-mulish text-xl font-medium">
              Years of Experience
            </p>
          </div>
          <ul className="flex flex-col gap-4 text-[#7E7E7E] font-light">
            <li>- Professionalism.</li>
            <li>- Respect.</li>
            <li>- Team work.</li>
            <li>- Customer Centered.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
