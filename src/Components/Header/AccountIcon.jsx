import { useRef, useState } from "react";

import { LARGE_ICON_SIZE } from "../../Utility/constants";
import { RiAccountCircleLine } from "react-icons/ri";
import { useHandleOutsideClick } from "../../Hooks/useHandleOutsideClick";

import AccountDropDown from "./AccountDropDown";

function AccountIcon({ setShowFilter }) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();

  useHandleOutsideClick(isOpen, setIsOpen, ref);

  return (
    <div className="relative" ref={ref}>
      {/* ref is placed in the parent to handle conditons in the usehandleclick hook due to event propagation */}
      <RiAccountCircleLine
        onClick={() => {
          setIsOpen((isOpen) => !isOpen);
        }}
        size={LARGE_ICON_SIZE}
      />

      <AccountDropDown
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setShowFilter={setShowFilter}
      />
    </div>
  );
}

export default AccountIcon;
