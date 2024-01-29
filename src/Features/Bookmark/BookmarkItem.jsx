import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

import { bookmark, removeBookmark } from "../../Store/cartSlice";

function BookmarkItem({ item }) {
  const dispatch = useDispatch();

  return (
    <>
      {item.isBookmarked ? (
        <FaHeart
          size={20}
          style={{ color: "red" }}
          onClick={() => {
            dispatch(removeBookmark(item.id));
            toast.success("Bookmark Removed");
          }}
        />
      ) : (
        <CiHeart
          size={20}
          onClick={() => {
            dispatch(bookmark(item.id));
            toast.success("Item Bookmarked");
          }}
        />
      )}
    </>
  );
}

export default BookmarkItem;
