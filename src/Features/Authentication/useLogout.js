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
      const confirmLogout = window.confirm("Confirm to logout");
      if (!confirmLogout) return;
      toast.success("Logged Out");
      navigate("/", { replace: true });
      queryClient.removeQueries();
    },

    onError: () => {
      toast.error("Failed to Logout");
    },
  });
  return { logout, isPending };
}
