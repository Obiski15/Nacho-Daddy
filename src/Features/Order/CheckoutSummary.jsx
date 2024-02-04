import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { uid } from "uid/secure";
import { useSelector, useDispatch } from "react-redux";

import { clearCart, getTotalPrice } from "../../Store/cartSlice";
import { formatCurrency, formatDate } from "../../Utility/helpers";
import { placeOrder } from "../../Services/orderApi";

import Button from "../../Components/Button";
import CheckoutSummaryRow from "./CheckoutSummaryRow";
import CouponForm from "./CouponForm";
import FullPageSpinner from "../../Components/FullPageSpinner";
import Heading from "../../Components/Heading";

const date = new Date();

function CheckoutSummary({ formValues, reset }) {
  const { fullname, address, phone, state, city, email } = formValues;
  const [coupon, setCoupon] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const totalPrice = useSelector(getTotalPrice);
  const deliveryDate = new Date().setDate(date.getDate() + 3);

  const finalPrice = coupon ? totalPrice - coupon : totalPrice;

  const cart = useSelector((state) => state.cart.cart);

  const { mutate, isPending, error } = useMutation({
    mutationKey: ["placeOrder"],
    mutationFn: async (orderDetails) => {
      await placeOrder(orderDetails);
    },
    onSuccess: () => {
      toast.success("order placed");
      navigate("/myorders");
      reset();
      dispatch(clearCart());
    },

    onError: () => {
      toast.error(error.message || "an error occured");
    },
  });

  function handleOrder() {
    const orderDetails = {
      id: uid(),
      cart: JSON.stringify(cart),
      address: `${address}, ${city}, ${state}`,
      phone,
      fullname,
      email,
      discount: !coupon ? "" : coupon,
      status: "processing",
      deliveryDate: formatDate(deliveryDate),
      totalPrice: finalPrice,
    };
    mutate(orderDetails);
  }

  if (isPending) return <FullPageSpinner />;

  return (
    <div className="no-scrollbar h-auto overflow-x-scroll rounded-lg bg-stone-200 px-4 py-2">
      <Heading type="h2" font="bold">
        order details
      </Heading>
      {formValues ? (
        <>
          <div className="mt-2 font-semibold">
            <CheckoutSummaryRow name="fullname">{fullname}</CheckoutSummaryRow>
            <CheckoutSummaryRow name="city">{city}</CheckoutSummaryRow>
            <CheckoutSummaryRow name="state">{state}</CheckoutSummaryRow>
            <CheckoutSummaryRow name="address">{address}</CheckoutSummaryRow>
            <CheckoutSummaryRow name="Phone">{phone}</CheckoutSummaryRow>
            <CheckoutSummaryRow name="email">{email}</CheckoutSummaryRow>
            <CheckoutSummaryRow name="delivery date">
              {formatDate(deliveryDate)}
            </CheckoutSummaryRow>
            <CheckoutSummaryRow name="total price">
              {coupon ? (
                <>
                  <del>{formatCurrency(totalPrice)}</del>{" "}
                  <span>{formatCurrency(finalPrice)}</span>
                </>
              ) : (
                formatCurrency(totalPrice)
              )}
            </CheckoutSummaryRow>
            <CouponForm coupon={coupon} setCoupon={setCoupon} />
            <p className="mb-2 rounded-lg bg-red-200 px-2">
              Trial coupons: qwqw || www || rst
            </p>
          </div>

          <Button moreStyle={"w-full"} onClick={handleOrder}>
            place order({formatCurrency(finalPrice)})
          </Button>
        </>
      ) : (
        <div className="mt-3">
          <Heading font="semibold" moreStyles="italic">
            Fill out the form to place your order
          </Heading>
        </div>
      )}
    </div>
  );
}

export default CheckoutSummary;
