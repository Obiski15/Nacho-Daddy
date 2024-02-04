import { useSelector } from "react-redux";
import { searchItem } from "../../Utility/helpers";

import CategoryItem from "./CategoryItem";
import Heading from "../../Components/Heading";

function CategoryContainer({ data }) {
  const query = useSelector((state) => state.header.query);

  const sortBy = useSelector((state) => state.header.sortBy);

  const searchedItems = searchItem(data, query);

  if (!data.length)
    return (
      <p className="mx-2 min-h-[50vh] rounded-sm">
        Sorry no items available currently ):
      </p>
    );

  if (!searchedItems.length)
    return (
      <p className="mx-2 min-h-[50vh] rounded-sm">Sorry item not found ):</p>
    );

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
      <div className="mb-3">
        <Heading type="h5" moreStyles="italic">
          {searchedItems.length} products found
        </Heading>
      </div>
      <div className="grid grid-cols-1 grid-rows-[auto] items-start justify-between gap-3 min-[420px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 min-[1440px]:grid-cols-5 min-[1750px]:grid-cols-7">
        {items.map((item) => (
          <CategoryItem item={item} key={item.id} />
        ))}
      </div>
    </>
  );
}

export default CategoryContainer;
