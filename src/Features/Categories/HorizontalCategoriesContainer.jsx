import Spinner from "../../Components/Spinner";
import ErrorMessage from "../../Components/ErrorMessage";

import HorizontalCategoriesItem from "./HorizontalCategoriesItem";
import HorizontalCategoriesHeader from "./HorizontalCategoriesHeader";

function HorizontalCategoriesContainer({
  discountInPercentage,
  categoryName,
  data: items,
  isLoading,
  error,
}) {
  return (
    <div className="relative col-span-3 px-2">
      <HorizontalCategoriesHeader
        discountInPercentage={discountInPercentage}
        categoryName={categoryName}
      />
      {isLoading ? (
        <div className="mt-40">
          <Spinner />
        </div>
      ) : (
        <ul className="no-scrollbar flex gap-3 overflow-x-scroll px-1 pb-2">
          {error ? (
            <ErrorMessage error={error.message} />
          ) : (
            items.map((item) => (
              <HorizontalCategoriesItem
                key={item.id}
                discountInPercentage={discountInPercentage}
                item={item}
              />
            ))
          )}
        </ul>
      )}
    </div>
  );
}

export default HorizontalCategoriesContainer;
