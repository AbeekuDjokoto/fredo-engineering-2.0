import buildingImage from "../../../assets/icons/building.png";
import commercialBuilding from "../../../assets/images/commercial.png";

export const ProfessionServices = () => {
  return (
    <section className="wrapper">
      <div
        className="flex flex-col-reverse lg:flex-row justify-between gap-12 lg:items-center py-[59px] px-[66px] border border-[#E5EAF4] bg-white"
        style={{ boxShadow: "0px 6px 26px 0px rgba(146, 146, 146, 0.06)" }}
      >
        <div className="flex flex-col gap-3">
          <div className="img-heading">
            <img src={buildingImage} alt="" />
            <p className="text-[#1C2752] text-base font-medium">
              Professional Main Services
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="heading">Commercial</h3>
            <div className="flex flex-col gap-4 text-[#7E7E7E] text-sm font-light max-w-[562px] w-full">
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
      </div>
    </section>
  );
};
