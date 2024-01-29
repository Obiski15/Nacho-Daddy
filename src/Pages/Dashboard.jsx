import { Outlet } from "react-router-dom";

import Header from "../Components/Header/Header";
import SideBar from "../Components/SideBar";
import Trending from "../Features/Categories/Trending/Trending";
import FlashSale from "../Features/Categories/FlashSale/FlashSale";
import Footer from "../Components/Footer";

function Dashboard() {
  return (
    <div className="no-scrollbar grid min-h-[100%] grid-cols-[15rem_1fr] grid-rows-[auto] gap-4">
      <Header />

      <SideBar />
      <main className="relative max-h-[500vh] space-y-3 overflow-scroll rounded-lg bg-stone-200 p-3">
        <Outlet />
      </main>

      <Trending />
      <FlashSale />

      <Footer />
    </div>
  );
}

export default Dashboard;
