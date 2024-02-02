import { FaSearch } from "react-icons/fa";

function SearchIcon({ setShowFilter, setShowSearch }) {
  return (
    <FaSearch
      className="lg:hidden"
      onClick={() => {
        setShowFilter(false);
        setShowSearch(true);
      }}
    />
  );
}

export default SearchIcon;
