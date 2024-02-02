import { useQuery } from "@tanstack/react-query";
import { fetchItems } from "../../Services/itemsApi";

import CategoryContainer from "./CategoryContainer";
import DummyItem from "../../Components/DummyItem";
import ErrorMessage from "../../Components/ErrorMessage";

function BabyItems() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["babyItems"],
    queryFn: async () => {
      const data = await fetchItems("Baby_Items");
      return data;
    },
  });

  if (isLoading) return <DummyItem />;
  if (isError) return <ErrorMessage error={error.message} />;

  return <CategoryContainer data={data} />;
}

export default BabyItems;
