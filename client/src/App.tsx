import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup from "./auth/Signup";
import Login from "./auth/Login"; // Correct Login component import
import ForgotPassword from "./auth/ForgotPassword";
import ResetPassword from "./auth/ResetPassword";
import VerifyEmail from "./auth/VerifyEmail";
import HereSection from "./components/HereSection";
import MainLayout from "./layout/MainLayout";
import Profile from "./components/Profile";
import SearchPage from "./components/SearchPage";
import RestaurantDetail from "./components/RestaurantDetail";
import Cart from "./components/Cart";
import Restaurant from "./admin/Restaurant";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/",
        element: <HereSection />,
      },
      {
        path: "/search/:text",
        element: <SearchPage />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantDetail />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      //admin services start from here
      {
        path: "/admin/restaurant",
        element: <Restaurant />,
      },
    ], // Add children if needed
  },
  {
    path: "/login",
    element: <Login />, // Use the correct Login component
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />, // Use the correct Login component
  },
  {
    path: "/reset-password",
    element: <ResetPassword />, // Use the correct Login component
  },
  {
    path: "/verify-email",
    element: <VerifyEmail />, // Use the correct Login component
  },
]);

function App() {
  return (
    <main>
      <RouterProvider router={appRouter} />
    </main>
  );
}

export default App;
