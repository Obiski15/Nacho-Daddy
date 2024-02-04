import { Link } from "react-router-dom";
import { useEffect } from "react";

import { INPUT_STYLE } from "../../Utility/constants";
import { useLogin } from "./useLogin";
import { useForm } from "react-hook-form";

import FormInput from "./FormInput";
import Button from "../../Components/Button";

function LoginForm() {
  const {
    getValues,
    setFocus,
    reset,
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { login, isPending } = useLogin();

  function handleLogin() {
    const { email, password } = getValues();
    login(
      { email, password },
      {
        onSettled: () => reset(),
      },
    );
  }

  useEffect(() => {
    setFocus("email");
  }, [setFocus]);

  return (
    <form onSubmit={handleSubmit(handleLogin)} className="w-full p-3">
      <div className="flex flex-col items-start justify-center gap-3">
        <FormInput error={errors?.email?.message}>
          <input
            {...register("email", {
              required: "field is required",
              pattern: {
                value: /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/,
                message: "invalid email format",
              },
            })}
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            className={INPUT_STYLE}
            autoComplete="email"
          />
        </FormInput>

        <FormInput error={errors?.email?.message}>
          <input
            {...register("password", {
              required: "field is required",
              minLength: {
                value: 4,
                message: "min password length is 4",
              },
            })}
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            className={INPUT_STYLE}
            autoComplete="current-password"
          />
        </FormInput>

        <p className="ml-1 text-sm">
          <span>Don't have an account? </span>
          <Link
            to="/signup"
            className="capitalize text-blue-400 hover:underline"
          >
            sign up
          </Link>
        </p>

        <Button moreStyle={"w-full"} disabled={isPending}>
          login
        </Button>
      </div>
    </form>
  );
}

export default LoginForm;
