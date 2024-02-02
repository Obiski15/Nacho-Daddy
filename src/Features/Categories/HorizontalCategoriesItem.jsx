import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

import { addItem } from "../../Store/cartSlice";
import { formatCurrency } from "../../Utility/helpers";

import IncDecButton from "../../Components/IncDecButton";
import Button from "../../Components/Button";

function HorizontalCategoriesItem({ discountInPercentage, item }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  const itemPrice = discountInPercentage
    ? item.unitPrice - (50 / 100) * item.unitPrice
    : item.unitPrice;

  function handleAddToCart() {
    const newItem = {
      id: item.id,
      itemName: item.itemName,
      quantity: 1,
      unitPrice: itemPrice,
      totalPrice: itemPrice,
      quantityAvailable: item.quantityAvailable,
      image: item.image,
      discount: itemPrice,
      isBookmarked: false,
    };

    dispatch(addItem(newItem));
    toast.success("Item added to cart");
  }

  return (
    <li
      className={`${
        item.quantityAvailable === 0 ? "opacity-50" : ""
      } no-scrollbar relative my-2 h-[320px] min-w-[200px] overflow-scroll rounded-lg border-2 border-yellow-400 text-left hover:scale-[1.01]`}
    >
      <span>
        <img
          src={item.image}
          alt={item.itemName}
          className="h-[180px] w-[100%]"
        />
        <div className="flex flex-col gap-1 p-2">
          <p className="text-md font-bold uppercase text-yellow-500">
            {item.itemName}
          </p>
          <p>
            <del className="text-light italic">
              {formatCurrency(item.unitPrice)}
            </del>{" "}
            {formatCurrency(itemPrice)}
          </p>
          <p
            className={`text-sm ${
              item.quantityAvailable > 0 ? "font-semibold" : "font-extralight"
            } italic`}
          >
            {item.quantityAvailable > 0 ? "In Stock" : <del>Sold out</del>}
          </p>
          {discountInPercentage && (
            <p className="text-md absolute right-2 top-1 rounded-md bg-red-50 p-1 font-bold text-stone-500">
              {`-${discountInPercentage}%`}
            </p>
          )}
          {cart.find((el) => item.id === el.id)?.quantity >= 1 ? (
            <IncDecButton item={item} />
          ) : (
            <Button
              moreStyle={`mb-2`}
              onClick={handleAddToCart}
              disabled={item.quantityAvailable === 0}
            >
              Add To Cart
            </Button>
          )}
        </div>
      </span>
    </li>
  );
}

export default HorizontalCategoriesItem;
