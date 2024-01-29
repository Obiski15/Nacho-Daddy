import { useQuery } from "@tanstack/react-query";
import { fetchOrders } from "../Services/orderApi";

import Header from "../Components/Header/Header";
import MyOrderRow from "../Features/Order/MyOrderRow";
import ErrorMessage from "../Components/ErrorMessage";
import FullPageSpinner from "../Components/FullPageSpinner";
import Heading from "../Components/Heading";

function MyOrder() {
  const {
    isLoading,
    isError,
    error,
    data: orders,
  } = useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      const orders = await fetchOrders();
      return orders;
    },
  });

  if (isLoading) return <FullPageSpinner />;

  if (isError) return <ErrorMessage error={error.message} />;
  return (
    <div>
      <Header />
      {
        <div className="m-2">
          <Heading type="h2" moreStyles="mb-3">
            your orders
          </Heading>
          {!orders.length ? (
            <p className="text-sm font-semibold">
              you do not have any order yet ):
            </p>
          ) : (
            <MyOrderRow orders={orders} />
          )}
        </div>
      }
    </div>
  );
}

export default MyOrder;
