import { useForm } from "react-hook-form";

import { INPUT_STYLE as CONST_INPUT_STYLE } from "../../Utility/constants";
import { useUser } from "../Authentication/useUser";

import FormRow from "../../Components/FormRow";
import Button from "../../Components/Button";
import Heading from "../../Components/Heading";

const INPUT_STYLE = `${CONST_INPUT_STYLE} grow flex-[85%]`;

function CheckoutForm({ setFormvalues }) {
  const {
    getValues,
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { user } = useUser();

  function onSubmit() {
    const value = getValues();
    setFormvalues({
      ...value,
      fullname: user?.user_metadata?.fullname,
      email: user?.email,
    });
    reset();
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      method="get"
      className="rounded-lg bg-stone-200 p-2"
    >
      <Heading type="h1">checkout</Heading>
      <div className="mx-3 my-5">
        <FormRow label={"fullname"} error={errors?.fullname?.message}>
          <input
            {...register("fullname")}
            name={"fullname"}
            id={"fullname"}
            value={user?.user_metadata?.fullname}
            type="text"
            placeholder="Full Name"
            className={INPUT_STYLE}
            disabled
          />
        </FormRow>
        <FormRow label={"state"} error={errors?.state?.message}>
          <input
            {...register("state", {
              required: "field is required",
            })}
            name={"state"}
            type="text"
            placeholder="State"
            id={"state"}
            className={INPUT_STYLE}
          />
        </FormRow>
        <FormRow label={"city"} error={errors?.city?.message}>
          <input
            {...register("city", {
              required: "field is required",
            })}
            name={"city"}
            type="text"
            placeholder="Current City"
            id={"city"}
            className={INPUT_STYLE}
          />
        </FormRow>
        <FormRow label={"address"} error={errors?.address?.message}>
          <input
            {...register("address", {
              required: "field is required",
            })}
            name={"address"}
            type="text"
            placeholder="House Address"
            id={"address"}
            className={INPUT_STYLE}
          />
        </FormRow>
        <FormRow label={"email"} error={errors?.email?.message}>
          <input
            type="email"
            id={"email"}
            {...register("email")}
            name={"email"}
            placeholder="Email"
            value={user?.email}
            className={INPUT_STYLE}
            disabled
          />
        </FormRow>
        <FormRow label={"phone"} error={errors?.phone?.message}>
          <input
            type="tel"
            {...register("phone", {
              required: "field is required",
              pattern: {
                value: /^\+(?:[0-9] ?){6,14}[0-9]$/,
                message: "invalid phone format",
              },
            })}
            name={"phone"}
            placeholder="Phone Number"
            id={"phone"}
            className={INPUT_STYLE}
          />
        </FormRow>
      </div>
      <Button moreStyle={"float-right"}>confirm</Button>
    </form>
  );
}

export default CheckoutForm;
