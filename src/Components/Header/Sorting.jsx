import { useDispatch, useSelector } from "react-redux";
import { sortBy } from "../../Store/headerSlice";

function Sorting() {
  const sort = useSelector((state) => state.header.sort);

  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-center gap-2">
      <p className="hidden text-sm font-semibold uppercase italic lg:block">
        Sort By:
      </p>
      <select
        name="sort"
        value={sort}
        onChange={(e) => {
          dispatch(sortBy(e.target.value));
        }}
        className="h-15 rounded-lg"
      >
        <option value="recent">Recently Added</option>
        <option value="priceUp">Price &uarr;</option>
        <option value="priceDown">Price &darr;</option>
        <option value="itemName">Name</option>
      </select>
    </div>
  );
}

export default Sorting;
