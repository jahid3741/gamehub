import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const MainLayout = () => {
  return (
    <>
      <Navbar />

      <div className="min-h-[calc(100vh-160px)]">
        <Outlet />
      </div>

      <Footer />
    </>
  );
};

export default MainLayout;
