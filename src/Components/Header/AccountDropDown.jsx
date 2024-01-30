import { Link } from "react-router-dom";
import { useLogout } from "../../Features/Authentication/useLogout";

import FullPageSpinner from "../FullPageSpinner";

function AccountDropDown({ listRef, isOpen, setIsOpen }) {
  const { logout, isPending } = useLogout();
  const linkStyle = "rounded-sm p-1 capitalize hover:bg-stone-200";

  if (isPending) return <FullPageSpinner />;
  return (
    isOpen && (
      <ul
        ref={listRef}
        className="items-left absolute -right-2 top-[75px] flex w-[120px] flex-col justify-between gap-2 rounded-sm bg-stone-300 p-1 font-semibold"
      >
        <li className={linkStyle}>
          <Link
            onClick={() => {
              setIsOpen(false);
            }}
          >
            account
          </Link>
        </li>
        <li className={linkStyle}>
          <Link
            to="/myorders"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            my orders
          </Link>
        </li>
        <li className={linkStyle}>
          <button
            disabled={isPending}
            onClick={() => {
              logout();
              setIsOpen(false);
            }}
          >
            Sign out
          </button>
        </li>
      </ul>
    )
  );
}

export default AccountDropDown;
