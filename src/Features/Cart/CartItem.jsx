import { formatCurrency } from "../../Utility/helpers";
import CartButtons from "./CartButtons";
function CartItem({ item }) {
  return (
    <div
      className="mb-1 flex items-center justify-between gap-3 rounded-lg p-3 hover:bg-stone-200 max-[600px]:flex-col max-[600px]:items-start"
      key={item.itemName}
    >
      <div className="flex items-start justify-start gap-3">
        <img
          src={item.image}
          alt={item.itemName}
          className="h-[80px] w-[100px]"
        />
        <div className="flex flex-col items-start justify-between gap-2 ">
          <p className="text-lg font-bold capitalize italic text-yellow-600">
            {item.itemName}
          </p>
          <p className="text-sm font-light">
            {item.quantity} x {formatCurrency(item.unitPrice)}
          </p>
          <p className="text-sm font-semibold italic">
            {formatCurrency(item.totalPrice)}
          </p>
        </div>
      </div>
      <CartButtons item={item} />
    </div>
  );
}

export default CartItem;
