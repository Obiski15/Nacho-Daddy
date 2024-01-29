import { IoTrashOutline } from "react-icons/io5";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { deleteCart } from "../../Store/cartSlice";

function DeleteCartItem({ id }) {
  const dispatch = useDispatch();
  return (
    <span
      onClick={() => {
        dispatch(deleteCart(id));
        toast.success("Item Deleted");
      }}
    >
      <IoTrashOutline size={20} style={{ color: "red" }} />
    </span>
  );
}

export default DeleteCartItem;
