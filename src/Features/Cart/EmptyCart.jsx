import { useDispatch } from "react-redux";
import Button from "../../Components/Button";
import { clearCart } from "../../Store/cartSlice";

function EmptyCart() {
  const dispatch = useDispatch();
  return (
    <Button
      moreStyle={`float-right mt-3`}
      onClick={() => {
        const confirm = window.confirm("kindly Confirm To Empty Cart");
        if (!confirm) return;
        dispatch(clearCart());
      }}
    >
      empty cart
    </Button>
  );
}

export default EmptyCart;
