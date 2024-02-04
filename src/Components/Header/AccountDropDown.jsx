import toast from "react-hot-toast";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useLogout } from "../../Features/Authentication/useLogout";
import { useUser } from "../../Features/Authentication/useUser";

import Button from "../Button";

const linkStyle = "rounded-sm p-1 capitalize hover:bg-stone-200";

function AccountDropDown({ isOpen, setIsOpen, setShowFilter }) {
  const { logout, isPending } = useLogout();
  const { isAuthenticated } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (isPending) toast.success("Logging out");
  }, [isPending]);

  return (
    isOpen && (
      <ul className="items-left absolute -right-10 top-[75px] flex w-[120px] flex-col justify-between gap-2 rounded-sm bg-stone-300 px-2 py-1 font-semibold lg:-right-2">
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
        <li className="p-1">
          <Button
            moreStyle={"w-full"}
            disabled={isPending}
            onClick={() => {
              isAuthenticated ? logout() : navigate("/login");
              setIsOpen(false);
              setShowFilter(false);
            }}
          >
            {isAuthenticated ? "Sign out" : "Sign In"}
          </Button>
        </li>
      </ul>
    )
  );
}

export default AccountDropDown;
