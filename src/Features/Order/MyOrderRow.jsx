import { useState } from "react";

import MyOrderDetails from "./MyOrderDetails";

import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

function MyOrderRow({ orders }) {
  const [clickedId, setClickedId] = useState(false);

  function handleHideDetails() {
    setClickedId("");
  }

  function handleShowDetails(id) {
    setClickedId(id);
  }

  const sorted = orders.sort(
    (a, b) =>
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
  );

  return (
    <div>
      {sorted.map((order) => (
        <div key={order.id}>
          <div className="mb-1 flex items-center justify-between gap-4 bg-stone-300 p-2 text-sm ">
            {clickedId === order.id ? (
              <IoIosArrowDown onClick={handleHideDetails} />
            ) : (
              <IoIosArrowForward
                onClick={() => {
                  handleShowDetails(order.id);
                }}
              />
            )}
            <div
              className="grid grow grid-cols-4 justify-between text-left capitalize"
              key={order.id}
            >
              <p>order id: {order.id}</p>
              <p>
                order status:{" "}
                <span
                  className={`${
                    order.status === "cancelled"
                      ? "bg-red-500"
                      : order.status === "processing"
                        ? "bg-yellow-400"
                        : "bg-green-400"
                  } ml-2 rounded-md px-2 py-1 text-sm font-semibold`}
                >
                  {order.status}
                </span>
              </p>
              <p>delivery date: {order.deliveryDate}</p>
              <p className="font-semibold text-yellow-700">
                Order Placed By: {order.fullname}
              </p>
            </div>
          </div>
          {clickedId === order.id && <MyOrderDetails order={order} />}
        </div>
      ))}
    </div>
  );
}

export default MyOrderRow;
