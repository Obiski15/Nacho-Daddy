import { useEffect } from "react";
import FullPageSpinner from "../../Components/FullPageSpinner";
import { useUser } from "./useUser";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  // get authenticated user
  const { isLoading, isAuthenticated } = useUser();

  // if there is no authenticated user redirect to login
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, isLoading, navigate]);

  // check for loading state
  if (isLoading) return <FullPageSpinner />;

  // if there is a user redirect to dashboard
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
