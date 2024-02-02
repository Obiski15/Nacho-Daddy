import toast from "react-hot-toast";

import { formatCurrency } from "../../Utility/helpers";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { cancelOrder } from "../../Services/orderApi";

import Button from "../../Components/Button";

function MyOrderDetails({ order }) {
  const { status, id: orderId, discount, totalPrice, cart } = order;
  const queryClient = useQueryClient();

  const { mutate, isPending, error } = useMutation({
    mutationKey: ["cancelOrder"],
    mutationFn: async (id) => {
      await cancelOrder(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
      toast.success("order cancelled");
    },
    onError: () => {
      toast.error(error.message || "an error occured");
    },
  });

  function handleCancelOrder() {
    mutate(orderId);
  }

  return (
    <div className="no-scrollbar relative overflow-scroll rounded-md bg-stone-200 p-2">
      <div className="my-3 ml-3 text-sm">
        {JSON.parse(cart).map((item) => (
          <div key={item.id} className="mb-1 font-light">
            <p>
              {item.quantity}X {item.itemName} @{" "}
              {formatCurrency(item.unitPrice)}
            </p>
          </div>
        ))}
        {discount && (
          <p className="font-light">discount: {formatCurrency(discount)}</p>
        )}
        <p className="mt-1 font-semibold capitalize">
          amount paid: {formatCurrency(totalPrice)}
        </p>
      </div>
      <Button
        moreStyle={"absolute right-1 -bottom-3 mb-[20px]"}
        onClick={handleCancelOrder}
        disabled={status === "cancelled" || isPending}
      >
        Cancel Order
      </Button>
    </div>
  );
}

export default MyOrderDetails;
