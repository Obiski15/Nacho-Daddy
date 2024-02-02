import { useState } from "react";

import MyOrderDetails from "./MyOrderDetails";

import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { SMALL_ICON_SIZE } from "../../Utility/constants";

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
              <IoIosArrowDown
                size={SMALL_ICON_SIZE}
                onClick={handleHideDetails}
              />
            ) : (
              <IoIosArrowForward
                size={SMALL_ICON_SIZE}
                onClick={() => {
                  handleShowDetails(order.id);
                }}
              />
            )}
            <div
              className="no-scrollbar grid grow items-center justify-between gap-3 overflow-scroll px-2 text-left capitalize max-[768px]:grid-cols-2 max-[450px]:grid-cols-1 min-[768px]:grid-cols-4"
              key={order.id}
            >
              <div className="justify-left flex items-center gap-2 whitespace-nowrap">
                <p>order id: </p>
                <p>{order.id}</p>
              </div>

              <div className="justify-left flex items-center gap-2 whitespace-nowrap">
                <p>order status:</p>
                <p
                  className={`${
                    order.status === "cancelled"
                      ? "bg-red-500"
                      : order.status === "processing"
                        ? "bg-yellow-400"
                        : "bg-green-400"
                  } rounded-md px-2 py-1 text-sm font-semibold`}
                >
                  {order.status}
                </p>
              </div>

              <div className="justify-left flex items-center gap-2 whitespace-nowrap">
                <p>delivery date:</p>
                <p>{order.deliveryDate}</p>
              </div>

              <div className="justify-left flex items-center gap-2 whitespace-nowrap font-semibold">
                <p>Order Placed By:</p>
                <p className="text-yellow-700 ">{order.fullname}</p>
              </div>
            </div>
          </div>
          {clickedId === order.id && <MyOrderDetails order={order} />}
        </div>
      ))}
    </div>
  );
}

export default MyOrderRow;
