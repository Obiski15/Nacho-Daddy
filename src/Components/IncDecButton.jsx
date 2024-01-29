import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import {
  decItemQuantity,
  deleteCart,
  incItemQuantity,
} from "../Store/cartSlice";

function IncDecButton({ item, moreStyles, disabled }) {
  const dispatch = useDispatch();
  const quantity = useSelector((state) => state.cart.cart).find(
    (el) => item.id === el.id,
  )?.quantity;

  return (
    <div className={`space-x-4 ${moreStyles}`}>
      <Button
        disabled={disabled}
        onClick={() => {
          if (quantity === 1) {
            dispatch(deleteCart(item.id));
            toast.success("Item Deleted");
          } else dispatch(decItemQuantity(item.id));
        }}
      >
        -
      </Button>
      <span>{quantity}</span>
      <Button
        onClick={() => {
          if (quantity === item.quantityAvailable)
            toast.error("Item Exhausted");
          else dispatch(incItemQuantity(item.id));
        }}
      >
        +
      </Button>
    </div>
  );
}

export default IncDecButton;
