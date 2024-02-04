import { Outlet } from "react-router-dom";

import Header from "../Components/Header/Header";
import SideBar from "../Components/SideBar";
import Trending from "../Features/Categories/Trending";
import FlashSale from "../Features/Categories/FlashSale";
import Footer from "../Components/Footer";

function Dashboard() {
  return (
    <div className="no-scrollbar grid min-h-full grid-cols-[15rem_1fr] grid-rows-[auto] gap-4">
      <Header />

      <SideBar />
      <main className="no-scrollbar relative col-span-3 max-h-[500vh] overflow-scroll rounded-lg bg-stone-200 p-3 lg:col-span-2 lg:mr-2 lg:space-y-3">
        <Outlet />
      </main>

      <Trending />
      <FlashSale />

      <Footer />
    </div>
  );
}

export default Dashboard;
