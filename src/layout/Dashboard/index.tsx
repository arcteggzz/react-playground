import { Outlet } from "react-router-dom";
import SideBar from "../../components/SideBar";

const DashboardWrapper = () => {
  return (
    <>
      <div className="w-screen flex h-screen overflow-hidden">
        <div className="w-[20vw]">
          <SideBar />
        </div>

        <div className="w-[80vw] h-screen bg-blue-700 px-[2vw]">
          <div className="bg-blue-700 h-[10vh]">Blue banner on top</div>

          <div className="bg-white w-full h-[80vh] rounded-[40px]">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardWrapper;
