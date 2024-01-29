import { formatCurrency } from "../../Utility/helpers";
import CartButtons from "./CartButtons";
function CartItem({ item }) {
  return (
    <div
      className="mb-1 flex items-center justify-between gap-3 rounded-lg p-3 hover:bg-stone-200"
      key={item.itemName}
    >
      <div className="flex items-center justify-start gap-3">
        <img
          src={item.image}
          alt={item.itemName}
          className="h-[80px] w-[100px]"
        />
        <p>
          <span className="text-lg font-bold italic text-yellow-600">
            {item.itemName}
          </span>
          <br />
          <span className="text-sm font-light">
            {item.quantity} x {formatCurrency(item.unitPrice)}
          </span>
          <br />
          <span className="text-sm font-semibold italic">
            {formatCurrency(item.totalPrice)}
          </span>
          <br />
        </p>
      </div>
      <CartButtons item={item} />
    </div>
  );
}

export default CartItem;
