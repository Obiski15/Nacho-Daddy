import { Link } from "react-router-dom";
import { useLogout } from "../../Features/Authentication/useLogout";

import toast from "react-hot-toast";
import { useEffect } from "react";

function AccountDropDown({ isOpen, setIsOpen, setShowFilter }) {
  const { logout, isPending } = useLogout();
  const linkStyle = "rounded-sm p-1 capitalize hover:bg-stone-200";

  useEffect(() => {
    if (isPending) toast.success("Logging out");
  }, [isPending]);

  return (
    isOpen && (
      <ul className="items-left absolute -right-10 top-[75px] flex w-[120px] flex-col justify-between gap-2 rounded-sm bg-stone-300 p-1 font-semibold lg:-right-2">
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
              setShowFilter(false);
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
