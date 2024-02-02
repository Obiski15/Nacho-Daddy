import { useRef, useState } from "react";

import Logo from "./Logo";
import SearchBar from "./SearchBar";
import Filter from "./Filter";
import Hamburger from "./Hamburger";
import useHandleOutsideClick from "../../Hooks/useHandleOutsideClick";

function Header() {
  const ref = useRef();
  const [showFilter, setShowFilter] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  useHandleOutsideClick(showFilter, setShowFilter, ref);

  return (
    <div className="sticky left-0 right-0 top-0 z-50 col-span-3 flex items-center justify-between gap-3 border-b-2 border-stone-200 bg-stone-200 py-1 pr-3">
      <Logo />
      <SearchBar showSearch={showSearch} setShowSearch={setShowSearch} />
      {/* ref is placed in the parent to handle conditons in the usehandleclick hook due to event propagation */}
      <div ref={ref}>
        <Hamburger
          showFilter={showFilter}
          setShowFilter={setShowFilter}
          setShowSearch={setShowSearch}
        />
        <Filter
          showFilter={showFilter}
          setShowFilter={setShowFilter}
          setShowSearch={setShowSearch}
        />
      </div>
    </div>
  );
}

export default Header;
