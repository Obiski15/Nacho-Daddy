import Logo from "./Logo";
import SearchBar from "./SearchBar";
import Filter from "./Filter";

function Header() {
  return (
    <div className="sticky left-0 right-0 top-0 z-50 col-span-3 flex items-center justify-between gap-3 border-b-2 border-stone-200 bg-stone-200 px-1 py-1">
      <Logo />
      <SearchBar />
      <Filter />
    </div>
  );
}

export default Header;
