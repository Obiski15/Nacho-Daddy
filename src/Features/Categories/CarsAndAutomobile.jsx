import { useQuery } from "@tanstack/react-query";
import { fetchItems } from "../../Services/itemsApi";

import CategoryContainer from "./CategoryContainer";
import Spinner from "../../Components/Spinner";
import ErrorMessage from "../../Components/ErrorMessage";

function CarsAndAutomobile() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["carsAndAutomobile"],
    queryFn: async () => {
      const data = await fetchItems("Cars_And_Automobile");
      return data;
    },
  });

  if (isLoading) return <Spinner />;
  if (isError) return <ErrorMessage error={error.message} />;

  return <CategoryContainer data={data} />;
}

export default CarsAndAutomobile;
