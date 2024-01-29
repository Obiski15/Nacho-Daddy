import { useQuery } from "@tanstack/react-query";
import { fetchItems } from "../../Services/itemsApi";

import CategoryContainer from "./CategoryContainer";
import Spinner from "../../Components/Spinner";
import ErrorMessage from "../../Components/ErrorMessage";

function FashionAndClothing() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["fashionAndClothing"],
    queryFn: async () => {
      const data = await fetchItems("Fashion_And_Clothing");
      return data;
    },
  });

  if (isLoading) return <Spinner />;
  if (isError) return <ErrorMessage error={error.message} />;

  return <CategoryContainer data={data} />;
}

export default FashionAndClothing;
