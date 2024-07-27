import { createBrowserRouter } from "react-router-dom";
import { paths } from "./frontend";
import { CreateAccount } from "../pages/auth/createAccount";
import { Login } from "../pages/auth/login";
import { ForgotPassword } from "../pages/auth/forgotPassword";
import { SetPassword } from "../pages/auth/setPassword";

export const router = createBrowserRouter([
  {
    path: paths.home,
    element: <CreateAccount />,
  },
  { path: paths.login, element: <Login /> },
  {
    path: paths.forgot_password,
    element: <ForgotPassword />,
  },
  {
    path: paths.set_password,
    element: <SetPassword />,
  },
]);
