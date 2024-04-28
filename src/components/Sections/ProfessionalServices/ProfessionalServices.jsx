import buildingImage from "../../../assets/icons/building.png";
import commercialBuilding from "../../../assets/images/commercial.png";

export const ProfessionServices = () => {
  return (
    <div
      className="flex flex-col-reverse lg:flex-row justify-between gap-4 lg:gap-12 lg:items-center py-6 md:py-[59px] md:px-[66px] md:border md:border-[#E5EAF4] md:bg-white"
      style={{ boxShadow: "0px 6px 26px 0px rgba(146, 146, 146, 0.06)" }}
    >
      <div className="flex flex-col gap-3">
        <div className="img-heading">
          <img src={buildingImage} alt="" className="w-6 h-6" />
          <p className="text-[#1C2752] text-sm md:text-base font-medium">
            Professional Main Services
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h3 className="text-base md:text-4xl heading">Commercial</h3>
            <div className="flex flex-col gap-4 text-[#7E7E7E] text-base font-light max-w-[562px] w-full">
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
          <button className="border-[#FFB342] border-2 max-w-max px-4 py-4 md:py-3 md:px-6 cursor-pointer md:max-w-[180px] w-full text-[#1C2752] text-sm font-medium hover:bg-[#FFBB54]">
            Read More
          </button>
        </div>
      </div>
      <img src={commercialBuilding} alt="" className="" />
    </div>
  );
};
