import { useQuery } from "@tanstack/react-query";

import { fetchItems } from "../../Services/itemsApi";

import HorizontalCategoriesContainer from "./HorizontalCategoriesContainer";

function Trending() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["trending"],
    queryFn: async () => {
      const data = await fetchItems("Trending");
      return data;
    },
  });

  return (
    <HorizontalCategoriesContainer
      data={data}
      isLoading={isLoading}
      discountInPercentage={null}
      categoryName="trending"
      error={error}
    />
  );
}

export default Trending;
