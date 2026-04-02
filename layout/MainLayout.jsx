import { Outlet } from "react-router-dom";
import NameAndLogo from "../components/navbar/Name&Logo";
import Background from "../particle/Background";

function MainLayout() {
    // console.log("MainLayout rendered");
  return (
    <div className="relative min-h-screen overflow-hidden text-white ">

      {/* الخلفية */}
      <Background />

      {/* Navbar */}
      <NameAndLogo/>

      {/* الصفحات */}
      <div className="relative z-10 pt-24">
        <Outlet />
      </div>

    </div>
  );
}

export default MainLayout;