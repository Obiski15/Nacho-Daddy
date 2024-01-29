import { FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { updateQuery } from "../../Store/headerSlice";

function SearchBar() {
  const dispatch = useDispatch();
  return (
    <form
      className="flex justify-center gap-2 rounded-lg bg-stone-300 p-1 align-middle"
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
        className="h-10 w-60 rounded-lg border-none px-2 outline-none transition-all duration-1000 focus:w-80 focus:ring focus:ring-yellow-200 focus:ring-offset-2"
      />
      <button className="right-1 top-1 rounded-lg bg-stone-300 px-2 py-1 font-semibold">
        <FaSearch />
      </button>
    </form>
  );
}

export default SearchBar;
