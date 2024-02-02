import { useSelector } from "react-redux";
import Button from "../../Components/Button";
import { formatCurrency } from "../../Utility/helpers";
import { getTotalPrice, getTotalQuantity } from "../../Store/cartSlice";
import { useNavigate } from "react-router-dom";

function CartSummary() {
  const navigate = useNavigate();
  const totalPrice = useSelector(getTotalPrice);
  const totalQuantity = useSelector(getTotalQuantity);

  function handleSubmit() {
    navigate("/checkout");
  }

  return (
    <>
      <div className="space-y-4 rounded-lg bg-stone-200 px-2 py-4">
        <h1 className="text-xl font-bold uppercase">Cart Summary</h1>
        <div className="flex items-center justify-between">
          <p className="font-semibold italic">Sub Total:</p>
          <p className="font-bold italic">{formatCurrency(totalPrice)}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="font-semibold italic">Total:</p>
          <p className="font-bold italic">{formatCurrency(totalPrice)}</p>
        </div>
        <Button
          moreStyle={`w-[100%]`}
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
