import { CiBookmark } from "react-icons/ci";

import Sorting from "./Sorting";
import CartIcon from "./CartIcon";
import AccountIcon from "./AccountIcon";
import SearchIcon from "./SearchIcon";

function Filter({ showFilter, setShowFilter, setShowSearch }) {
  return (
    <div
      className={`no-scrollbar fixed bottom-0 right-0 top-0 flex ${
        showFilter ? "translate-x-[0]" : "translate-x-[100%]"
      } flex min-w-[30vw] cursor-default flex-col-reverse items-center justify-end gap-8 overflow-y-scroll bg-stone-300 p-3 pt-[90px] transition-all duration-300 ease-linear lg:static lg:w-auto lg:translate-x-0 lg:translate-y-0 lg:flex-row lg:justify-end lg:gap-5 lg:overflow-y-visible lg:bg-transparent lg:pt-3`}
    >
      <CiBookmark size={35} />
      <Sorting />
      <CartIcon />
      <AccountIcon setShowFilter={setShowFilter} />
      <SearchIcon setShowFilter={setShowFilter} setShowSearch={setShowSearch} />
    </div>
  );
}

export default Filter;
