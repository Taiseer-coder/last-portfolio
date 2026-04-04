import { Outlet } from "react-router-dom";
import Background from "../particle/Background";
import Navbar from "../components/Navbar";

function MainLayout() {
    // console.log("MainLayout rendered");
  return (
    <div className="relative min-h-screen overflow-hidden text-white ">

      {/* الخلفية */}
      <Background />

      {/* Navbar */}
      <Navbar/>

      {/* الصفحات */}
      <div className="relative z-10 pt-24">
        <Outlet />
      </div>

    </div>
  );
}

export default MainLayout;