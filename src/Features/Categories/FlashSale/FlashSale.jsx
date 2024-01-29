import { useQuery } from "@tanstack/react-query";
import { fetchItems } from "../../../Services/itemsApi";

import FlashSaleHeader from "./FlashSaleHeader";
import FlashSaleItem from "./FlashSaleItem";
import ErrorMessage from "../../../Components/ErrorMessage";
import Spinner from "../../../Components/Spinner";

function FlashSale() {
  const {
    data: items,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["flashSale"],
    queryFn: async () => {
      const data = await fetchItems("Flash_Sale");
      return data;
    },
  });

  return (
    <div className="relative col-span-3 px-2">
      <FlashSaleHeader />
      {isLoading ? (
        <div className="mt-40">
          <Spinner />
        </div>
      ) : (
        <ul className="no-scrollbar flex gap-3 overflow-x-scroll px-1 pb-2">
          {isError ? (
            <ErrorMessage error={error.message} />
          ) : (
            items.map((item) => <FlashSaleItem item={item} key={item.id} />)
          )}
        </ul>
      )}
    </div>
  );
}

export default FlashSale;
