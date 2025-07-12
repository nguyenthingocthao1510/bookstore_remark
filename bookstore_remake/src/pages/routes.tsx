import {
  accountRoute,
  cartRoute,
  homePageRoute,
  registerRoute,
} from "src/routes/routes.contants";
import { RegisterPage } from "./registerPage";
import { CartPage } from "./cart";
import { AccountPage } from "./account";
import { HomepagePage } from "./homepage/component";

const bookstoreRoute = [
  {
    path: homePageRoute,
    name: "Homepage",
    element: <HomepagePage />,
  },
  {
    path: registerRoute,
    name: "Register",
    element: <RegisterPage />,
  },
  {
    path: cartRoute,
    name: "Cart",
    element: <CartPage />,
  },
  {
    path: accountRoute,
    name: "Account",
    element: <AccountPage />,
  },
];

export default bookstoreRoute;
