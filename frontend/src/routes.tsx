import { createBrowserRouter } from "react-router";
import MainLayout from "./layouts/MainLayout";
import Homepage from "./pages/Homepage";
import AuthLayout from "./layouts/AuthLayout";
import LoginPage from "./pages/Auth/LoginPage";
import RegisterPage from "./pages/Auth/RegisterPage";
import ProductDetails from "./pages/ProductDetails";

import RouteGuard from "./layouts/AuthCheck";
import Profile from "./pages/Profile";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "/products/:id",
        element: <ProductDetails />,
      },
    ],
  },
  // Protected routes under MainLayout
  {
    element: <RouteGuard requireAuth={true} />,
    children: [
      {
        path: "/",
        element: <MainLayout />,
        children: [
          {
            path: "/profile",
            element: <Profile />,
          },
          {
            path: "/orders",
            // element: <OrdersPage />,
          },
        ],
      },
    ],
  },
  {
    element: <RouteGuard requireAuth={false} />, // false = redirect if authenticated
    children: [
      {
        path: "/auth",
        element: <AuthLayout />,
        children: [
          {
            path: "login",
            element: <LoginPage />,
          },
          {
            path: "register",
            element: <RegisterPage />,
          },
        ],
      },
    ],
  },
]);

export default router;
