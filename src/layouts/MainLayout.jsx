import { Outlet } from "react-router-dom";
import { SubNavBar, Footer } from "components";

export const MainLayout = () => {
  return (
    <div>
      <SubNavBar />
      <Outlet />
      <Footer />
    </div>
  );
};
