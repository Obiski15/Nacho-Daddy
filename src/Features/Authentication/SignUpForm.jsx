import { useEffect } from "react";
import { Link } from "react-router-dom";

import { INPUT_STYLE } from "../../Utility/constants";
import { useForm } from "react-hook-form";
import { useSignUp } from "./useSignUp";

import FormInput from "./FormInput";
import Button from "../../Components/Button";

function SignUpForm() {
  const { signUp, isPending } = useSignUp();
  const {
    getValues,
    register,
    handleSubmit,
    formState: { errors },
    setFocus,
    reset,
  } = useForm();

  function handleSignUp() {
    const { fullname, email, password } = getValues();
    signUp(
      { fullname, email, password },
      {
        onSettled: () => reset(),
      },
    );
  }

  useEffect(() => {
    setFocus("fullname");
  }, [setFocus]);

  return (
    <form
      className="w-[100%] p-3"
      onSubmit={handleSubmit(handleSignUp)}
      autoComplete="on"
    >
      <div className="flex flex-col items-start justify-center gap-2">
        <FormInput error={errors?.fullname?.message}>
          <input
            {...register("fullname", {
              required: "field is required",
            })}
            type="name"
            name="fullname"
            placeholder="Full Name"
            className={INPUT_STYLE}
          />
        </FormInput>

        <FormInput error={errors?.email?.message}>
          <input
            {...register("email", {
              required: "field is required",
              pattern: {
                value: /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/,
                message: "invalid email format",
              },
            })}
            type="email"
            name="email"
            placeholder="Email"
            className={INPUT_STYLE}
          />
        </FormInput>

        <FormInput error={errors?.password?.message}>
          <input
            {...register("password", {
              required: "field is required",
              minLength: {
                value: 4,
                message: "min password length is 4",
              },
            })}
            name="password"
            placeholder="Password"
            className={INPUT_STYLE}
            type="password"
          />
        </FormInput>

        <FormInput error={errors?.confirmPassword?.message}>
          <input
            {...register("confirmPassword", {
              required: "field is required",
              minLength: {
                value: 4,
                message: "min password length is 4",
              },
              validate: (value, formValues) =>
                value === formValues.password || "password dosen't match",
            })}
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
            className={INPUT_STYLE}
          />
        </FormInput>

        <p className="ml-1 text-sm">
          <span>Already have an account? </span>
          <Link to="/" className="capitalize text-blue-400 hover:underline">
            login
          </Link>
        </p>

        <Button moreStyle={"w-[100%]"} disabled={isPending}>
          Sign up
        </Button>
      </div>
    </form>
  );
}

export default SignUpForm;
