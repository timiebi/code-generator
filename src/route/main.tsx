import { createBrowserRouter } from "react-router-dom";
import { paths } from "./frontend";
import { CreateAccount } from "../pages/auth/createAccount";
import { Login } from "../pages/auth/login";
import { ForgotPassword } from "../pages/auth/forgotPassword";
import { SetPassword } from "../pages/auth/setPassword";
import { Main } from "../pages/main";
import { HomePage } from "../pages/homePage";
import { ProfilePage } from "../pages/profile";
import { Root } from "./root";
import { UserProfile } from "../pages/profile/profile";
import { ProfileSettings } from "../pages/profile/settings";

export const router = createBrowserRouter([
   {
      path: paths.create_account,
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
   {
      path: paths.main,
      element: <Root />,
      children: [
         {
            path: "",
            element: <Main />,
            children: [
               {
                  index: true,
                  element: <HomePage />,
               },
            ],
         },
         {
            path: paths.profile,
            element: <ProfilePage />,
         },
         {
            path: paths.userProfile,
            element: <UserProfile />,
         },
         {
            path: paths.profileSettings,
            element: <ProfileSettings />,
         },
      ],
   },
]);
