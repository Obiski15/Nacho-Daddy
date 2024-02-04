import { useQuery } from "@tanstack/react-query";

import HorizontalCategoriesContainer from "./HorizontalCategoriesContainer";

import { fetchItems } from "../../Services/itemsApi";

function FlashSale() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["flashSale"],
    queryFn: async () => {
      const data = await fetchItems("Flash_Sale");
      return data;
    },
  });

  return (
    <HorizontalCategoriesContainer
      data={data}
      isLoading={isLoading}
      discountInPercentage={50}
      error={error}
      categoryName="Flash Sale"
    />
  );
}

export default FlashSale;
