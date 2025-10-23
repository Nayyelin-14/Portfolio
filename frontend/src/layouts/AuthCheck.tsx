// components/RouteGuard.tsx
import Loader from "@/common/Loader";
import { useAuthCheckQuery } from "@/store/slices/userApiSlice";

import { Navigate, Outlet } from "react-router";

interface RouteGuardProps {
  requireAuth?: boolean; // true = protected route, false = public route
}

function RouteGuard({ requireAuth = false }: RouteGuardProps) {
  const { data, error, isLoading } = useAuthCheckQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  const isAuthenticated = data?.success && !error;

  // Show loading spinner
  if (isLoading) {
    return <Loader />;
  }

  // Protected route: redirect to login if not authenticated
  if (requireAuth && !isAuthenticated) {
    return <Navigate to="/auth/login" replace />;
  }

  // Public route (login/register): redirect to home if authenticated
  if (!requireAuth && isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  // Allow access
  return <Outlet />;
}

export default RouteGuard;
