import { useState } from "react";
import { useSelector } from "react-redux";

import Header from "../Components/Header/Header";
import CheckoutForm from "../Features/Order/CheckoutForm";
import CheckoutSummary from "../Features/Order/CheckoutSummary";

import { useForm } from "react-hook-form";

function Checkout() {
  const [formValues, setFormvalues] = useState("");
  const {
    getValues,
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
            <CheckoutForm
              setFormvalues={setFormvalues}
              register={register}
              getValues={getValues}
              errors={errors}
              handleSubmit={handleSubmit}
            />
            <CheckoutSummary formValues={formValues} reset={reset} />
          </div>
        )}
      </div>
    </>
  );
}

export default Checkout;
