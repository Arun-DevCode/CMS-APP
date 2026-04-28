import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "../pages/index";
import SignIn from "../pages/Sign-in";
import SignUp from "../pages/Sign-up";
import UserDashboard from "../pages/UserDashboard";
import ProtectedRoute from "./protectedRoute"; // Rename import to match

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/user/dashboard",
    element: (
      <ProtectedRoute>
        <UserDashboard />
      </ProtectedRoute>
    ),
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
