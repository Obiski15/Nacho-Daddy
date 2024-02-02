import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../Store/cartSlice";
import { formatCurrency } from "../../Utility/helpers";

import IncDecButton from "../../Components/IncDecButton";
import Button from "../../Components/Button";

function CategoryItem({ item }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  function handleAddToCart() {
    const newItem = {
      id: item.id,
      itemName: item.itemName,
      quantity: 1,
      unitPrice: item.unitPrice,
      totalPrice: item.unitPrice,
      quantityAvailable: item.quantityAvailable,
      image: item.image,
      discount: "",
      isBookmarked: false,
    };

    dispatch(addItem(newItem));
    toast.success("Item added to cart");
  }

  return (
    <div
      className={`no-scrollbar m-auto h-[320px] w-[200px] overflow-scroll rounded-lg text-left ${
        !(item.quantityAvailable === 0) ? "hover:bg-stone-300" : ""
      } ${item.quantityAvailable === 0 && "opacity-50"}`}
    >
      <img
        src={item.image}
        alt={item.itemName}
        className="h-[180px] w-[100%]"
      />
      <div className="space-y-1 p-2">
        <p className="text-md font-bold capitalize text-yellow-500">
          {item.itemName}
        </p>
        <p>{formatCurrency(item.unitPrice)}</p>
        <p
          className={`text-sm ${
            item.quantityAvailable > 0 ? "font-semibold" : "font-extralight"
          }`}
        >
          {item.quantityAvailable > 0 ? (
            "In Stock"
          ) : (
            <del className="italic">Sold out</del>
          )}
        </p>
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
    </div>
  );
}

export default CategoryItem;
