import { useQuery } from "@tanstack/react-query";
import { fetchItems } from "../../Services/itemsApi";

import CategoryContainer from "./CategoryContainer";
import DummyItem from "../../Components/DummyItem";
import ErrorMessage from "../../Components/ErrorMessage";

function HealthAndBeauty() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["healthAndBeauty"],
    queryFn: async () => {
      const data = await fetchItems("Health_And_Beauty");
      return data;
    },
  });

  if (isLoading) return <DummyItem />;
  if (isError) return <ErrorMessage error={error.message} />;

  return <CategoryContainer data={data} />;
}

export default HealthAndBeauty;
