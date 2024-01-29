import { useSelector } from "react-redux";
import { searchItem } from "../../Utility/helpers";

import CategoryItem from "./CategoryItem";

function CategoryContainer({ data }) {
  const query = useSelector((state) => state.header.query);

  const sortBy = useSelector((state) => state.header.sortBy);

  const searchedItems = searchItem(data, query);

  if (!data.length) return <p>Sorry no items available currently ):</p>;

  if (!searchedItems.length) return <p>Item not found</p>;

  const items =
    sortBy === "priceUp"
      ? searchedItems.sort((a, b) => a.unitPrice - b.unitPrice)
      : sortBy === "priceDown"
        ? searchedItems.sort((a, b) => b.unitPrice - a.unitPrice)
        : sortBy === "itemName"
          ? searchedItems.sort((a, b) => a.itemName.localeCompare(b.itemName))
          : searchedItems;

  return (
    <>
      <h1 className="text-md italic">
        <span className="font-semibold">{searchedItems.length}</span> products
        found
      </h1>
      <div className="grid grid-cols-4 grid-rows-[auto] items-start justify-between gap-3">
        {items.map((item) => (
          <CategoryItem item={item} key={item.id} />
        ))}
      </div>
    </>
  );
}

export default CategoryContainer;
