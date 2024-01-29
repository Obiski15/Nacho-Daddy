import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { signOut } from "../../Services/authApi";

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: logout, isPending } = useMutation({
    mutationFn: signOut,

    onSuccess: () => {
      toast.success("logout sucessfull");
      navigate("/", { replace: true });
      queryClient.removeQueries();
    },

    onError: () => {
      toast.error("failed to logout");
    },
  });
  return { logout, isPending };
}
