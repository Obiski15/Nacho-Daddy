import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { formatCurrency } from "../../Utility/helpers";
import { getTotalPrice, getTotalQuantity } from "../../Store/cartSlice";
import { useUser } from "../Authentication/useUser";

import Button from "../../Components/Button";
import toast from "react-hot-toast";
import Heading from "../../Components/Heading";

function CartSummary() {
  const navigate = useNavigate();
  const { isAuthenticated } = useUser();
  const totalPrice = useSelector(getTotalPrice);
  const totalQuantity = useSelector(getTotalQuantity);

  function handleSubmit() {
    if (!isAuthenticated) return toast.error("Kindly login to checkout");
    navigate("/checkout");
  }

  return (
    <>
      <div className="space-y-4 rounded-lg bg-stone-200 px-2 py-4">
        <Heading type="h3" font="bold" moreStyles="uppercase">
          Cart Summary
        </Heading>
        <div className="flex items-center justify-between">
          <p className="font-semibold italic">Sub Total:</p>
          <p className="font-bold italic">{formatCurrency(totalPrice)}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="font-semibold italic">Total:</p>
          <p className="font-bold italic">{formatCurrency(totalPrice)}</p>
        </div>
        <Button
          moreStyle={`w-full`}
          onClick={() => {
            handleSubmit();
          }}
        >
          Checkout({totalQuantity} )
        </Button>
      </div>
    </>
  );
}

export default CartSummary;
