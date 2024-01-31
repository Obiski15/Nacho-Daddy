import toast from "react-hot-toast";

import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signInWithEmail } from "../../Services/authApi";

export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: login, isPending } = useMutation({
    mutationFn: ({ email, password }) => signInWithEmail(email, password),

    onSuccess: (data) => {
      toast.success("Login successful");
      queryClient.setQueryData(["user"], data.user);
      navigate("/items", { replace: true });
    },

    onError: () => {
      toast.error("invalid login credentials");
    },
  });
  return { login, isPending };
}
