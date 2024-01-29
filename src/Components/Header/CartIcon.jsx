import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { LARGE_ICON_SIZE } from "../../Utility/constants";
import { getTotalQuantity } from "../../Store/cartSlice";
import { BsCart4 } from "react-icons/bs";

function CartIcon() {
  const navigate = useNavigate();
  const quantity = useSelector(getTotalQuantity);
  return (
    <div className="relative">
      <span
        onClick={() => {
          navigate("/cart");
        }}
      >
        <BsCart4 size={LARGE_ICON_SIZE} />
        <b className="z-90 absolute -right-0.5 -top-1 rounded-xl bg-yellow-400 px-1 text-sm font-bold">
          {quantity}
        </b>
      </span>
    </div>
  );
}

export default CartIcon;
