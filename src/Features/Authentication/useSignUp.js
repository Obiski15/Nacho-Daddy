import { useMutation } from "@tanstack/react-query";
import { signUpNewUser } from "../../Services/authApi";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useSignUp() {
  const navigate = useNavigate();
  const { mutate: signUp, isPending } = useMutation({
    mutationFn: ({ fullname, email, password }) =>
      signUpNewUser(fullname, email, password),

    onSuccess: () => {
      toast.success("Account created successfully. Kindly login to continue");
      navigate("/login");
    },

    onError: (err) => {
      toast.error("Account creation failed");
    },
  });

  return { signUp, isPending };
}
