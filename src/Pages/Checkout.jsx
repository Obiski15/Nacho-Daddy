import { useState } from "react";
import { useSelector } from "react-redux";

import CheckoutSummary from "../Features/Order/CheckoutSummary";
import Header from "../Components/Header/Header";
import CheckoutForm from "../Features/Order/CheckoutForm";

function Checkout() {
  const [formValues, setFormvalues] = useState("");
  const cart = useSelector((state) => state.cart.cart);

  return (
    <>
      <Header />

      <div className="m-3">
        {!cart.length ? (
          <p className="col-span-2 text-sm font-semibold">
            Your cart is empty ):
          </p>
        ) : (
          <div className="grid grid-cols-1 grid-rows-[auto] items-start justify-center gap-5 lg:grid-cols-[1fr_20rem]">
            <CheckoutForm setFormvalues={setFormvalues} />
            <CheckoutSummary formValues={formValues} />
          </div>
        )}
      </div>
    </>
  );
}

export default Checkout;
