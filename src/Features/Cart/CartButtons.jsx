import IncDecButton from "../../Components/IncDecButton";
import BookmarkItem from "../Bookmark/BookmarkItem";
import DeleteCartItem from "./DeleteCartItem";

function CartButtons({ item }) {
  return (
    <div className="flex items-center justify-between space-x-3 max-[600px]:self-end">
      <IncDecButton item={item} disabled={item.quantity === 1} />
      <DeleteCartItem id={item.id} />
      <BookmarkItem item={item} />
    </div>
  );
}

export default CartButtons;
