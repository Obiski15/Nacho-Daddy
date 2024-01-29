import { useEffect, useRef, useState } from "react";

import { LARGE_ICON_SIZE } from "../../Utility/constants";
import { RiAccountCircleLine } from "react-icons/ri";

import AccountDropDown from "./AccountDropDown";

function AccountIcon() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    if (!isOpen) return;
    const listeners = ["click", "scroll"];
    function handleOutsideClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    }

    listeners.forEach((listener) =>
      document.addEventListener(listener, handleOutsideClick, true),
    );

    return () => {
      listeners.forEach((listener) =>
        document.removeEventListener(listener, handleOutsideClick, true),
      );
    };
  }, [isOpen]);

  return (
    <div className="relative">
      <RiAccountCircleLine
        size={LARGE_ICON_SIZE}
        onClick={() => {
          setIsOpen((isOpen) => !isOpen);
        }}
      />

      <AccountDropDown listRef={ref} isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}

export default AccountIcon;
