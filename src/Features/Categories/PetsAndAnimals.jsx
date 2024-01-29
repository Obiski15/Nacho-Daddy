import { useQuery } from "@tanstack/react-query";
import { fetchItems } from "../../Services/itemsApi";

import CategoryContainer from "./CategoryContainer";
import Spinner from "../../Components/Spinner";
import ErrorMessage from "../../Components/ErrorMessage";

function PetsAndAnimals() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["petsAndAnimals"],
    queryFn: async () => {
      const data = await fetchItems("Pets_And_Animals");
      return data;
    },
  });

  if (isLoading) return <Spinner />;
  if (isError) return <ErrorMessage error={error.message} />;

  return <CategoryContainer data={data} />;
}

export default PetsAndAnimals;
