import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";

import { INPUT_STYLE } from "../../Utility/constants";
import { getTotalPrice } from "../../Store/cartSlice";

import Button from "../../Components/Button";

const coupons = {
  qwqw: 50,
  www: 100,
  rst: 500,
};

function CouponForm({ coupon, setCoupon }) {
  const totalPrice = useSelector(getTotalPrice);
  const { getValues, register, handleSubmit, reset } = useForm();

  function onSubmitCoupon() {
    const { coupon } = getValues();
    if (!coupon) {
      toast.error("Coupon field is Empty");
      return;
    }

    const couponAmount = coupons[coupon];

    if (couponAmount === undefined || null) {
      toast.error("invalid coupon");
      return;
    }

    if (couponAmount > totalPrice)
      toast.error("coupon value is greater than total price");
    else {
      setCoupon(couponAmount);
      toast.success("Coupon Applied ");
    }
  }

  function handleDeleteCoupon() {
    setCoupon("");
    reset();
    toast.success("coupon removed");
  }

  return (
    <form
      method="get"
      className="mb-2 flex items-center justify-between gap-5"
      onSubmit={handleSubmit(onSubmitCoupon)}
    >
      <input
        type="text"
        placeholder="Coupon Code"
        name="coupon"
        {...register("coupon")}
        className={`max-w-[200px] ${INPUT_STYLE}`}
        disabled={coupon ? true : false}
      />
      <div>
        {!coupon && <Button>Apply</Button>}
        {coupon && <Button onClick={handleDeleteCoupon}>remove</Button>}
      </div>
    </form>
  );
}

export default CouponForm;
