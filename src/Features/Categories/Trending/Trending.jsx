import { useQuery } from "@tanstack/react-query";
import { fetchItems } from "../../../Services/itemsApi";

import TrendingHeader from "./TrendingHeader";
import TrendingItem from "./TrendingItem";
import ErrorMessage from "../../../Components/ErrorMessage";
import Spinner from "../../../Components/Spinner";

function Trending() {
  const {
    data: items,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["trending"],
    queryFn: async () => {
      const data = await fetchItems("Trending");
      return data;
    },
  });

  return (
    <div className="relative col-span-3 px-2">
      <TrendingHeader />
      {isLoading ? (
        <div className="mt-40">
          <Spinner />
        </div>
      ) : (
        <ul className="no-scrollbar flex gap-3 overflow-x-scroll px-1 pb-2">
          {isError ? (
            <ErrorMessage error={error.message} />
          ) : (
            items.map((item) => <TrendingItem item={item} key={item.id} />)
          )}
        </ul>
      )}
    </div>
  );
}

export default Trending;
