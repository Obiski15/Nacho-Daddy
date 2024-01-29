import { useQuery } from "@tanstack/react-query";
import { fetchItems } from "../../Services/itemsApi";

import CategoryContainer from "./CategoryContainer";
import ErrorMessage from "../../Components/ErrorMessage";
import Spinner from "../../Components/Spinner";

function PhonesAndAccessories() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["phonesAndAccessories"],
    queryFn: async () => {
      const data = await fetchItems("Phones_And_Accessories");
      return data;
    },
  });

  if (isLoading) return <Spinner />;
  if (isError) return <ErrorMessage error={error.message} />;

  return <CategoryContainer data={data} />;
}

export default PhonesAndAccessories;
