import { useRef } from "react";
import { useDispatch } from "react-redux";

import { FaSearch } from "react-icons/fa";
import { FaTimesCircle } from "react-icons/fa";
import { updateQuery } from "../../Store/headerSlice";

import useHandleOutsideClick from "../../Hooks/useHandleOutsideClick";

function SearchBar({ showSearch, setShowSearch }) {
  const ref = useRef();
  useHandleOutsideClick(showSearch, setShowSearch, ref);
  const dispatch = useDispatch();
  return (
    <form
      ref={ref}
      className={`absolute left-[60%] top-[40%] flex -translate-x-[60%] ${
        showSearch ? "-translate-y-[40%]" : "-translate-y-[50vh]"
      } justify-center gap-2 rounded-lg bg-stone-300 p-1 align-middle transition-all duration-100 sm:left-[50%] sm:-translate-x-[50%] lg:static lg:left-0 lg:top-0 lg:translate-x-0 lg:translate-y-0`}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input
        type="text"
        name="item-query"
        placeholder="Search Item"
        onChange={(e) => {
          dispatch(updateQuery(e.target.value));
        }}
        className="h-10 w-[120px] rounded-lg border-none px-2 outline-none transition-all duration-1000 focus:ring focus:ring-yellow-200 focus:ring-offset-2 min-[400px]:w-[150px] md:w-60 md:focus:w-80"
      />
      <button className="right-1 top-1 hidden rounded-lg bg-stone-300 px-2 py-1 font-semibold min-[400px]:block">
        <FaSearch />
      </button>
      <FaTimesCircle
        className="absolute -bottom-7 text-2xl text-stone-400 lg:hidden"
        onClick={() => {
          setShowSearch(false);
        }}
      />
    </form>
  );
}

export default SearchBar;
