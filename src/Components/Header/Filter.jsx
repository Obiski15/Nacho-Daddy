import { CiBookmark } from "react-icons/ci";

import Sorting from "./Sorting";
import CartIcon from "./CartIcon";
import AccountIcon from "./AccountIcon";

function Filter() {
  return (
    <div className="flex cursor-default items-center justify-center gap-5 pr-2">
      <CiBookmark size={35} />
      <Sorting />
      <CartIcon />
      <AccountIcon />
    </div>
  );
}

export default Filter;
