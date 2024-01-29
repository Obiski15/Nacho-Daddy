import { useQuery } from "@tanstack/react-query";
import { fetchItems } from "../../Services/itemsApi";

import CategoryContainer from "./CategoryContainer";
import Spinner from "../../Components/Spinner";
import ErrorMessage from "../../Components/ErrorMessage";

function ToysAndGaming() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["toysAndGaming"],
    queryFn: async () => {
      const data = await fetchItems("Toys_And_Games");
      return data;
    },
  });

  if (isLoading) return <Spinner />;
  if (isError) return <ErrorMessage error={error.message} />;

  return <CategoryContainer data={data} />;
}

export default ToysAndGaming;
